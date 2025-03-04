import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Clock,
  CheckCircle,
  Lock,
  AlertTriangle,
  Trophy,
  BookOpen,
} from "lucide-react";

interface TestItem {
  id: string;
  title: string;
  description: string;
  estimatedDuration: number; // in minutes
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

interface TestListProps {
  tests: TestItem[];
  language?: string;
  level?: number;
  onTestSelect?: (testId: string) => void;
}

const TestList = ({
  tests = [
    {
      id: "test-1",
      title: "Basic Vocabulary",
      description:
        "Learn essential words and phrases for everyday conversations.",
      estimatedDuration: 15,
      difficulty: "easy",
      isCompleted: true,
      isLocked: false,
      score: 85,
      type: "vocabulary",
    },
    {
      id: "test-2",
      title: "Simple Grammar Structures",
      description:
        "Master the fundamental grammar rules for basic sentence construction.",
      estimatedDuration: 20,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "grammar",
    },
    {
      id: "test-3",
      title: "Listening Comprehension",
      description:
        "Practice understanding spoken language in various everyday scenarios.",
      estimatedDuration: 25,
      difficulty: "medium",
      isCompleted: false,
      isLocked: true,
      type: "listening",
    },
    {
      id: "test-4",
      title: "Reading Practice",
      description:
        "Improve your reading skills with simple texts and comprehension questions.",
      estimatedDuration: 30,
      difficulty: "medium",
      isCompleted: false,
      isLocked: true,
      type: "reading",
    },
    {
      id: "test-5",
      title: "Writing Exercises",
      description:
        "Develop your writing skills through guided exercises and prompts.",
      estimatedDuration: 35,
      difficulty: "hard",
      isCompleted: false,
      isLocked: true,
      type: "writing",
    },
    {
      id: "test-6",
      title: "Speaking Practice",
      description:
        "Enhance your speaking abilities with pronunciation and conversation exercises.",
      estimatedDuration: 25,
      difficulty: "hard",
      isCompleted: false,
      isLocked: true,
      type: "speaking",
    },
    {
      id: "test-7",
      title: "Comprehensive Review",
      description:
        "Test your overall knowledge with a mixed format assessment covering all skills.",
      estimatedDuration: 45,
      difficulty: "hard",
      isCompleted: false,
      isLocked: true,
      type: "mixed",
    },
  ],
  language = "English",
  level = 1,
  onTestSelect = () => {},
}: TestListProps) => {
  // Calculate overall progress
  const completedTests = tests.filter((test) => test.isCompleted).length;
  const totalTests = tests.length;
  const progressPercentage = Math.round((completedTests / totalTests) * 100);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "vocabulary":
        return <BookOpen className="h-4 w-4" />;
      case "grammar":
        return <AlertTriangle className="h-4 w-4" />;
      case "listening":
        return <Trophy className="h-4 w-4" />;
      case "reading":
        return <BookOpen className="h-4 w-4" />;
      case "writing":
        return <BookOpen className="h-4 w-4" />;
      case "speaking":
        return <BookOpen className="h-4 w-4" />;
      case "mixed":
        return <Trophy className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 bg-white">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold">
              {language} - Level {level}
            </h1>
            <p className="text-gray-500">
              Complete all tests to master this level
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">Overall Progress</p>
            <div className="flex items-center gap-2">
              <Progress value={progressPercentage} className="w-40 h-2" />
              <span className="text-sm font-medium">{progressPercentage}%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {completedTests} of {totalTests} tests completed
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {tests.map((test) => (
          <Card
            key={test.id}
            className={`transition-all duration-200 ${test.isLocked ? "opacity-60" : "hover:shadow-md"} bg-white`}
          >
            <div className="flex flex-col sm:flex-row">
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className={`${getDifficultyColor(test.difficulty)}`}
                      >
                        {test.difficulty.charAt(0).toUpperCase() +
                          test.difficulty.slice(1)}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        {getTypeIcon(test.type)}
                        <span>
                          {test.type.charAt(0).toUpperCase() +
                            test.type.slice(1)}
                        </span>
                      </Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {test.title}
                      {test.isCompleted && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Completed</p>
                              {test.score && <p>Score: {test.score}%</p>}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      {test.isLocked && (
                        <Lock className="h-5 w-5 text-gray-400" />
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {test.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-end pt-6 pr-6 pl-6 sm:pl-0 pb-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      {test.estimatedDuration} min
                    </span>
                  </div>
                  <Button
                    onClick={() => onTestSelect(test.id)}
                    disabled={test.isLocked}
                    variant={test.isCompleted ? "outline" : "default"}
                  >
                    {test.isCompleted
                      ? "Review"
                      : test.isLocked
                        ? "Locked"
                        : "Start Test"}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestList;
