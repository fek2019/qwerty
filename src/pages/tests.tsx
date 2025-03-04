import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TestsPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={handleBackClick}
        >
          <ArrowLeft size={16} />
          {t("Back to Home")}
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("Language Tests")}</h1>
          <p className="text-gray-600">
            {t("Select a language to view available tests")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            onClick={() => navigate("/learning-path/english/1")}
          >
            <h2 className="text-xl font-bold mb-2">{t("English Tests")}</h2>
            <p className="text-gray-600 mb-4">
              {t(
                "Complete set of English language tests from beginner to advanced",
              )}
            </p>
            <Button className="w-full">{t("View Tests")}</Button>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            onClick={() => navigate("/learning-path/kazakh/1")}
          >
            <h2 className="text-xl font-bold mb-2">{t("Kazakh Tests")}</h2>
            <p className="text-gray-600 mb-4">
              {t(
                "Complete set of Kazakh language tests from beginner to advanced",
              )}
            </p>
            <Button className="w-full">{t("View Tests")}</Button>
          </div>

          <div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            onClick={() => navigate("/learning-path/turkish/1")}
          >
            <h2 className="text-xl font-bold mb-2">{t("Turkish Tests")}</h2>
            <p className="text-gray-600 mb-4">
              {t(
                "Complete set of Turkish language tests from beginner to advanced",
              )}
            </p>
            <Button className="w-full">{t("View Tests")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
