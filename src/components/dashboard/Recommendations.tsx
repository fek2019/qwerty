import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  language: string;
  level: number;
  estimatedTime: string;
  imageUrl: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  onClick?: () => void;
}

interface RecommendationsProps {
  recommendations?: Recommendation[];
  title?: string;
  description?: string;
}

const Recommendations = ({
  recommendations = [
    {
      id: "1",
      title: "Basic Greetings",
      description: "Learn essential greetings and introductions in English",
      language: "English",
      level: 1,
      estimatedTime: "15 min",
      imageUrl:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      difficulty: "beginner",
      onClick: () => {},
    },
    {
      id: "2",
      title: "Daily Conversations",
      description: "Practice everyday conversations in Kazakh",
      language: "Kazakh",
      level: 2,
      estimatedTime: "20 min",
      imageUrl:
        "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      difficulty: "intermediate",
      onClick: () => {},
    },
    {
      id: "3",
      title: "Business Vocabulary",
      description: "Learn essential business terms in Turkish",
      language: "Turkish",
      level: 3,
      estimatedTime: "25 min",
      imageUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      difficulty: "advanced",
      onClick: () => {},
    },
    {
      id: "4",
      title: "Travel Phrases",
      description:
        "Essential phrases for traveling in English-speaking countries",
      language: "English",
      level: 2,
      estimatedTime: "30 min",
      imageUrl:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      difficulty: "intermediate",
      onClick: () => {},
    },
  ],
  title = "Personalized Recommendations",
  description = "Based on your learning progress and interests",
}: RecommendationsProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {recommendations.map((recommendation) => (
            <CarouselItem
              key={recommendation.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card
                className="h-full cursor-pointer hover:shadow-md transition-all duration-300"
                onClick={recommendation.onClick}
              >
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={recommendation.imageUrl}
                    alt={recommendation.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {recommendation.estimatedTime}
                  </div>
                  <div
                    className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full
                      ${
                        recommendation.difficulty === "beginner"
                          ? "bg-green-500"
                          : recommendation.difficulty === "intermediate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                  >
                    {recommendation.difficulty}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      {recommendation.title}
                    </CardTitle>
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {recommendation.language} · Level {recommendation.level}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {recommendation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800"
                  >
                    Start learning <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0 ml-auto" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default Recommendations;
