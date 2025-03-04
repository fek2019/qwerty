import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowLeft,
  BookOpen,
  Video,
  Trophy,
  History,
  Clock,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Get user data from localStorage
  const userString = localStorage.getItem("user");
  const user = userString
    ? JSON.parse(userString)
    : { name: "User", email: "user@example.com" };

  // Get test results from database
  const [testResults, setTestResults] = useState<any[]>([]);

  useEffect(() => {
    import("@/lib/testDatabase").then(({ getUserTestResults }) => {
      const results = getUserTestResults(user.email);
      setTestResults(results);
    });
  }, [user.email]);

  // Navigation handlers
  const handleViewLesson = (lessonId: string) => {
    console.log(`Navigating to lesson ${lessonId}`);
    navigate(`/learning-path/english/1/${lessonId}`);
  };

  const handleReviewTest = () => {
    console.log("Reviewing test");
    navigate("/learning-path/english/1/test-1");
  };

  const handleContinueLearning = () => {
    console.log("Continuing to next lesson");
    navigate("/learning-path/english/1");
  };

  const handleSelectRecommendation = (id: string) => {
    console.log(`Selected recommendation ${id}`);
    navigate(`/learning-path/english/1/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">
              {t("Dashboard")}
            </h1>
            <p className="text-gray-600">Welcome, {user.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              {t("Back to Home")}
            </Button>
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Simplified Dashboard inspired by Duolingo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Language Tests Card */}
          <Card className="bg-white hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                Language Tests
              </CardTitle>
              <CardDescription>
                Practice your language skills with interactive tests
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="grid grid-cols-1 gap-2">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => navigate("/learning-path/english/1")}
                >
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-700">E</span>
                  </span>
                  English Tests
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => navigate("/learning-path/kazakh/1")}
                >
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-green-700">K</span>
                  </span>
                  Kazakh Tests
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => navigate("/learning-path/turkish/1")}
                >
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-red-700">T</span>
                  </span>
                  Turkish Tests
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => navigate("/tests")}>
                View All Tests
              </Button>
            </CardFooter>
          </Card>

          {/* Video Lessons Card */}
          <Card className="bg-white hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-blue-500" />
                Video Lessons
              </CardTitle>
              <CardDescription>
                Watch instructional videos to improve your language skills
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                <div
                  className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate("/video-lessons")}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      English
                    </span>
                    <span className="text-xs text-gray-500">15 min</span>
                  </div>
                  <h3 className="font-medium">Basic Greetings</h3>
                  <p className="text-sm text-gray-600">
                    Learn essential greetings and introductions
                  </p>
                </div>
                <div
                  className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate("/video-lessons")}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Kazakh
                    </span>
                    <span className="text-xs text-gray-500">20 min</span>
                  </div>
                  <h3 className="font-medium">Alphabet Pronunciation</h3>
                  <p className="text-sm text-gray-600">
                    Master the Kazakh alphabet sounds
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => navigate("/video-lessons")}
              >
                Browse All Videos
              </Button>
            </CardFooter>
          </Card>

          {/* Test Results Card */}
          <Card className="bg-white hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Your Test Results
              </CardTitle>
              <CardDescription>
                Track your progress and review past test results
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              {testResults.length > 0 ? (
                <div className="space-y-3">
                  {testResults.slice(0, 3).map((result, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">
                          {result.language} Test - Level {result.level}
                        </span>
                        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          {result.score}%
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 gap-3">
                        <span className="flex items-center gap-1">
                          <CheckCircle size={14} className="text-green-500" />
                          {result.correctAnswers}/{result.totalQuestions}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {result.timeSpent}
                        </span>
                        <span className="text-xs">
                          {new Date(result.completedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[200px] text-center">
                  <p className="text-gray-500 mb-4">No test results yet</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate("/learning-path/english/1")}
                  >
                    Take Your First Test
                  </Button>
                </div>
              )}
            </CardContent>
            {testResults.length > 0 && (
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                  onClick={() => navigate("/profile")}
                >
                  <History size={16} />
                  View All Results
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
