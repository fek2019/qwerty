import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

interface LanguageCardProps {
  language: string;
  title: string;
  description: string;
  flagImage: string;
  totalLessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  onClick?: () => void;
}

const LanguageCard = ({
  language = "English",
  title = "Learn English",
  description = "Master the global language of business, technology, and international communication.",
  flagImage = "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  totalLessons = 42,
  difficulty = "Beginner",
  onClick = () => {},
}: LanguageCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-[450px] w-[350px]"
    >
      <Card
        className="h-full w-full overflow-hidden cursor-pointer bg-white"
        onClick={onClick}
      >
        <div className="relative h-[200px] w-full overflow-hidden">
          <img
            src={flagImage}
            alt={`${language} language`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge
              variant={
                difficulty === "Beginner"
                  ? "default"
                  : difficulty === "Intermediate"
                    ? "secondary"
                    : "destructive"
              }
            >
              {difficulty}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe size={20} className="text-primary" />
            <CardTitle>{t(title)}</CardTitle>
          </div>
          <CardDescription className="line-clamp-2 mt-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total lessons</span>
            <span className="font-medium">{totalLessons}</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" size="sm" className="w-full group">
            Start Learning
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LanguageCard;
