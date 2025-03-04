using LanguageLearningApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace LanguageLearningApp.Services
{
    public class UserService
    {
        private readonly List<User> _users = new List<User>(); // In-memory storage for demo

        public UserService()
        {
            // Add a default user for testing
            _users.Add(new User
            {
                Id = 1,
                Name = "Test User",
                Email = "user@example.com",
                PasswordHash = HashPassword("password123"),
                RegisteredAt = DateTime.UtcNow,
                PreferredLanguage = "English"
            });
        }

        public User AuthenticateUser(string email, string password)
        {
            var user = _users.FirstOrDefault(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase));
            if (user != null && VerifyPassword(password, user.PasswordHash))
            {
                return user;
            }
            return null;
        }

        public bool RegisterUser(string name, string email, string password)
        {
            if (_users.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase)))
            {
                return false; // User already exists
            }

            var user = new User
            {
                Id = _users.Count + 1,
                Name = name,
                Email = email,
                PasswordHash = HashPassword(password),
                RegisteredAt = DateTime.UtcNow,
                PreferredLanguage = "English" // Default
            };

            _users.Add(user);
            return true;
        }

        public User GetUserByEmail(string email)
        {
            return _users.FirstOrDefault(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase));
        }

        public void UpdateUserPreferredLanguage(string email, string language)
        {
            var user = GetUserByEmail(email);
            if (user != null)
            {
                user.PreferredLanguage = language;
            }
        }

        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hashedBytes);
            }
        }

        private bool VerifyPassword(string password, string hash)
        {
            return HashPassword(password) == hash;
        }
    }
}
