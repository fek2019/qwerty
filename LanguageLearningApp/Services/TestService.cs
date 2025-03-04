using LanguageLearningApp.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace LanguageLearningApp.Services
{
    public class TestService
    {
        private readonly IWebHostEnvironment _environment;
        private readonly string _dataPath;
        private readonly string _resultsPath;

        public TestService(IWebHostEnvironment environment)
        {
            _environment = environment;
            _dataPath = Path.Combine(_environment.ContentRootPath, "Data", "tests");
            _resultsPath = Path.Combine(_environment.ContentRootPath, "Data", "results");

            // Ensure directories exist
            Directory.CreateDirectory(_dataPath);
            Directory.CreateDirectory(_resultsPath);

            // Initialize test data if needed
            InitializeTestData();
        }

        public List<TestItem> GetTestsForLanguageAndLevel(string language, int level)
        {
            var filePath = Path.Combine(_dataPath, $"{language.ToLower()}_level{level}.json");
            if (!File.Exists(filePath))
            {
                return GenerateSampleTests(language, level);
            }

            var json = File.ReadAllText(filePath);
            return JsonSerializer.Deserialize<List<TestItem>>(json) ?? new List<TestItem>();
        }

        public TestItem GetTest(string language, int level, string testId)
        {
            var tests = GetTestsForLanguageAndLevel(language, level);
            return tests.FirstOrDefault(t => t.Id == testId);
        }

        public void SaveTestResult(TestResultViewModel result)
        {
            var testResult = new TestResult
            {
                Id = Guid.NewGuid().ToString(),
                UserId = "user@example.com", // In a real app, this would be the current user's ID
                TestId = result.TestId,
                Language = result.Language,
                Level = result.Level,
                Score = result.Score,
                TotalQuestions = result.TotalQuestions,
                CorrectAnswers = result.CorrectAnswers,
                IncorrectAnswers = result.IncorrectAnswers,
                TimeSpent = result.TimeSpent,
                CompletedAt = DateTime.UtcNow,
                Questions = result.Questions
            };

            var filePath = Path.Combine(_resultsPath, $"{testResult.Id}.json");
            var json = JsonSerializer.Serialize(testResult, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(filePath, json);

            // Update test completion status
            UpdateTestCompletionStatus(result.Language, result.Level, result.TestId);
        }

        public TestResult GetTestResult(string userId, string language, int level, string testId)
        {
            if (!Directory.Exists(_resultsPath))
            {
                return null;
            }

            var directory = new DirectoryInfo(_resultsPath);
            var files = directory.GetFiles("*.json");

            foreach (var file in files)
            {
                var json = File.ReadAllText(file.FullName);
                var result = JsonSerializer.Deserialize<TestResult>(json);

                if (result != null && result.UserId == userId && result.Language == language && 
                    result.Level == level && result.TestId == testId)
                {
                    return result;
                }
            }

            return null;
        }

        private void UpdateTestCompletionStatus(string language, int level, string testId)
        {
            var tests = GetTestsForLanguageAndLevel(language, level);
            var test = tests.FirstOrDefault(t => t.Id == testId);
            if (test != null)
            {
                test.IsCompleted = true;
                var filePath = Path.Combine(_dataPath, $"{language.ToLower()}_level{level}.json");
                var json = JsonSerializer.Serialize(tests, new JsonSerializerOptions { WriteIndented = true });
                File.WriteAllText(filePath, json);
            }
        }

        private List<TestItem> GenerateSampleTests(string language, int level)
        {
            // Generate sample tests based on language and level
            var tests = new List<TestItem>();
            var types = new[] { "vocabulary", "grammar", "listening", "reading", "writing", "speaking", "mixed" };
            var difficulties = new[] { "easy", "medium", "hard" };

            for (int i = 1; i <= 7; i++)
            {
                var testType = types[(i - 1) % types.Length];
                var difficulty = difficulties[(level - 1) % difficulties.Length];
                if (i > 4) difficulty = difficulties[Math.Min(2, level - 1)];

                var test = new TestItem
                {
                    Id = $"test-{i}",
                    Title = $"{GetTestTitle(testType, level)}",
                    Description = $"{GetTestDescription(testType, language, level)}",
                    EstimatedDuration = 15 + (level * 5) + (i % 3) * 5,
                    Difficulty = difficulty,
                    IsCompleted = false,
                    IsLocked = i > 3 && level > 1, // Lock advanced tests in higher levels
                    Type = testType,
                    Questions = GenerateSampleQuestions(language, level, testType, 5)
                };

                tests.Add(test);
            }

            // Save the generated tests
            var filePath = Path.Combine(_dataPath, $"{language.ToLower()}_level{level}.json");
            var json = JsonSerializer.Serialize(tests, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(filePath, json);

            return tests;
        }

        private List<TestQuestion> GenerateSampleQuestions(string language, int level, string testType, int count)
        {
            var questions = new List<TestQuestion>();

            for (int i = 1; i <= count; i++)
            {
                var question = new TestQuestion
                {
                    Id = $"q{i}",
                    Type = i % 5 == 0 ? "checkbox" : "multiple-choice",
                    Question = $"Sample {testType} question {i} for {language} level {level}",
                    Options = new List<string> { "Option A", "Option B", "Option C", "Option D" },
                    CorrectAnswer = i % 5 == 0 ? 
                        new List<string> { "Option A", "Option C" } : 
                        "Option B",
                    Explanation = $"Explanation for question {i}"
                };

                questions.Add(question);
            }

            return questions;
        }

        private string GetTestTitle(string testType, int level)
        {
            return testType.ToLower() switch
            {
                "vocabulary" => level == 1 ? "Basic Vocabulary" : level == 2 ? "Intermediate Vocabulary" : "Advanced Vocabulary",
                "grammar" => level == 1 ? "Simple Grammar" : level == 2 ? "Intermediate Grammar" : "Advanced Grammar",
                "listening" => "Listening Comprehension",
                "reading" => "Reading Practice",
                "writing" => "Writing Exercises",
                "speaking" => "Speaking Practice",
                "mixed" => "Comprehensive Review",
                _ => $"{testType.ToUpper()} Test"
            };
        }

        private string GetTestDescription(string testType, string language, int level)
        {
            var levelText = level == 1 ? "basic" : level == 2 ? "intermediate" : "advanced";
            
            return testType.ToLower() switch
            {
                "vocabulary" => $"Learn {levelText} {language} vocabulary for everyday use.",
                "grammar" => $"Master {levelText} {language} grammar rules and sentence structures.",
                "listening" => $"Improve your ability to understand spoken {language}.",
                "reading" => $"Enhance your {language} reading skills with {levelText} texts.",
                "writing" => $"Develop your {language} writing skills through guided exercises.",
                "speaking" => $"Practice speaking {language} with pronunciation exercises.",
                "mixed" => $"Test your overall {language} knowledge with a comprehensive assessment.",
                _ => $"Practice your {language} {testType} skills."
            };
        }

        public void InitializeTestData()
        {
            // Create sample test data for each language and level if it doesn't exist
            var languages = new[] { "english", "kazakh", "turkish" };
            var levels = new[] { 1, 2, 3 };

            foreach (var language in languages)
            {
                foreach (var level in levels)
                {
                    var filePath = Path.Combine(_dataPath, $"{language}_level{level}.json");
                    if (!File.Exists(filePath))
                    {
                        GenerateSampleTests(language, level);
                    }
                }
            }
        }
    }
}
