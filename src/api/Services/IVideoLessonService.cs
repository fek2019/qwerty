using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Services
{
    public interface IVideoLessonService
    {
        Task<IEnumerable<VideoLesson>> GetAllVideoLessonsAsync();
        Task<VideoLesson> GetVideoLessonByIdAsync(string id);
        Task<IEnumerable<VideoLesson>> GetVideoLessonsByLanguageAsync(string language);
        Task<IEnumerable<VideoLesson>> GetVideoLessonsByLanguageAndLevelAsync(string language, int level);
        Task CreateVideoLessonAsync(VideoLesson lesson);
        Task UpdateVideoLessonAsync(VideoLesson lesson);
        Task DeleteVideoLessonAsync(string id);
        Task MarkVideoLessonAsViewedAsync(string userId, string lessonId);
        Task<IEnumerable<VideoLessonViewed>> GetUserViewedLessonsAsync(string userId);
    }
}