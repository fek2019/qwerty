import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Volume2,
  HelpCircle,
  Save,
  SkipForward,
} from "lucide-react";

interface Question {
  id: string;
  type: "multiple-choice" | "checkbox" | "text" | "audio";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  audioUrl?: string;
  explanation?: string;
}

interface InteractiveTestProps {
  testId?: string;
  language?: string;
  level?: number;
  title?: string;
  description?: string;
  questions?: Question[];
  onComplete?: (score: number, totalQuestions: number) => void;
}

const InteractiveTest = ({
  testId = "test-1",
  language = "English",
  level = 1,
  title = "Basic Vocabulary Test",
  description = "Test your knowledge of basic vocabulary in this language.",
  questions = [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is the correct translation for 'Hello'?",
      options: ["Bonjour", "Hola", "Привет", "Merhaba"],
      correctAnswer: "Merhaba",
      explanation: "'Merhaba' is the Turkish word for 'Hello'.",
    },
    {
      id: "q2",
      type: "multiple-choice",
      question: "What is the correct translation for 'Thank you'?",
      options: ["Gracias", "Merci", "Спасибо", "Teşekkürler"],
      correctAnswer: "Teşekkürler",
      explanation: "'Teşekkürler' is the Turkish word for 'Thank you'.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "What is the English translation for 'Kitap'?",
      options: ["Book", "Pen", "Table", "Chair"],
      correctAnswer: "Book",
      explanation: "'Kitap' is the Turkish word for 'Book'.",
    },
    {
      id: "q4",
      type: "multiple-choice",
      question: "Which word means 'Apple' in Turkish?",
      options: ["Elma", "Armut", "Portakal", "Üzüm"],
      correctAnswer: "Elma",
      explanation: "'Elma' is the Turkish word for 'Apple'.",
    },
  ],
  onComplete = () => {},
}: InteractiveTestProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [skippedQuestions, setSkippedQuestions] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (answer: string | string[]) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const handleCheckboxChange = (option: string) => {
    const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
    const newAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter((item) => item !== option)
      : [...currentAnswers, option];

    handleAnswer(newAnswers);
  };

  const handleNext = () => {
    // Don't automatically show explanation
    if (currentQuestionIndex < questions.length - 1) {
      setShowExplanation(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handlePrevious = () => {
    setShowExplanation(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkipQuestion = () => {
    // Add current question to skipped questions if not already there
    if (!skippedQuestions.includes(currentQuestion.id)) {
      setSkippedQuestions([...skippedQuestions, currentQuestion.id]);
    }

    // Move to next question
    if (currentQuestionIndex < questions.length - 1) {
      setShowExplanation(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handleSaveProgress = () => {
    // In a real app, this would save the current progress to the database
    alert("Progress saved! You can continue later.");
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    setShowResults(true);
    setShowConfirmSubmit(false);

    // Calculate score
    let correctCount = 0;
    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (question.type === "checkbox") {
        const correctOptions = question.correctAnswer as string[];
        const userOptions = (userAnswer as string[]) || [];
        if (
          correctOptions.length === userOptions.length &&
          correctOptions.every((option) => userOptions.includes(option))
        ) {
          correctCount++;
        }
      } else {
        if (userAnswer === question.correctAnswer) {
          correctCount++;
        }
      }
    });

    onComplete(correctCount, questions.length);
  };

  const isAnswered = (questionId: string) => {
    return (
      answers[questionId] !== undefined &&
      (typeof answers[questionId] === "string"
        ? (answers[questionId] as string).trim() !== ""
        : (answers[questionId] as string[]).length > 0)
    );
  };

  const isCorrect = (questionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return false;

    const userAnswer = answers[questionId];

    if (question.type === "checkbox") {
      const correctOptions = question.correctAnswer as string[];
      const userOptions = (userAnswer as string[]) || [];
      return (
        correctOptions.length === userOptions.length &&
        correctOptions.every((option) => userOptions.includes(option))
      );
    } else if (question.type === "text") {
      return (
        (userAnswer as string).toLowerCase().trim() ===
        (question.correctAnswer as string).toLowerCase().trim()
      );
    } else {
      return userAnswer === question.correctAnswer;
    }
  };

  const renderQuestion = () => {
    const question = currentQuestion;

    if (question.type === "checkbox") {
      // Render checkbox for multiple selection
      return (
        <div className="space-y-3">
          {question.options?.map((option, index) => {
            const currentAnswers = (answers[question.id] as string[]) || [];
            return (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={`checkbox-${index}`}
                  checked={currentAnswers.includes(option)}
                  onCheckedChange={() => handleCheckboxChange(option)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="flex-grow cursor-pointer"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      );
    } else {
      // Render radio buttons for single selection
      return (
        <RadioGroup
          value={(answers[question.id] as string) || ""}
          onValueChange={(value) => handleAnswer(value)}
          className="space-y-3"
        >
          {question.options?.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-3 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <RadioGroupItem value={option} id={`option-${index}`} />
              <label
                htmlFor={`option-${index}`}
                className="flex-grow cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </RadioGroup>
      );
    }
  };

  const renderResults = () => {
    const score = questions.filter((q) => isCorrect(q.id)).length;
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Test Results</h2>
          <p className="text-muted-foreground">
            You scored {score} out of {questions.length} questions correctly.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Score</span>
            <span className="font-medium">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Questions</TabsTrigger>
            <TabsTrigger value="correct">
              Correct ({questions.filter((q) => isCorrect(q.id)).length})
            </TabsTrigger>
            <TabsTrigger value="incorrect">
              Incorrect (
              {
                questions.filter((q) => !isCorrect(q.id) && isAnswered(q.id))
                  .length
              }
              )
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-4">
            {questions.map((q, index) => (
              <ResultCard
                key={q.id}
                question={q}
                index={index}
                userAnswer={answers[q.id]}
                isCorrect={isCorrect(q.id)}
                isAnswered={isAnswered(q.id)}
              />
            ))}
          </TabsContent>

          <TabsContent value="correct" className="space-y-4 mt-4">
            {questions
              .filter((q) => isCorrect(q.id))
              .map((q, index) => (
                <ResultCard
                  key={q.id}
                  question={q}
                  index={index}
                  userAnswer={answers[q.id]}
                  isCorrect={true}
                  isAnswered={true}
                />
              ))}
          </TabsContent>

          <TabsContent value="incorrect" className="space-y-4 mt-4">
            {questions
              .filter((q) => !isCorrect(q.id) && isAnswered(q.id))
              .map((q, index) => (
                <ResultCard
                  key={q.id}
                  question={q}
                  index={index}
                  userAnswer={answers[q.id]}
                  isCorrect={false}
                  isAnswered={true}
                />
              ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Back to Lessons
          </Button>
          <Button
            onClick={() => {
              setShowResults(false);
              setIsSubmitted(false);
              setCurrentQuestionIndex(0);
              setAnswers({});
              setShowExplanation(false);
            }}
          >
            Retry Test
          </Button>
        </div>
      </motion.div>
    );
  };

  if (showResults) {
    return renderResults();
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="text-sm text-muted-foreground">
            {language} - Level {level}
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-start gap-2">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
              {currentQuestionIndex + 1}
            </span>
            <span>{currentQuestion.question}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>{renderQuestion()}</CardContent>
        {showExplanation && (
          <CardFooter className="block border-t pt-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Explanation</AlertTitle>
              <AlertDescription>
                {currentQuestion.explanation ||
                  "No explanation available for this question."}
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>

      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          <Button
            variant="outline"
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-1"
          >
            <HelpCircle className="h-4 w-4 mr-1" />{" "}
            {showExplanation ? "Hide Hint" : "Show Hint"}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleSaveProgress}
            className="flex items-center gap-1"
          >
            <Save className="h-4 w-4 mr-1" /> Save
          </Button>

          <Button
            variant="outline"
            onClick={handleSkipQuestion}
            className="flex items-center gap-1"
          >
            <SkipForward className="h-4 w-4 mr-1" /> Skip
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswered(currentQuestion.id)}
            className="flex items-center gap-1"
          >
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <AlertDialog open={showConfirmSubmit} onOpenChange={setShowConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Test</AlertDialogTitle>
            <AlertDialogDescription>
              You have completed all questions. Are you ready to submit your
              test and see your results?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Review Answers</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmitTest}>
              Submit Test
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

interface ResultCardProps {
  question: Question;
  index: number;
  userAnswer: string | string[] | undefined;
  isCorrect: boolean;
  isAnswered: boolean;
}

const ResultCard = ({
  question,
  index,
  userAnswer,
  isCorrect,
  isAnswered,
}: ResultCardProps) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const formatAnswer = (answer: string | string[] | undefined) => {
    if (!answer) return "No answer provided";
    if (Array.isArray(answer)) return answer.join(", ");
    return answer;
  };

  return (
    <Card
      className={`border-l-4 ${isCorrect ? "border-l-green-500" : isAnswered ? "border-l-red-500" : "border-l-yellow-500"}}`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <span className="bg-muted rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
            {index + 1}
          </span>
          <span>{question.question}</span>
          {isCorrect ? (
            <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
          ) : isAnswered ? (
            <AlertCircle className="h-5 w-5 text-red-500 ml-auto" />
          ) : (
            <AlertCircle className="h-5 w-5 text-yellow-500 ml-auto" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-2 pt-0">
        <div>
          <span className="font-medium">Your answer: </span>
          <span
            className={
              isCorrect
                ? "text-green-600"
                : isAnswered
                  ? "text-red-600"
                  : "text-yellow-600"
            }
          >
            {formatAnswer(userAnswer)}
          </span>
        </div>
        {!isCorrect && isAnswered && (
          <div>
            <span className="font-medium">Correct answer: </span>
            <span className="text-green-600">
              {formatAnswer(question.correctAnswer)}
            </span>
          </div>
        )}
        {question.explanation && (
          <Button
            variant="ghost"
            size="sm"
            className="text-xs p-0 h-auto"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            {showExplanation ? "Hide explanation" : "Show explanation"}
          </Button>
        )}
        {showExplanation && question.explanation && (
          <div className="text-xs bg-muted/50 p-2 rounded">
            {question.explanation}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveTest;
