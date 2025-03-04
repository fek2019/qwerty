using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using LanguageLearningAPI.Data;

namespace LanguageLearningAPI.Services
{
    public class TestResultService : ITestResultService
    {
        private readonly ApplicationDbContext _context;

        public TestResultService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TestResult>> GetUserResultsAsync(string userId)
        {
            return await _context.TestResults
                .Where(r => r.UserId == userId)
                .OrderByDescending(r => r.CompletedAt)
                .ToListAsync();
        }

        public async Task<TestResult> GetTestResultByIdAsync(string id)
        {
            return await _context.TestResults.FindAsync(id);
        }

        public async Task<TestResult> GetUserTestResultAsync(string userId, string testId)
        {
            return await _context.TestResults
                .Where(r => r.UserId == userId && r.TestId == testId)
                .OrderByDescending(r => r.CompletedAt)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<TestResult>> GetLanguageLevelResultsAsync(string userId, string language, int level)
        {
            return await _context.TestResults
                .Where(r => r.UserId == userId && 
                       r.Language.ToLower() == language.ToLower() && 
                       r.Level == level)
                .OrderByDescending(r => r.CompletedAt)
                .ToListAsync();
        }

        public async Task SaveTestResultAsync(TestResult result)
        {
            // Check if this test was already taken by this user
            var existingResult = await _context.TestResults
                .Where(r => r.UserId == result.UserId && r.TestId == result.TestId)
                .FirstOrDefaultAsync();

            if (existingResult != null)
            {
                // Update existing result
                _context.Entry(existingResult).CurrentValues.SetValues(result);
            }
            else
            {
                // Add new result
                await _context.TestResults.AddAsync(result);
            }

            await _context.SaveChangesAsync();

            // Update user statistics
            await UpdateUserStatisticsAsync(result.UserId);
        }

        public async Task DeleteTestResultAsync(string id)
        {
            var result = await _context.TestResults.FindAsync(id);
            if (result != null)
            {
                _context.TestResults.Remove(result);
                await _context.SaveChangesAsync();

                // Update user statistics
                await UpdateUserStatisticsAsync(result.UserId);
            }
        }

        private async Task UpdateUserStatisticsAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user != null)
            {
                // Calculate total points based on test results
                var results = await _context.TestResults
                    .Where(r => r.UserId == userId)
                    .ToListAsync();

                int totalPoints = results.Sum(r => r.Score);
                user.TotalPoints = totalPoints;

                // Update user level based on points
                user.Level = CalculateUserLevel(totalPoints);

                // Update language progress
                await UpdateLanguageProgressAsync(userId);

                await _context.SaveChangesAsync();
            }
        }

        private async Task UpdateLanguageProgressAsync(string userId)
        {
            var user = await _context.Users
                .Include(u => u.Languages)
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user != null)
            {
                // Group results by language
                var results = await _context.TestResults
                    .Where(r => r.UserId == userId)
                    .ToListAsync();

                var languageGroups = results.GroupBy(r => r.Language.ToLower());

                foreach (var group in languageGroups)
                {
                    string language = group.Key;
                    var languageResults = group.ToList();

                    // Calculate progress percentage
                    int totalTests = languageResults.Count;
                    int completedTests = languageResults.Count(r => r.Score >= 70); // Consider tests with score >= 70% as completed
                    int progress = totalTests > 0 ? (completedTests * 100) / totalTests : 0;

                    // Calculate language level
                    int maxLevel = languageResults.Max(r => r.Level);

                    // Update or add language progress
                    var userLanguage = user.Languages?.FirstOrDefault(l => l.Language.ToLower() == language);
                    if (userLanguage != null)
                    {
                        userLanguage.Progress = progress;
                        userLanguage.Level = maxLevel;
                    }
                    else
                    {
                        if (user.Languages == null)
                        {
                            user.Languages = new List<UserLanguage>();
                        }

                        user.Languages.Add(new UserLanguage
                        {
                            Language = language,
                            Progress = progress,
                            Level = maxLevel
                        });
                    }
                }

                await _context.SaveChangesAsync();
            }
        }

        private int CalculateUserLevel(int totalPoints)
        {
            // Simple level calculation based on points
            if (totalPoints < 100) return 1;
            if (totalPoints < 300) return 2;
            if (totalPoints < 600) return 3;
            if (totalPoints < 1000) return 4;
            if (totalPoints < 1500) return 5;
            if (totalPoints < 2100) return 6;
            if (totalPoints < 2800) return 7;
            if (totalPoints < 3600) return 8;
            if (totalPoints < 4500) return 9;
            return 10;
        }
    }
}