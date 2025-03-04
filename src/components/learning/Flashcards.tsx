import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

interface FlashcardProps {
  id: string;
  front: string;
  back: string;
  audioUrl?: string;
  language: string;
}

interface FlashcardsProps {
  cards?: FlashcardProps[];
  title?: string;
  onComplete?: () => void;
}

const Flashcards = ({
  cards = [
    {
      id: "1",
      front: "Hello",
      back: "Привет",
      audioUrl: "https://example.com/audio/hello.mp3",
      language: "English",
    },
    {
      id: "2",
      front: "Goodbye",
      back: "До свидания",
      audioUrl: "https://example.com/audio/goodbye.mp3",
      language: "English",
    },
    {
      id: "3",
      front: "Thank you",
      back: "Спасибо",
      audioUrl: "https://example.com/audio/thankyou.mp3",
      language: "English",
    },
    {
      id: "4",
      front: "Please",
      back: "Пожалуйста",
      audioUrl: "https://example.com/audio/please.mp3",
      language: "English",
    },
    {
      id: "5",
      front: "Yes",
      back: "Да",
      audioUrl: "https://example.com/audio/yes.mp3",
      language: "English",
    },
  ],
  title = "Vocabulary Flashcards",
  onComplete = () => {},
}: FlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    } else {
      // All cards reviewed
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 200);
    }
  };

  const handleFlip = () => {
    setFlipped(!flipped);
    if (!flipped && !completed.includes(currentCard.id)) {
      setCompleted([...completed, currentCard.id]);
    }
  };

  const handlePlayAudio = () => {
    // In a real implementation, this would play the audio file
    if (currentCard.audioUrl) {
      const audio = new Audio(currentCard.audioUrl);
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  const resetCards = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setCompleted([]);
  };

  const progress = Math.round((completed.length / cards.length) * 100);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 bg-white">
      <div className="w-full mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Card {currentIndex + 1} of {cards.length}
          </span>
          <span className="text-sm text-gray-600">{progress}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full h-[400px] relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id + (flipped ? "-back" : "-front")}
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Card
              className="w-full h-full flex flex-col justify-center items-center cursor-pointer shadow-lg"
              onClick={handleFlip}
            >
              <CardContent className="flex flex-col items-center justify-center h-full w-full p-6">
                <div className="absolute top-4 right-4 text-sm text-gray-500">
                  {currentCard.language}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {flipped ? currentCard.back : currentCard.front}
                </h3>

                {!flipped && currentCard.audioUrl && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayAudio();
                    }}
                  >
                    <Volume2 size={20} />
                  </Button>
                )}

                <p className="text-sm text-gray-500 mt-6">
                  {flipped
                    ? "Click to see the front"
                    : "Click to see the translation"}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between w-full mt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="mr-2" size={16} />
          Previous
        </Button>

        <Button variant="outline" onClick={resetCards}>
          <RotateCcw className="mr-2" size={16} />
          Reset
        </Button>

        <Button onClick={handleNext}>
          {currentIndex === cards.length - 1 ? "Complete" : "Next"}
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Flashcards;
