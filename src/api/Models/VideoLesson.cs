using System;

namespace LanguageLearningAPI.Models
{
    public class VideoLesson
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ThumbnailUrl { get; set; }
        public string VideoUrl { get; set; }
        public int Duration { get; set; } // in seconds
        public string Language { get; set; }
        public int Level { get; set; }
        public string Difficulty { get; set; } // beginner, intermediate, advanced
        public DateTime CreatedAt { get; set; }
    }

    public class VideoLessonViewed
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string LessonId { get; set; }
        public DateTime ViewedAt { get; set; }
        public bool Completed { get; set; }
        public int WatchedSeconds { get; set; }
    }
}