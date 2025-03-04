using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LanguageLearningApp.Models;
using System.Collections.Generic;

namespace LanguageLearningApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var viewModel = new LanguageViewModel
            {
                Languages = new List<LanguageOption>
                {
                    new LanguageOption
                    {
                        Language = "English",
                        Title = "Learn English",
                        Description = "Master the global language of business, technology, and international communication.",
                        FlagImage = "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&q=80",
                        TotalLessons = 42,
                        Difficulty = "Beginner"
                    },
                    new LanguageOption
                    {
                        Language = "Kazakh",
                        Title = "Learn Kazakh",
                        Description = "Discover the rich cultural heritage and language of Kazakhstan, a bridge between Europe and Asia.",
                        FlagImage = "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?w=600&q=80",
                        TotalLessons = 36,
                        Difficulty = "Intermediate"
                    },
                    new LanguageOption
                    {
                        Language = "Turkish",
                        Title = "Learn Turkish",
                        Description = "Explore the fascinating language that connects Eastern Europe, the Middle East, and Central Asia.",
                        FlagImage = "https://images.unsplash.com/photo-1541300613939-71366b37c92e?w=600&q=80",
                        TotalLessons = 38,
                        Difficulty = "Advanced"
                    }
                }
            };

            return View(viewModel);
        }

        public IActionResult Dashboard()
        {
            // Check if user is logged in
            if (User.Identity.IsAuthenticated)
            {
                var viewModel = new DashboardViewModel
                {
                    UserName = User.Identity.Name,
                    Email = User.Identity.Name, // In a real app, get from claims
                    CompletedLanguages = new List<string> { "English Level 1", "Kazakh Level 1" },
                    LanguageProgress = new Dictionary<string, int>
                    {
                        { "English", 65 },
                        { "Kazakh", 40 },
                        { "Turkish", 15 }
                    },
                    RecentTestResults = new List<TestResult>
                    {
                        new TestResult
                        {
                            TestId = "test-1",
                            Language = "English",
                            Level = 1,
                            Score = 85,
                            CompletedAt = DateTime.Now.AddDays(-2)
                        },
                        new TestResult
                        {
                            TestId = "test-3",
                            Language = "Kazakh",
                            Level = 1,
                            Score = 70,
                            CompletedAt = DateTime.Now.AddDays(-5)
                        }
                    },
                    Recommendations = new List<string>
                    {
                        "English Level 2 - Grammar",
                        "Kazakh Level 2 - Vocabulary",
                        "Try Turkish Basics"
                    }
                };

                return View(viewModel);
            }

            return RedirectToAction("Login", "Auth");
        }

        public IActionResult Tests()
        {
            return View();
        }

        public IActionResult VideoLessons()
        {
            return View();
        }

        public IActionResult Profile()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Login", "Auth");
            }

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

    public class ErrorViewModel
    {
        public string RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
