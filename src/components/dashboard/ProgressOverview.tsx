import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Languages,
  Award,
} from "lucide-react";

interface LanguageProgress {
  language: string;
  progress: number;
  level: number;
  testsCompleted: number;
  totalTests: number;
  lastActivity: string;
}

interface ProgressOverviewProps {
  languages?: LanguageProgress[];
  totalLessonsCompleted?: number;
  totalTestsCompleted?: number;
  streakDays?: number;
  selectedTab?: string;
}

const ProgressOverview = ({
  languages = [
    {
      language: "English",
      progress: 65,
      level: 4,
      testsCompleted: 18,
      totalTests: 42,
      lastActivity: "2 days ago",
    },
    {
      language: "Kazakh",
      progress: 32,
      level: 2,
      testsCompleted: 9,
      totalTests: 42,
      lastActivity: "5 days ago",
    },
    {
      language: "Turkish",
      progress: 12,
      level: 1,
      testsCompleted: 4,
      totalTests: 42,
      lastActivity: "1 week ago",
    },
  ],
  totalLessonsCompleted = 31,
  totalTestsCompleted = 31,
  streakDays = 7,
  selectedTab = "overview",
}: ProgressOverviewProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">{t("Learning Progress")}</h2>
          <p className="text-muted-foreground">
            {t("Track your progress across all languages")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            <Award size={16} />
            <span className="text-sm font-medium">
              {streakDays} {t("day streak")}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/profile")}
          >
            {t("Profile")}
          </Button>
        </div>
      </div>

      <Tabs defaultValue={selectedTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Activity size={16} />
            {t("Overview")}
          </TabsTrigger>
          <TabsTrigger value="languages" className="flex items-center gap-2">
            <Languages size={16} />
            {t("Languages")}
          </TabsTrigger>
          <TabsTrigger value="statistics" className="flex items-center gap-2">
            <BarChart size={16} />
            {t("Statistics")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t("Total Languages")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Languages className="mr-2 text-blue-600" />
                  <span className="text-3xl font-bold">{languages.length}</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {languages.map((lang) => lang.language).join(", ")}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t("Lessons Completed")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Award className="mr-2 text-green-600" />
                  <span className="text-3xl font-bold">
                    {totalLessonsCompleted}
                  </span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {t("Across all languages")}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t("Tests Completed")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <PieChart className="mr-2 text-purple-600" />
                  <span className="text-3xl font-bold">
                    {totalTestsCompleted}
                  </span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  {t("Test completion rate")}:{" "}
                  {Math.round(
                    (totalTestsCompleted /
                      languages.reduce(
                        (acc, lang) => acc + lang.totalTests,
                        0,
                      )) *
                      100,
                  )}
                  %
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("Recent Progress")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="font-medium text-blue-700">
                            {lang.language.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium">{lang.language}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t("Level")} {lang.level} • {lang.lastActivity}
                          </p>
                        </div>
                      </div>
                      <span className="font-medium">{lang.progress}%</span>
                    </div>
                    <Progress value={lang.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">
                      {lang.testsCompleted} {t("of")} {lang.totalTests}{" "}
                      {t("tests completed")}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-medium text-blue-700">
                        {lang.language.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle>{lang.language}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Level {lang.level}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Overall Progress</span>
                      <span className="text-sm font-medium">
                        {lang.progress}%
                      </span>
                    </div>
                    <Progress value={lang.progress} className="h-2" />
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">Tests Completed</p>
                      <p className="font-medium">
                        {lang.testsCompleted}/{lang.totalTests}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Activity</p>
                      <p className="font-medium">{lang.lastActivity}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="statistics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-dashed rounded-lg">
                <div className="text-center">
                  <LineChart className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">
                    Learning Activity Chart
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visualize your learning patterns over time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressOverview;
