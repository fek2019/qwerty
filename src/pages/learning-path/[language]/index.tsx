import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DifficultyLevelGrid from "@/components/learning/DifficultyLevelGrid";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguagePage {
  language: string;
  title: string;
  description: string;
  levels: {
    id: number;
    level: number;
    title: string;
    description: string;
    progress: number;
    isLocked: boolean;
    isCompleted: boolean;
    totalTests: number;
    completedTests: number;
  }[];
}

const languageData: Record<string, LanguagePage> = {
  english: {
    language: "English",
    title: "English Learning Path",
    description:
      "Master the global language of business, technology, and international communication.",
    levels: [
      {
        id: 1,
        level: 1,
        title: "Beginner",
        description:
          "Start your language journey with basic vocabulary and simple phrases.",
        progress: 75,
        isLocked: false,
        isCompleted: false,
        totalTests: 7,
        completedTests: 5,
      },
      {
        id: 2,
        level: 2,
        title: "Elementary",
        description:
          "Build on your basics with more vocabulary and grammar structures.",
        progress: 30,
        isLocked: false,
        isCompleted: false,
        totalTests: 7,
        completedTests: 2,
      },
      {
        id: 3,
        level: 3,
        title: "Intermediate",
        description:
          "Expand your knowledge with more complex sentences and expressions.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 4,
        level: 4,
        title: "Upper Intermediate",
        description:
          "Refine your skills with advanced grammar and diverse vocabulary.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 5,
        level: 5,
        title: "Advanced",
        description:
          "Master complex language structures and nuanced expressions.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 6,
        level: 6,
        title: "Proficiency",
        description:
          "Achieve near-native fluency with sophisticated language use.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
    ],
  },
  kazakh: {
    language: "Kazakh",
    title: "Kazakh Learning Path",
    description: "Discover the rich language and culture of Kazakhstan.",
    levels: [
      {
        id: 1,
        level: 1,
        title: "Beginner",
        description: "Learn the Kazakh alphabet and basic greetings.",
        progress: 45,
        isLocked: false,
        isCompleted: false,
        totalTests: 7,
        completedTests: 3,
      },
      {
        id: 2,
        level: 2,
        title: "Elementary",
        description: "Build simple sentences and everyday vocabulary.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 3,
        level: 3,
        title: "Intermediate",
        description:
          "Develop conversational skills and expand your vocabulary.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 4,
        level: 4,
        title: "Upper Intermediate",
        description: "Master complex grammar and cultural expressions.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 5,
        level: 5,
        title: "Advanced",
        description: "Understand native speakers and complex texts.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 6,
        level: 6,
        title: "Proficiency",
        description: "Achieve near-native fluency in Kazakh language.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
    ],
  },
  turkish: {
    language: "Turkish",
    title: "Turkish Learning Path",
    description: "Explore the beautiful language connecting Europe and Asia.",
    levels: [
      {
        id: 1,
        level: 1,
        title: "Beginner",
        description: "Start with Turkish pronunciation and basic expressions.",
        progress: 100,
        isLocked: false,
        isCompleted: true,
        totalTests: 7,
        completedTests: 7,
      },
      {
        id: 2,
        level: 2,
        title: "Elementary",
        description: "Learn essential grammar and everyday vocabulary.",
        progress: 15,
        isLocked: false,
        isCompleted: false,
        totalTests: 7,
        completedTests: 1,
      },
      {
        id: 3,
        level: 3,
        title: "Intermediate",
        description:
          "Develop your conversational skills and reading comprehension.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 4,
        level: 4,
        title: "Upper Intermediate",
        description:
          "Master complex sentence structures and idiomatic expressions.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 5,
        level: 5,
        title: "Advanced",
        description: "Understand native speakers and authentic materials.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
      {
        id: 6,
        level: 6,
        title: "Proficiency",
        description: "Achieve near-native fluency in Turkish language.",
        progress: 0,
        isLocked: false, // Unlocked all levels
        isCompleted: false,
        totalTests: 7,
        completedTests: 0,
      },
    ],
  },
};

const LanguageLearningPath = () => {
  const { language } = useParams<{ language: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Default to English if language param is invalid
  const normalizedLanguage = language?.toLowerCase() || "english";
  const pageData = languageData[normalizedLanguage] || languageData.english;

  const handleSelectLevel = (levelId: number) => {
    navigate(`/learning-path/${normalizedLanguage}/${levelId}`);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToHome}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("Back to Home")}
          </Button>
          <div>
            <h1 className="text-xl font-semibold flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              {pageData.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {pageData.description}
            </p>
          </div>
        </div>
      </header>

      <main className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DifficultyLevelGrid
            levels={pageData.levels}
            language={pageData.language}
            onSelectLevel={handleSelectLevel}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default LanguageLearningPath;
