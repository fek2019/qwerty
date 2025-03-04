using Microsoft.AspNetCore.Mvc;
using LanguageLearningApp.Models;
using LanguageLearningApp.Services;
using System.Collections.Generic;

namespace LanguageLearningApp.Controllers
{
    public class LearningPathController : Controller
    {
        private readonly TestService _testService;

        public LearningPathController(TestService testService)
        {
            _testService = testService;
        }

        public IActionResult Index(string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                return RedirectToAction("Index", "Home");
            }

            var viewModel = new LanguageViewModel
            {
                Languages = new List<LanguageOption>
                {
                    new LanguageOption
                    {
                        Language = language,
                        Title = $"Learn {language}",
                        Description = $"Master {language} with our structured learning path.",
                        FlagImage = GetFlagImageForLanguage(language),
                        TotalLessons = GetTotalLessonsForLanguage(language),
                        Difficulty = GetDifficultyForLanguage(language)
                    }
                }
            };

            return View(viewModel);
        }

        public IActionResult Level(string language, int level)
        {
            if (string.IsNullOrEmpty(language) || level <= 0)
            {
                return RedirectToAction("Index", "Home");
            }

            var tests = _testService.GetTestsForLanguageAndLevel(language, level);

            var viewModel = new LevelViewModel
            {
                Language = language,
                Level = level,
                Tests = tests
            };

            return View(viewModel);
        }

        public IActionResult Test(string language, int level, string testId)
        {
            if (string.IsNullOrEmpty(language) || level <= 0 || string.IsNullOrEmpty(testId))
            {
                return RedirectToAction("Index", "Home");
            }

            var test = _testService.GetTest(language, level, testId);
            if (test == null)
            {
                return NotFound();
            }

            var viewModel = new TestViewModel
            {
                Language = language,
                Level = level,
                Test = test
            };

            return View(viewModel);
        }

        [HttpPost]
        public IActionResult SubmitTest(TestResultViewModel result)
        {
            if (result == null)
            {
                return BadRequest();
            }

            // Save test result
            _testService.SaveTestResult(result);

            return RedirectToAction("TestResult", new { language = result.Language, level = result.Level, testId = result.TestId });
        }

        public IActionResult TestResult(string language, int level, string testId)
        {
            if (string.IsNullOrEmpty(language) || level <= 0 || string.IsNullOrEmpty(testId))
            {
                return RedirectToAction("Index", "Home");
            }

            var userId = User.Identity.IsAuthenticated ? User.Identity.Name : "guest";
            var result = _testService.GetTestResult(userId, language, level, testId);

            if (result == null)
            {
                return NotFound();
            }

            return View(result);
        }

        private string GetFlagImageForLanguage(string language)
        {
            return language.ToLower() switch
            {
                "english" => "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&q=80",
                "kazakh" => "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?w=600&q=80",
                "turkish" => "https://images.unsplash.com/photo-1541300613939-71366b37c92e?w=600&q=80",
                _ => "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80"
            };
        }

        private int GetTotalLessonsForLanguage(string language)
        {
            return language.ToLower() switch
            {
                "english" => 42,
                "kazakh" => 36,
                "turkish" => 38,
                _ => 30
            };
        }

        private string GetDifficultyForLanguage(string language)
        {
            return language.ToLower() switch
            {
                "english" => "Beginner",
                "kazakh" => "Intermediate",
                "turkish" => "Advanced",
                _ => "Beginner"
            };
        }
    }
}
