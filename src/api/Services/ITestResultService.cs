using System.Collections.Generic;
using System.Threading.Tasks;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Services
{
    public interface ITestResultService
    {
        Task<IEnumerable<TestResult>> GetUserResultsAsync(string userId);
        Task<TestResult> GetTestResultByIdAsync(string id);
        Task<TestResult> GetUserTestResultAsync(string userId, string testId);
        Task<IEnumerable<TestResult>> GetLanguageLevelResultsAsync(string userId, string language, int level);
        Task SaveTestResultAsync(TestResult result);
        Task DeleteTestResultAsync(string id);
    }
}