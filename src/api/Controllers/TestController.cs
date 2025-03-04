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
    public class TestController : ControllerBase
    {
        private readonly ITestService _testService;

        public TestController(ITestService testService)
        {
            _testService = testService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Test>>> GetAllTests()
        {
            var tests = await _testService.GetAllTestsAsync();
            return Ok(tests);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Test>> GetTest(string id)
        {
            var test = await _testService.GetTestByIdAsync(id);
            if (test == null)
            {
                return NotFound();
            }
            return Ok(test);
        }

        [HttpGet("language/{language}/level/{level}")]
        public async Task<ActionResult<IEnumerable<Test>>> GetTestsByLanguageAndLevel(string language, int level)
        {
            var tests = await _testService.GetTestsByLanguageAndLevelAsync(language, level);
            return Ok(tests);
        }

        [HttpPost]
        public async Task<ActionResult<Test>> CreateTest(Test test)
        {
            await _testService.CreateTestAsync(test);
            return CreatedAtAction(nameof(GetTest), new { id = test.Id }, test);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTest(string id, Test test)
        {
            if (id != test.Id)
            {
                return BadRequest();
            }

            await _testService.UpdateTestAsync(test);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTest(string id)
        {
            await _testService.DeleteTestAsync(id);
            return NoContent();
        }
    }
}