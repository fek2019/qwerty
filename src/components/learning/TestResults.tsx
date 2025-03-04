import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from "lucide-react";

interface TestResultsProps {
  testTitle?: string;
  testDescription?: string;
  score?: number;
  totalQuestions?: number;
  correctAnswers?: number;
  incorrectAnswers?: number;
  timeSpent?: string;
  language?: string;
  level?: number;
  testId?: string;
  questions?: {
    id: string;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
  onReviewTest?: () => void;
  onContinue?: () => void;
  onRetry?: () => void;
}

const TestResults = ({
  testTitle = "Vocabulary Test",
  testDescription = "Basic vocabulary assessment for beginners",
  score = 75,
  totalQuestions = 20,
  correctAnswers = 15,
  incorrectAnswers = 5,
  timeSpent = "10:45",
  language = "English",
  level = 1,
  testId = "test-001",
  questions = [
    {
      id: "q1",
      question: "What is the meaning of 'hello' in Turkish?",
      userAnswer: "merhaba",
      correctAnswer: "merhaba",
      isCorrect: true,
    },
    {
      id: "q2",
      question: "What is the meaning of 'goodbye' in Turkish?",
      userAnswer: "güle güle",
      correctAnswer: "güle güle",
      isCorrect: true,
    },
    {
      id: "q3",
      question: "What is the meaning of 'thank you' in Turkish?",
      userAnswer: "lütfen",
      correctAnswer: "teşekkür ederim",
      isCorrect: false,
    },
  ],
  onReviewTest = () => {},
  onContinue = () => {},
  onRetry = () => {},
}: TestResultsProps) => {
  // Calculate percentage for progress bar
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  // Determine score status
  const isPassing = scorePercentage >= 70;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <Card className="w-full shadow-lg">
        <CardHeader className="text-center border-b pb-6">
          <Badge
            variant={isPassing ? "secondary" : "default"}
            className="mb-2 mx-auto"
          >
            {language} - Level {level}
          </Badge>
          <CardTitle className="text-2xl font-bold">{testTitle}</CardTitle>
          <CardDescription>{testDescription}</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-bold mb-2">{scorePercentage}%</h3>
            <Progress
              value={scorePercentage}
              className="h-3 w-full max-w-md mb-4"
            />
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-green-600 flex items-center gap-1">
                <CheckCircle size={16} /> {correctAnswers} correct
              </span>
              <span className="mx-2">|</span>
              <span className="text-red-600 flex items-center gap-1">
                <XCircle size={16} /> {incorrectAnswers} incorrect
              </span>
              <span className="mx-2">|</span>
              <span className="text-gray-600">Time: {timeSpent}</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4">Question Summary</h4>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border ${q.isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                >
                  <p className="font-medium mb-2">{q.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Your answer:</span>
                      <p
                        className={
                          q.isCorrect
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }
                      >
                        {q.userAnswer}
                      </p>
                    </div>
                    {!q.isCorrect && (
                      <div>
                        <span className="text-gray-600">Correct answer:</span>
                        <p className="text-green-600 font-medium">
                          {q.correctAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 border-t pt-6">
          <div className="flex gap-3">
            <Button variant="outline" onClick={onReviewTest}>
              Review Test
            </Button>
            <Button variant="outline" onClick={onRetry}>
              <RotateCcw size={16} className="mr-2" />
              Retry Test
            </Button>
          </div>
          <Button onClick={onContinue}>
            {isPassing ? "Continue to Next Lesson" : "Practice More"}
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestResults;
