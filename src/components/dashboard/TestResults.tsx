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
import { CheckCircle, XCircle, BarChart, Clock, Award } from "lucide-react";

interface TestResultsProps {
  testId?: string;
  testTitle?: string;
  score?: number;
  totalQuestions?: number;
  correctAnswers?: number;
  incorrectAnswers?: number;
  timeSpent?: string;
  feedback?: string;
  detailedResults?: {
    questionNumber: number;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
  onReviewTest?: () => void;
  onContinue?: () => void;
}

const TestResults = ({
  testId = "test-123",
  testTitle = "Basic Vocabulary Test",
  score = 75,
  totalQuestions = 20,
  correctAnswers = 15,
  incorrectAnswers = 5,
  timeSpent = "12:45",
  feedback = "Great job! You've mastered basic vocabulary. Focus on improving your understanding of adjectives.",
  detailedResults = [
    {
      questionNumber: 1,
      question: "What is the correct translation for 'hello'?",
      userAnswer: "Merhaba",
      correctAnswer: "Merhaba",
      isCorrect: true,
    },
    {
      questionNumber: 2,
      question: "What is the correct translation for 'goodbye'?",
      userAnswer: "Güle güle",
      correctAnswer: "Güle güle",
      isCorrect: true,
    },
    {
      questionNumber: 3,
      question: "What is the correct translation for 'thank you'?",
      userAnswer: "Teşekkür",
      correctAnswer: "Teşekkür ederim",
      isCorrect: false,
    },
  ],
  onReviewTest = () => {},
  onContinue = () => {},
}: TestResultsProps) => {
  // Calculate score percentage for progress bar
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  // Determine badge variant based on score
  const getBadgeVariant = () => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <Card className="w-full shadow-lg">
        <CardHeader className="text-center border-b pb-6">
          <Badge variant={getBadgeVariant()} className="mx-auto mb-2">
            Score: {score}%
          </Badge>
          <CardTitle className="text-2xl font-bold">{testTitle}</CardTitle>
          <CardDescription>Test ID: {testId}</CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-gray-500">Correct Answers</p>
              <p className="text-xl font-bold">{correctAnswers}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <XCircle className="h-8 w-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-500">Incorrect Answers</p>
              <p className="text-xl font-bold">{incorrectAnswers}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-sm text-gray-500">Time Spent</p>
              <p className="text-xl font-bold">{timeSpent}</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Overall Performance</span>
              <span className="text-sm font-medium">
                {scorePercentage.toFixed(0)}%
              </span>
            </div>
            <Progress value={scorePercentage} className="h-2" />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-start">
              <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-700 mb-1">Feedback</h4>
                <p className="text-sm text-blue-600">{feedback}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <BarChart className="h-5 w-5 mr-2" />
              Detailed Results
            </h4>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Question
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your Answer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Correct Answer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {detailedResults.map((result) => (
                    <tr key={result.questionNumber}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {result.questionNumber}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {result.question}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {result.userAnswer}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {result.correctAnswer}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {result.isCorrect ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" /> Correct
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <XCircle className="h-3 w-3 mr-1" /> Incorrect
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={onReviewTest}>
            Review Test
          </Button>
          <Button onClick={onContinue}>Continue Learning</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestResults;
