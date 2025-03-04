import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Globe,
  BookOpen,
  Award,
  Settings,
  Bell,
} from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState("profile");

  // Get user data from localStorage
  const userString = localStorage.getItem("user");
  const user = userString
    ? JSON.parse(userString)
    : { name: "User", email: "user@example.com" };

  // Combine with mock data
  const userData = {
    name: user.name,
    email: user.email,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`,
    joinDate: "January 15, 2023",
    streak: 42,
    totalPoints: 3750,
    level: 12,
    languages: [
      { name: "English", progress: 78, level: 4 },
      { name: "Kazakh", progress: 45, level: 2 },
      { name: "Turkish", progress: 23, level: 1 },
    ],
    achievements: [
      {
        id: 1,
        title: "First Steps",
        description: "Complete your first lesson",
        date: "Jan 16, 2023",
        icon: "🏆",
      },
      {
        id: 2,
        title: "Week Warrior",
        description: "Complete a 7-day streak",
        date: "Jan 22, 2023",
        icon: "🔥",
      },
      {
        id: 3,
        title: "Vocabulary Master",
        description: "Learn 100 words",
        date: "Feb 5, 2023",
        icon: "📚",
      },
      {
        id: 4,
        title: "Grammar Guru",
        description: "Complete all grammar lessons in Level 1",
        date: "Mar 10, 2023",
        icon: "🎓",
      },
    ],
  };

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  const handleSaveProfile = () => {
    // In a real app, this would save the profile data
    console.log("Saving profile...");
  };

  const handleChangePassword = () => {
    // In a real app, this would change the password
    console.log("Changing password...");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-3 mb-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={handleBackClick}
          >
            <ArrowLeft size={16} />
            {t("Back to Dashboard")}
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />
            {t("Back to Home")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left sidebar with user info */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                  <p className="text-muted-foreground text-sm mb-2">
                    {userData.email}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-orange-100 text-orange-800 hover:bg-orange-100"
                    >
                      {t("Level")} {userData.level}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                    >
                      {userData.totalPoints} {t("Points")}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span className="font-medium text-orange-500">
                      {userData.streak} {t("day streak")}
                    </span>
                    <span>
                      • {t("Joined")} {userData.joinDate}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {t("Overall Progress")}
                      </span>
                      <span className="text-sm">
                        {Math.round(
                          (userData.languages.reduce(
                            (acc, lang) => acc + lang.progress,
                            0,
                          ) /
                            (userData.languages.length * 100)) *
                            100,
                        )}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        (userData.languages.reduce(
                          (acc, lang) => acc + lang.progress,
                          0,
                        ) /
                          (userData.languages.length * 100)) *
                        100
                      }
                      className="h-2"
                    />
                  </div>

                  {userData.languages.map((lang) => (
                    <div key={lang.name} className="flex flex-col space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-sm">{lang.progress}%</span>
                      </div>
                      <Progress value={lang.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">
                        {t("Level")} {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content area */}
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>{t("Account Settings")}</CardTitle>
                <CardDescription>
                  {t("Manage your account settings and preferences")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger
                      value="profile"
                      className="flex items-center gap-2"
                    >
                      <User size={16} />
                      {t("Profile")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="security"
                      className="flex items-center gap-2"
                    >
                      <Lock size={16} />
                      {t("Security")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="preferences"
                      className="flex items-center gap-2"
                    >
                      <Settings size={16} />
                      {t("Preferences")}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile" className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            {t("Full Name")}
                          </label>
                          <Input defaultValue={userData.name} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            {t("Email Address")}
                          </label>
                          <Input defaultValue={userData.email} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          {t("Bio")}
                        </label>
                        <Textarea
                          placeholder={t(
                            "Tell us about yourself and your language learning goals",
                          )}
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="pt-4">
                        <Button onClick={handleSaveProfile}>
                          {t("Save Changes")}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            {t("Current Password")}
                          </label>
                          <Input type="password" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            {t("New Password")}
                          </label>
                          <Input type="password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            {t("Confirm New Password")}
                          </label>
                          <Input type="password" />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button onClick={handleChangePassword}>
                          {t("Change Password")}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          {t("Interface Language")}
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {["English", "Russian", "Kazakh", "Turkish"].map(
                            (lang) => (
                              <Button
                                key={lang}
                                variant={
                                  language === lang ? "default" : "outline"
                                }
                                className="flex items-center gap-2"
                                onClick={() => setLanguage(lang as any)}
                              >
                                <Globe size={16} />
                                {lang}
                              </Button>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          {t("Learning Preferences")}
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <Button variant="outline" className="justify-start">
                            <BookOpen className="mr-2 h-4 w-4" />
                            {t("Daily Goal")}: 20 {t("minutes")}
                          </Button>
                          <Button variant="outline" className="justify-start">
                            <Bell className="mr-2 h-4 w-4" />
                            {t("Reminder")}: 8:00 PM
                          </Button>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button onClick={() => alert(t("Preferences saved!"))}>
                          {t("Save Preferences")}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  {t("Achievements")}
                </CardTitle>
                <CardDescription>
                  {t("Your learning milestones and accomplishments")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-start p-4 border rounded-lg"
                    >
                      <div className="text-2xl mr-3">{achievement.icon}</div>
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {t("View All Achievements")}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
