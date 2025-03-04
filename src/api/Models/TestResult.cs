using System;
using System.Collections.Generic;

namespace LanguageLearningAPI.Models
{
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

    public class QuestionResult
    {
        public string Id { get; set; }
        public string Question { get; set; }
        public string UserAnswer { get; set; }
        public string CorrectAnswer { get; set; }
        public bool IsCorrect { get; set; }
    }
}