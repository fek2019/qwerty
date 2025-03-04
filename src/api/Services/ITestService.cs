using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Services
{
    public interface ITestService
    {
        Task<IEnumerable<Test>> GetAllTestsAsync();
        Task<Test> GetTestByIdAsync(string id);
        Task<IEnumerable<Test>> GetTestsByLanguageAndLevelAsync(string language, int level);
        Task CreateTestAsync(Test test);
        Task UpdateTestAsync(Test test);
        Task DeleteTestAsync(string id);
    }
}