using System;
using System.Collections.Generic;

namespace LanguageLearningAPI.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public int StreakDays { get; set; }
        public int TotalPoints { get; set; }
        public int Level { get; set; }
        public List<UserLanguage> Languages { get; set; }
    }

    public class UserLanguage
    {
        public string Language { get; set; }
        public int Progress { get; set; }
        public int Level { get; set; }
    }
}