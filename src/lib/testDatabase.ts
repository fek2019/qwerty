// Local storage based test database

export interface TestResult {
  id: string;
  userId: string;
  testId: string;
  language: string;
  level: number;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: string;
  completedAt: string;
  questions: {
    id: string;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
}

// Save test result to local storage
export const saveTestResult = (result: TestResult): void => {
  try {
    // Get existing results
    const existingResultsString = localStorage.getItem("testResults");
    const existingResults: TestResult[] = existingResultsString
      ? JSON.parse(existingResultsString)
      : [];

    // Check if this test was already taken by this user
    const existingIndex = existingResults.findIndex(
      (r) => r.userId === result.userId && r.testId === result.testId,
    );

    if (existingIndex >= 0) {
      // Update existing result
      existingResults[existingIndex] = result;
    } else {
      // Add new result
      existingResults.push(result);
    }

    // Save back to localStorage
    localStorage.setItem("testResults", JSON.stringify(existingResults));
  } catch (error) {
    console.error("Error saving test result:", error);
  }
};

// Get all test results for a user
export const getUserTestResults = (userId: string): TestResult[] => {
  try {
    const resultsString = localStorage.getItem("testResults");
    if (!resultsString) return [];

    const allResults: TestResult[] = JSON.parse(resultsString);
    return allResults.filter((result) => result.userId === userId);
  } catch (error) {
    console.error("Error getting user test results:", error);
    return [];
  }
};

// Get a specific test result
export const getTestResult = (
  userId: string,
  testId: string,
): TestResult | null => {
  try {
    const resultsString = localStorage.getItem("testResults");
    if (!resultsString) return null;

    const allResults: TestResult[] = JSON.parse(resultsString);
    return (
      allResults.find(
        (result) => result.userId === userId && result.testId === testId,
      ) || null
    );
  } catch (error) {
    console.error("Error getting test result:", error);
    return null;
  }
};

// Get all test results for a specific language and level
export const getLanguageLevelResults = (
  userId: string,
  language: string,
  level: number,
): TestResult[] => {
  try {
    const resultsString = localStorage.getItem("testResults");
    if (!resultsString) return [];

    const allResults: TestResult[] = JSON.parse(resultsString);
    return allResults.filter(
      (result) =>
        result.userId === userId &&
        result.language.toLowerCase() === language.toLowerCase() &&
        result.level === level,
    );
  } catch (error) {
    console.error("Error getting language level results:", error);
    return [];
  }
};

// Clear all test results (for testing)
export const clearAllTestResults = (): void => {
  localStorage.removeItem("testResults");
};
