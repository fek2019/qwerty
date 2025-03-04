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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("email/{email}")]
        public async Task<ActionResult<User>> GetUserByEmail(string email)
        {
            var user = await _userService.GetUserByEmailAsync(email);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserRegistrationDto registrationDto)
        {
            // Check if user already exists
            var existingUser = await _userService.GetUserByEmailAsync(registrationDto.Email);
            if (existingUser != null)
            {
                return BadRequest("User with this email already exists");
            }

            var user = new User
            {
                Id = Guid.NewGuid().ToString(),
                Name = registrationDto.Name,
                Email = registrationDto.Email,
                CreatedAt = DateTime.UtcNow
            };

            await _userService.CreateUserAsync(user, registrationDto.Password);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserLoginDto loginDto)
        {
            var token = await _userService.AuthenticateAsync(loginDto.Email, loginDto.Password);
            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized();
            }
            return Ok(new { token });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(string id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            await _userService.UpdateUserAsync(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            await _userService.DeleteUserAsync(id);
            return NoContent();
        }
    }

    public class UserRegistrationDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class UserLoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}