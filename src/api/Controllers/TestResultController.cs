using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;
using LanguageLearningAPI.Services;

namespace LanguageLearningAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestResultController : ControllerBase
    {
        private readonly ITestResultService _testResultService;

        public TestResultController(ITestResultService testResultService)
        {
            _testResultService = testResultService;
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<TestResult>>> GetUserResults(string userId)
        {
            var results = await _testResultService.GetUserResultsAsync(userId);
            return Ok(results);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TestResult>> GetTestResult(string id)
        {
            var result = await _testResultService.GetTestResultByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("user/{userId}/test/{testId}")]
        public async Task<ActionResult<TestResult>> GetUserTestResult(string userId, string testId)
        {
            var result = await _testResultService.GetUserTestResultAsync(userId, testId);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("user/{userId}/language/{language}/level/{level}")]
        public async Task<ActionResult<IEnumerable<TestResult>>> GetLanguageLevelResults(string userId, string language, int level)
        {
            var results = await _testResultService.GetLanguageLevelResultsAsync(userId, language, level);
            return Ok(results);
        }

        [HttpPost]
        public async Task<ActionResult<TestResult>> SaveTestResult(TestResult result)
        {
            await _testResultService.SaveTestResultAsync(result);
            return CreatedAtAction(nameof(GetTestResult), new { id = result.Id }, result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTestResult(string id)
        {
            await _testResultService.DeleteTestResultAsync(id);
            return NoContent();
        }
    }
}