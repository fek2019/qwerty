import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Volume2 } from "lucide-react";

interface Question {
  id: string;
  type: "multiple-choice" | "match" | "arrange" | "fill-blank" | "listen";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  audioUrl?: string;
  imageUrl?: string;
}

interface DuolingoTestProps {
  testId?: string;
  language?: string;
  level?: number;
  title?: string;
  questions?: Question[];
  onComplete?: (score: number, totalQuestions: number) => void;
}

const DuolingoTest = ({
  testId = "test-1",
  language = "English",
  level = 1,
  title = "Basic Vocabulary Test",
  questions = [
    {
      id: "q1",
      type: "multiple-choice",
      question: "Select the correct translation for 'Hello'",
      options: ["Bonjour", "Hola", "Привет", "Merhaba"],
      correctAnswer: "Merhaba",
      imageUrl:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&q=80",
    },
  ],
  onComplete = () => {},
}: DuolingoTestProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds per question

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  // Timer effect
  useEffect(() => {
    if (!showFeedback && !completed) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAnswer(""); // Wrong answer if time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex, showFeedback, completed]);

  // Reset timer when moving to next question
  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: string | string[]) => {
    if (showFeedback) return; // Prevent multiple answers

    const isAnswerCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? Array.isArray(answer) &&
        currentQuestion.correctAnswer.length === answer.length &&
        currentQuestion.correctAnswer.every((a) => answer.includes(a))
      : answer === currentQuestion.correctAnswer;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    // Update score and lives
    if (isAnswerCorrect) {
      setScore(score + 10);
    } else {
      setLives(lives - 1);
    }

    // Save answer
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });

    // Check if game over
    if (lives <= 1 && !isAnswerCorrect) {
      setTimeout(() => {
        setCompleted(true);
        onComplete(score, questions.length);
      }, 1500);
      return;
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowFeedback(false);
      } else {
        setCompleted(true);
        onComplete(score + (isAnswerCorrect ? 10 : 0), questions.length);
      }
    }, 1500);
  };

  const playAudio = () => {
    if (currentQuestion.audioUrl) {
      const audio = new Audio(currentQuestion.audioUrl);
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  // Render game over screen
  if (completed) {
    return (
      <div className="max-w-md mx-auto p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          {lives > 0 ? "Lesson Complete!" : "Game Over"}
        </h2>
        <div className="mb-6">
          <p className="text-xl mb-2">Score: {score}</p>
          <p className="text-muted-foreground">
            {lives > 0
              ? "Great job! You've completed this lesson."
              : "You've run out of lives. Try again!"}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
          <Button onClick={() => window.history.back()}>Back to Lessons</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {[...Array(lives)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-red-500"></div>
          ))}
        </div>
        <div className="text-xl font-bold">{score}</div>
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          {timeLeft}
        </div>
      </div>

      {/* Progress bar */}
      <Progress value={progress} className="h-2 mb-6" />

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestion.question}
        </h2>

        {/* Image if available */}
        {currentQuestion.imageUrl && (
          <div className="mb-4 flex justify-center">
            <img
              src={currentQuestion.imageUrl}
              alt="Question visual"
              className="rounded-lg max-h-48 object-cover"
            />
          </div>
        )}

        {/* Audio button for listening questions */}
        {currentQuestion.type === "listen" && (
          <div className="flex justify-center mb-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full h-16 w-16"
              onClick={playAudio}
            >
              <Volume2 size={24} />
            </Button>
          </div>
        )}
      </div>

      {/* Answer options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {currentQuestion.options?.map((option, index) => (
          <Button
            key={index}
            variant={
              showFeedback
                ? option === currentQuestion.correctAnswer
                  ? "default"
                  : "outline"
                : "outline"
            }
            className={`h-auto py-3 px-4 text-left justify-start ${showFeedback && option === answers[currentQuestion.id] && !isCorrect ? "border-red-500" : ""}`}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
          >
            {option}
            {showFeedback && option === currentQuestion.correctAnswer && (
              <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
            )}
            {showFeedback &&
              option === answers[currentQuestion.id] &&
              !isCorrect && (
                <XCircle className="ml-auto h-5 w-5 text-red-500" />
              )}
          </Button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-4 ${isCorrect ? "bg-green-700" : "bg-red-700"}`}
        >
          <p className="font-bold">{isCorrect ? "Correct!" : "Incorrect!"}</p>
          {!isCorrect && (
            <p className="text-sm">
              The correct answer is:{" "}
              {Array.isArray(currentQuestion.correctAnswer)
                ? currentQuestion.correctAnswer.join(", ")
                : currentQuestion.correctAnswer}
            </p>
          )}
        </motion.div>
      )}

      {/* Continue button */}
      {showFeedback && (
        <Button
          className="w-full"
          onClick={() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setShowFeedback(false);
            } else {
              setCompleted(true);
              onComplete(score + (isCorrect ? 10 : 0), questions.length);
            }
          }}
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default DuolingoTest;
