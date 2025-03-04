using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using LanguageLearningAPI.Data;

namespace LanguageLearningAPI.Services
{
    public class VideoLessonService : IVideoLessonService
    {
        private readonly ApplicationDbContext _context;

        public VideoLessonService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<VideoLesson>> GetAllVideoLessonsAsync()
        {
            return await _context.VideoLessons.ToListAsync();
        }

        public async Task<VideoLesson> GetVideoLessonByIdAsync(string id)
        {
            return await _context.VideoLessons.FindAsync(id);
        }

        public async Task<IEnumerable<VideoLesson>> GetVideoLessonsByLanguageAsync(string language)
        {
            return await _context.VideoLessons
                .Where(l => l.Language.ToLower() == language.ToLower())
                .ToListAsync();
        }

        public async Task<IEnumerable<VideoLesson>> GetVideoLessonsByLanguageAndLevelAsync(string language, int level)
        {
            return await _context.VideoLessons
                .Where(l => l.Language.ToLower() == language.ToLower() && l.Level == level)
                .ToListAsync();
        }

        public async Task CreateVideoLessonAsync(VideoLesson lesson)
        {
            lesson.Id = Guid.NewGuid().ToString();
            lesson.CreatedAt = DateTime.UtcNow;
            
            await _context.VideoLessons.AddAsync(lesson);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateVideoLessonAsync(VideoLesson lesson)
        {
            _context.VideoLessons.Update(lesson);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteVideoLessonAsync(string id)
        {
            var lesson = await _context.VideoLessons.FindAsync(id);
            if (lesson != null)
            {
                _context.VideoLessons.Remove(lesson);
                await _context.SaveChangesAsync();
            }
        }

        public async Task MarkVideoLessonAsViewedAsync(string userId, string lessonId)
        {
            var existingView = await _context.VideoLessonViewed
                .FirstOrDefaultAsync(v => v.UserId == userId && v.LessonId == lessonId);

            if (existingView != null)
            {
                // Update existing view
                existingView.ViewedAt = DateTime.UtcNow;
                existingView.Completed = true;
            }
            else
            {
                // Create new view record
                await _context.VideoLessonViewed.AddAsync(new VideoLessonViewed
                {
                    Id = Guid.NewGuid().ToString(),
                    UserId = userId,
                    LessonId = lessonId,
                    ViewedAt = DateTime.UtcNow,
                    Completed = true,
                    WatchedSeconds = 0 // This would be updated with actual watch time in a real app
                });
            }

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<VideoLessonViewed>> GetUserViewedLessonsAsync(string userId)
        {
            return await _context.VideoLessonViewed
                .Where(v => v.UserId == userId)
                .OrderByDescending(v => v.ViewedAt)
                .ToListAsync();
        }
    }
}