using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;
using LanguageLearningAPI.Services;

namespace LanguageLearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideoLessonController : ControllerBase
    {
        private readonly IVideoLessonService _videoLessonService;

        public VideoLessonController(IVideoLessonService videoLessonService)
        {
            _videoLessonService = videoLessonService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VideoLesson>>> GetAllVideoLessons()
        {
            var lessons = await _videoLessonService.GetAllVideoLessonsAsync();
            return Ok(lessons);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VideoLesson>> GetVideoLesson(string id)
        {
            var lesson = await _videoLessonService.GetVideoLessonByIdAsync(id);
            if (lesson == null)
            {
                return NotFound();
            }
            return Ok(lesson);
        }

        [HttpGet("language/{language}")]
        public async Task<ActionResult<IEnumerable<VideoLesson>>> GetVideoLessonsByLanguage(string language)
        {
            var lessons = await _videoLessonService.GetVideoLessonsByLanguageAsync(language);
            return Ok(lessons);
        }

        [HttpGet("language/{language}/level/{level}")]
        public async Task<ActionResult<IEnumerable<VideoLesson>>> GetVideoLessonsByLanguageAndLevel(string language, int level)
        {
            var lessons = await _videoLessonService.GetVideoLessonsByLanguageAndLevelAsync(language, level);
            return Ok(lessons);
        }

        [HttpPost]
        public async Task<ActionResult<VideoLesson>> CreateVideoLesson(VideoLesson lesson)
        {
            await _videoLessonService.CreateVideoLessonAsync(lesson);
            return CreatedAtAction(nameof(GetVideoLesson), new { id = lesson.Id }, lesson);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVideoLesson(string id, VideoLesson lesson)
        {
            if (id != lesson.Id)
            {
                return BadRequest();
            }

            await _videoLessonService.UpdateVideoLessonAsync(lesson);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVideoLesson(string id)
        {
            await _videoLessonService.DeleteVideoLessonAsync(id);
            return NoContent();
        }

        [HttpPost("viewed")]
        public async Task<IActionResult> MarkVideoLessonAsViewed(VideoLessonViewedDto viewedDto)
        {
            await _videoLessonService.MarkVideoLessonAsViewedAsync(viewedDto.UserId, viewedDto.LessonId);
            return NoContent();
        }

        [HttpGet("viewed/user/{userId}")]
        public async Task<ActionResult<IEnumerable<VideoLessonViewed>>> GetUserViewedLessons(string userId)
        {
            var viewedLessons = await _videoLessonService.GetUserViewedLessonsAsync(userId);
            return Ok(viewedLessons);
        }
    }

    public class VideoLessonViewedDto
    {
        public string UserId { get; set; }
        public string LessonId { get; set; }
    }
}