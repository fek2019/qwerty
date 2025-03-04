import React from "react";
import { motion } from "framer-motion";
import LevelCard from "./LevelCard";

interface Level {
  id: number;
  level: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  totalTests: number;
  completedTests: number;
}

interface DifficultyLevelGridProps {
  levels?: Level[];
  language?: string;
  onSelectLevel?: (levelId: number) => void;
}

const DifficultyLevelGrid = ({
  levels = [
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
      isLocked: true,
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
      isLocked: true,
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
      isLocked: true,
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
      isLocked: true,
      isCompleted: false,
      totalTests: 7,
      completedTests: 0,
    },
  ],
  language = "English",
  onSelectLevel = () => {},
}: DifficultyLevelGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {language} Learning Path
        </h1>
        <p className="text-gray-600">
          Select a difficulty level to continue your learning journey
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <LevelCard
              level={level.level}
              title={level.title}
              description={level.description}
              progress={level.progress}
              isLocked={level.isLocked}
              isCompleted={level.isCompleted}
              totalTests={level.totalTests}
              completedTests={level.completedTests}
              onClick={() => onSelectLevel(level.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Complete all levels to achieve mastery in {language}.
          <br />
          Your progress is automatically saved as you complete tests and
          lessons.
        </p>
      </div>
    </div>
  );
};

export default DifficultyLevelGrid;
