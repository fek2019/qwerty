using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(string id);
        Task<User> GetUserByEmailAsync(string email);
        Task CreateUserAsync(User user, string password);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(string id);
        Task<string> AuthenticateAsync(string email, string password);
    }
}