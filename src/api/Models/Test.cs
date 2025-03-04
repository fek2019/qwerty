using System;
using System.Collections.Generic;

namespace LanguageLearningAPI.Models
{
    public class Test
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        public int Level { get; set; }
        public int EstimatedDuration { get; set; } // in minutes
        public string Difficulty { get; set; } // easy, medium, hard
        public string Type { get; set; } // vocabulary, grammar, listening, etc.
        public List<Question> Questions { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class Question
    {
        public string Id { get; set; }
        public string Type { get; set; } // multiple-choice, checkbox, text, audio
        public string QuestionText { get; set; }
        public List<string> Options { get; set; }
        public object CorrectAnswer { get; set; } // string or string[] depending on question type
        public string AudioUrl { get; set; }
        public string Explanation { get; set; }
    }
}