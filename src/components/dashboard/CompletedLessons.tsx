import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Award, ArrowUpRight } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  language: string;
  level: number;
  testNumber: number;
  completedAt: string;
  score: number;
  duration: number; // in minutes
  category: string;
}

interface CompletedLessonsProps {
  lessons?: Lesson[];
  onViewLesson?: (lessonId: string) => void;
}

const CompletedLessons = ({
  lessons = [
    {
      id: "1",
      title: "Basic Greetings",
      language: "English",
      level: 1,
      testNumber: 2,
      completedAt: "2023-06-15T14:30:00",
      score: 92,
      duration: 15,
      category: "Vocabulary",
    },
    {
      id: "2",
      title: "Family Members",
      language: "Kazakh",
      level: 1,
      testNumber: 3,
      completedAt: "2023-06-14T10:15:00",
      score: 85,
      duration: 20,
      category: "Vocabulary",
    },
    {
      id: "3",
      title: "Present Tense Verbs",
      language: "Turkish",
      level: 2,
      testNumber: 1,
      completedAt: "2023-06-12T16:45:00",
      score: 78,
      duration: 25,
      category: "Grammar",
    },
    {
      id: "4",
      title: "Food and Dining",
      language: "English",
      level: 2,
      testNumber: 4,
      completedAt: "2023-06-10T09:20:00",
      score: 95,
      duration: 18,
      category: "Vocabulary",
    },
  ],
  onViewLesson = () => {},
}: CompletedLessonsProps) => {
  // Format date to display in a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get badge color based on score
  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default";
    if (score >= 70) return "secondary";
    return "outline";
  };

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <span>Completed Lessons</span>
          <Badge variant="outline" className="ml-2">
            {lessons.length} lessons
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={getScoreBadgeVariant(lesson.score)}
                      className="px-2 py-0.5"
                    >
                      {lesson.score}%
                    </Badge>
                    <Badge variant="outline" className="px-2 py-0.5">
                      {lesson.language}
                    </Badge>
                    <Badge variant="secondary" className="px-2 py-0.5">
                      Level {lesson.level}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-base mb-1">{lesson.title}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(lesson.completedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{lesson.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>{lesson.category}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 sm:mt-0 self-end sm:self-center"
                  onClick={() => onViewLesson(lesson.id)}
                >
                  <span className="mr-1">Review</span>
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No completed lessons yet.</p>
              <p className="text-sm mt-2">
                Complete your first lesson to see it here.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompletedLessons;
