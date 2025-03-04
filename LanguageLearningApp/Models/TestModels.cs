using System;
using System.Collections.Generic;

namespace LanguageLearningApp.Models
{
    public class TestQuestion
    {
        public string Id { get; set; }
        public string Type { get; set; } // multiple-choice, checkbox, text, audio
        public string Question { get; set; }
        public List<string> Options { get; set; }
        public object CorrectAnswer { get; set; } // string or List<string>
        public string AudioUrl { get; set; }
        public string Explanation { get; set; }
        public string ImageUrl { get; set; }
    }

    public class TestItem
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int EstimatedDuration { get; set; }
        public string Difficulty { get; set; } // easy, medium, hard
        public bool IsCompleted { get; set; }
        public bool IsLocked { get; set; }
        public int? Score { get; set; }
        public string Type { get; set; } // vocabulary, grammar, listening, reading, writing, speaking, mixed
        public List<TestQuestion> Questions { get; set; }
    }

    public class TestResult
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string TestId { get; set; }
        public string Language { get; set; }
        public int Level { get; set; }
        public int Score { get; set; }
        public int TotalQuestions { get; set; }
        public int CorrectAnswers { get; set; }
        public int IncorrectAnswers { get; set; }
        public string TimeSpent { get; set; }
        public DateTime CompletedAt { get; set; }
        public List<QuestionResult> Questions { get; set; }
    }
}
