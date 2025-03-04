import React from "react";
import { motion } from "framer-motion";
import LanguageCard from "./LanguageCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageOption {
  language: string;
  title: string;
  description: string;
  flagImage: string;
  totalLessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

interface LanguageSelectionGridProps {
  languages?: LanguageOption[];
  onSelectLanguage?: (language: string) => void;
}

const LanguageSelectionGrid = ({
  languages = [
    {
      language: "English",
      title: "Learn English",
      description:
        "Master the global language of business, technology, and international communication.",
      flagImage:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      totalLessons: 42,
      difficulty: "Beginner",
    },
    {
      language: "Kazakh",
      title: "Learn Kazakh",
      description:
        "Discover the rich cultural heritage and language of Kazakhstan, a bridge between Europe and Asia.",
      flagImage:
        "https://images.unsplash.com/photo-1580100586938-02822d99c4a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      totalLessons: 36,
      difficulty: "Intermediate",
    },
    {
      language: "Turkish",
      title: "Learn Turkish",
      description:
        "Explore the fascinating language that connects Eastern Europe, the Middle East, and Central Asia.",
      flagImage:
        "https://images.unsplash.com/photo-1541300613939-71366b37c92e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      totalLessons: 38,
      difficulty: "Advanced",
    },
  ],
  onSelectLanguage = () => {},
}: LanguageSelectionGridProps) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("Choose Your Language")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t(
            "Select a language to begin your learning journey. Our interactive lessons will help you master vocabulary, grammar, and conversation skills.",
          )}
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {languages.map((lang, index) => (
          <motion.div
            key={lang.language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <LanguageCard
              language={lang.language}
              title={lang.title}
              description={lang.description}
              flagImage={lang.flagImage}
              totalLessons={lang.totalLessons}
              difficulty={lang.difficulty}
              onClick={() => onSelectLanguage(lang.language)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguageSelectionGrid;
