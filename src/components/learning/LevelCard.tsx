import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle } from "lucide-react";

interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  totalTests: number;
  completedTests: number;
  onClick?: () => void;
}

const LevelCard = ({
  level = 1,
  title = "Beginner",
  description = "Start your language journey with basic vocabulary and simple phrases.",
  progress = 0,
  isLocked = false,
  isCompleted = false,
  totalTests = 7,
  completedTests = 0,
  onClick = () => {},
}: LevelCardProps) => {
  return (
    <Card
      className={`w-[350px] h-[300px] transition-all duration-300 hover:shadow-lg bg-white ${isLocked ? "opacity-70" : "cursor-pointer hover:scale-105"}`}
      onClick={isLocked ? undefined : onClick}
    >
      <CardHeader className="relative">
        <div className="absolute top-6 right-6">
          {isLocked && <Lock className="text-gray-400" size={20} />}
          {isCompleted && <CheckCircle className="text-green-500" size={20} />}
        </div>
        <Badge
          variant={isCompleted ? "secondary" : "default"}
          className="w-fit mb-2"
        >
          Level {level}
        </Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between items-center text-sm mt-4">
            <span>Tests completed</span>
            <span>
              {completedTests}/{totalTests}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="w-full text-center">
          {isLocked ? (
            <span className="text-sm text-gray-500">
              Complete previous level to unlock
            </span>
          ) : isCompleted ? (
            <span className="text-sm text-green-600">
              Level completed! Review or continue
            </span>
          ) : (
            <span className="text-sm text-blue-600">Continue learning</span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LevelCard;
