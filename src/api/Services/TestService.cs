using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using LanguageLearningAPI.Data;
using System;

namespace LanguageLearningAPI.Services
{
    public class TestService : ITestService
    {
        private readonly ApplicationDbContext _context;

        public TestService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Test>> GetAllTestsAsync()
        {
            return await _context.Tests.ToListAsync();
        }

        public async Task<Test> GetTestByIdAsync(string id)
        {
            return await _context.Tests.FindAsync(id);
        }

        public async Task<IEnumerable<Test>> GetTestsByLanguageAndLevelAsync(string language, int level)
        {
            return await _context.Tests
                .Where(t => t.Language.ToLower() == language.ToLower() && t.Level == level)
                .ToListAsync();
        }

        public async Task CreateTestAsync(Test test)
        {
            test.Id = Guid.NewGuid().ToString();
            test.CreatedAt = DateTime.UtcNow;
            
            await _context.Tests.AddAsync(test);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTestAsync(Test test)
        {
            test.UpdatedAt = DateTime.UtcNow;
            
            _context.Tests.Update(test);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteTestAsync(string id)
        {
            var test = await _context.Tests.FindAsync(id);
            if (test != null)
            {
                _context.Tests.Remove(test);
                await _context.SaveChangesAsync();
            }
        }
    }
}