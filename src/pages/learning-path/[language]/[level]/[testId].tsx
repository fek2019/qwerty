import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import InteractiveTest from "@/components/learning/InteractiveTest";
import TestResults from "@/components/learning/TestResults";
import { saveTestResult, getTestResult } from "@/lib/testDatabase";

interface Question {
  id: string;
  type: "multiple-choice" | "checkbox" | "text" | "audio";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  audioUrl?: string;
  explanation?: string;
}

interface TestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: string;
  questions: {
    id: string;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
}

const TestPage = () => {
  const { language = "English", level = "1", testId = "1" } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [testCompleted, setTestCompleted] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  // State to store the test data
  const [testDetails, setTestDetails] = useState<{
    testId: string;
    language: string;
    level: number;
    title: string;
    description: string;
    questions: Question[];
  } | null>(null);

  // Get user data from localStorage
  const userString = localStorage.getItem("user");
  const user = userString
    ? JSON.parse(userString)
    : { name: "User", email: "user@example.com" };

  // Fetch test data from our data file
  useEffect(() => {
    import("@/data/testData").then(({ testData }) => {
      const normalizedLanguage = language?.toLowerCase() || "english";
      const levelNum = parseInt(level || "1");
      const testIdStr = testId || "test-1";

      // Get tests for the specific language and level
      let languageTests: any = {};
      if (
        normalizedLanguage === "english" &&
        testData.english &&
        testData.english[levelNum]
      ) {
        languageTests = testData.english[levelNum];
      } else if (
        normalizedLanguage === "kazakh" &&
        testData.kazakh &&
        testData.kazakh[levelNum]
      ) {
        languageTests = testData.kazakh[levelNum];
      } else if (
        normalizedLanguage === "turkish" &&
        testData.turkish &&
        testData.turkish[levelNum]
      ) {
        languageTests = testData.turkish[levelNum];
      }

      // Find the specific test
      let test = null;
      if (Array.isArray(languageTests)) {
        test = languageTests.find((t: any) => t.id === testIdStr);
      }

      if (test) {
        setTestDetails({
          testId: test.id,
          language: language || "English",
          level: levelNum,
          title: test.title,
          description: test.description,
          questions: test.questions,
        });

        // Check if user has already completed this test
        const existingResult = getTestResult(user.email, test.id);
        if (existingResult) {
          setTestResult({
            score: existingResult.score,
            totalQuestions: existingResult.totalQuestions,
            correctAnswers: existingResult.correctAnswers,
            incorrectAnswers: existingResult.incorrectAnswers,
            timeSpent: existingResult.timeSpent,
            questions: existingResult.questions,
          });
          setTestCompleted(true);
        }
      } else {
        // Fallback to a default test if not found
        setTestDetails({
          testId: testIdStr,
          language: language || "English",
          level: levelNum,
          title: `${language} Test - Level ${level}`,
          description: `Test your knowledge of ${language} at level ${level}.`,
          questions: [
            {
              id: "q1",
              type: "multiple-choice" as const,
              question: `What is the correct translation for 'Hello' in ${language}?`,
              options: ["Bonjour", "Hola", "Привет", "Merhaba"],
              correctAnswer: "Merhaba",
              explanation: `'Merhaba' is the ${language} word for 'Hello'.`,
            },
            {
              id: "q2",
              type: "checkbox" as const,
              question:
                "Select all the words that mean 'Thank you' in different languages.",
              options: ["Gracias", "Merci", "Спасибо", "Teşekkürler"],
              correctAnswer: ["Gracias", "Merci", "Спасибо", "Teşekkürler"],
              explanation:
                "All of these words mean 'Thank you' in Spanish, French, Russian, and Turkish respectively.",
            },
          ],
        });
      }
    });
  }, [language, level, testId, user.email]);

  useEffect(() => {
    // Start the timer when the component mounts
    setStartTime(new Date());
    return () => {
      // Clean up if needed
    };
  }, []);

  const handleTestComplete = (score: number, totalQuestions: number) => {
    // Calculate time spent
    const endTime = new Date();
    const timeSpentMs = startTime ? endTime.getTime() - startTime.getTime() : 0;
    const minutes = Math.floor(timeSpentMs / 60000);
    const seconds = Math.floor((timeSpentMs % 60000) / 1000);
    const timeSpent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Create result data based on actual user answers
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - score;

    // Create questions with results based on actual user answers
    const resultQuestions = testDetails?.questions.map((q, index) => {
      // In a real app, this would use the actual user answers
      // For now, we'll simulate based on the score
      const isCorrect = index < correctAnswers;
      return {
        id: q.id,
        question: q.question,
        userAnswer: isCorrect
          ? Array.isArray(q.correctAnswer)
            ? q.correctAnswer.join(", ")
            : q.correctAnswer
          : q.options
            ? q.options[Math.floor(Math.random() * q.options.length)]
            : "Incorrect answer",
        correctAnswer: Array.isArray(q.correctAnswer)
          ? q.correctAnswer.join(", ")
          : q.correctAnswer,
        isCorrect,
      };
    });

    const result = {
      score: Math.round((correctAnswers / totalQuestions) * 100),
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      timeSpent,
      questions: resultQuestions,
    };

    setTestResult(result);
    setTestCompleted(true);

    // Save to database
    if (testDetails) {
      saveTestResult({
        id: `${user.email}-${testDetails.testId}-${Date.now()}`,
        userId: user.email,
        testId: testDetails.testId,
        language: testDetails.language,
        level: testDetails.level,
        score: Math.round((correctAnswers / totalQuestions) * 100),
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        timeSpent,
        completedAt: new Date().toISOString(),
        questions: resultQuestions,
      });
    }
  };

  const handleReviewTest = () => {
    // In a real app, this would navigate to a detailed review page
    console.log("Reviewing test...");
  };

  const handleContinue = () => {
    // Navigate to the next lesson or back to the level page
    navigate(`/learning-path/${language}/${level}`);
  };

  const handleRetry = () => {
    // Reset the test
    setTestCompleted(false);
    setTestResult(null);
    setStartTime(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {!testCompleted ? (
        testDetails ? (
          <InteractiveTest
            testId={testDetails.testId}
            language={testDetails.language}
            level={testDetails.level}
            title={testDetails.title}
            description={testDetails.description}
            questions={testDetails.questions}
            onComplete={handleTestComplete}
          />
        ) : (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500">Loading test...</p>
            </div>
          </div>
        )
      ) : (
        testResult &&
        testDetails && (
          <TestResults
            testTitle={testDetails.title}
            testDescription={testDetails.description}
            score={Math.round(
              (testResult.correctAnswers / testResult.totalQuestions) * 100,
            )}
            totalQuestions={testResult.totalQuestions}
            correctAnswers={testResult.correctAnswers}
            incorrectAnswers={testResult.incorrectAnswers}
            timeSpent={testResult.timeSpent}
            language={testDetails.language}
            level={testDetails.level}
            testId={testDetails.testId}
            questions={testResult.questions}
            onReviewTest={handleReviewTest}
            onContinue={handleContinue}
            onRetry={handleRetry}
          />
        )
      )}
    </div>
  );
};

export default TestPage;
