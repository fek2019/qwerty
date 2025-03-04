using System.Collections.Generic;

namespace LanguageLearningApp.Models
{
    public class LanguageOption
    {
        public string Language { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string FlagImage { get; set; }
        public int TotalLessons { get; set; }
        public string Difficulty { get; set; } // "Beginner", "Intermediate", "Advanced"
    }

    public class LanguageViewModel
    {
        public List<LanguageOption> Languages { get; set; } = new List<LanguageOption>();
    }

    public class LevelViewModel
    {
        public string Language { get; set; }
        public int Level { get; set; }
        public List<TestItem> Tests { get; set; } = new List<TestItem>();
    }

    public class TestViewModel
    {
        public string Language { get; set; }
        public int Level { get; set; }
        public TestItem Test { get; set; }
    }

    public class TestResultViewModel
    {
        public string Language { get; set; }
        public int Level { get; set; }
        public string TestId { get; set; }
        public int Score { get; set; }
        public int TotalQuestions { get; set; }
        public int CorrectAnswers { get; set; }
        public int IncorrectAnswers { get; set; }
        public string TimeSpent { get; set; }
        public List<QuestionResult> Questions { get; set; } = new List<QuestionResult>();
    }

    public class QuestionResult
    {
        public string Id { get; set; }
        public string Question { get; set; }
        public string UserAnswer { get; set; }
        public string CorrectAnswer { get; set; }
        public bool IsCorrect { get; set; }
    }

    public class DashboardViewModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public List<string> CompletedLanguages { get; set; } = new List<string>();
        public Dictionary<string, int> LanguageProgress { get; set; } = new Dictionary<string, int>();
        public List<TestResult> RecentTestResults { get; set; } = new List<TestResult>();
        public List<string> Recommendations { get; set; } = new List<string>();
    }
}
