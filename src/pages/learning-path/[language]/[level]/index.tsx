import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestList from "@/components/learning/TestList";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TestItem {
  id: string;
  title: string;
  description: string;
  estimatedDuration: number;
  difficulty: "easy" | "medium" | "hard";
  isCompleted: boolean;
  isLocked: boolean;
  score?: number;
  type:
    | "vocabulary"
    | "grammar"
    | "listening"
    | "reading"
    | "writing"
    | "speaking"
    | "mixed";
}

const LevelTestsPage = () => {
  const { language = "", level = "" } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [tests, setTests] = useState<TestItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get user data from localStorage
    const userString = localStorage.getItem("user");
    const user = userString
      ? JSON.parse(userString)
      : { name: "User", email: "user@example.com" };

    // Import test data dynamically
    import("@/data/testData").then(({ testData }) => {
      const normalizedLanguage = language.toLowerCase();
      const levelNum = parseInt(level);

      // Get tests for the specific language and level
      let levelTests = [];
      if (
        normalizedLanguage === "english" &&
        testData.english &&
        testData.english[levelNum]
      ) {
        levelTests = testData.english[levelNum];
      } else if (
        normalizedLanguage === "kazakh" &&
        testData.kazakh &&
        testData.kazakh[levelNum]
      ) {
        levelTests = testData.kazakh[levelNum];
      } else if (
        normalizedLanguage === "turkish" &&
        testData.turkish &&
        testData.turkish[levelNum]
      ) {
        levelTests = testData.turkish[levelNum];
      }

      // Import test results from database
      import("@/lib/testDatabase").then(({ getLanguageLevelResults }) => {
        const userResults = getLanguageLevelResults(
          user.email,
          normalizedLanguage,
          levelNum,
        );

        // Process tests with user results - unlock all tests and mark some as completed
        const processedTests = levelTests.map((test) => {
          // Find if user has completed this test
          const testResult = userResults.find((r) => r.testId === test.id);

          return {
            ...test,
            isLocked: false, // Make all tests unlocked as requested
            isCompleted: !!testResult, // Mark as completed if result exists
            score: testResult ? testResult.score : undefined, // Add score if available
          };
        });

        setTests(processedTests);
        setIsLoading(false);
      });
    });

    return () => {};
  }, [language, level]);

  const handleTestSelect = (testId: string) => {
    navigate(`/learning-path/${language}/${level}/${testId}`);
  };

  const handleBackClick = () => {
    navigate(`/learning-path/${language}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto pt-8 px-4">
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={handleBackClick}
        >
          <ArrowLeft size={16} />
          {t("Back to Levels")}
        </Button>

        {isLoading ? (
          <div className="w-full h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500">Loading tests...</p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TestList
              tests={tests}
              language={language}
              level={parseInt(level)}
              onTestSelect={handleTestSelect}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LevelTestsPage;
