import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import LanguageSelectionGrid from "./home/LanguageSelectionGrid";
import AuthForms from "./auth/AuthForms";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [showAuthForms, setShowAuthForms] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register">("login");

  useEffect(() => {
    // Set default language to Kazakh
    if (language !== "Kazakh") {
      setLanguage("Kazakh");
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any);
  };

  const handleSelectLanguage = (language: string) => {
    navigate(`/learning-path/${language.toLowerCase()}`);
  };

  const handleShowLogin = () => {
    setAuthTab("login");
    setShowAuthForms(true);
  };

  const handleShowRegister = () => {
    setAuthTab("register");
    setShowAuthForms(true);
  };

  const handleCloseAuth = () => {
    setShowAuthForms(false);
  };

  const handleLoginSubmit = (data: any) => {
    // Store user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "User",
        email: data.email,
        isLoggedIn: true,
      }),
    );
    navigate("/dashboard");
  };

  const handleRegisterSubmit = (data: any) => {
    // Store user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        email: data.email,
        isLoggedIn: true,
      }),
    );
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
        onShowLogin={handleShowLogin}
        onShowRegister={handleShowRegister}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t("Learn Languages the Smart Way")}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t(
                  "Master English, Kazakh, and Turkish with our interactive lessons, personalized learning paths, and adaptive testing system.",
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/learning-path/english")}
                  className="px-8 py-3"
                >
                  {t("Start Learning")}
                </Button>
                <Button
                  onClick={handleShowRegister}
                  variant="outline"
                  className="px-8 py-3"
                >
                  {t("Create Account")}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Language Selection Section */}
        <section className="py-16 px-4">
          <LanguageSelectionGrid onSelectLanguage={handleSelectLanguage} />
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                {t("Why Choose Our Platform")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto"></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Structured Learning Paths")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "Follow a carefully designed curriculum with 6 difficulty levels, each containing 7 interactive tests to build your skills progressively.",
                  )}
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Progress Tracking")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "Monitor your learning journey with detailed analytics, test scores, and personalized recommendations to improve your weak areas.",
                  )}
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("Multilingual Interface")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    "Use the platform in your preferred language with support for English, Kazakh, and Turkish interfaces.",
                  )}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer removed as requested */}

      {/* Auth Modal */}
      {showAuthForms && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <button
              onClick={handleCloseAuth}
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <AuthForms
              defaultTab={authTab}
              onLogin={handleLoginSubmit}
              onRegister={handleRegisterSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
