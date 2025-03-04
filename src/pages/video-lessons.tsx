import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";

const VideoLessonsPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBackClick = () => {
    navigate("/");
  };

  const videoLessons = [
    {
      id: "1",
      title: "Basic English Greetings",
      thumbnail:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "10:25",
      language: "English",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/LZhNYbTqUts",
    },
    {
      id: "2",
      title: "Kazakh Alphabet Pronunciation",
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "15:10",
      language: "Kazakh",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/elCuBHUYBxs",
    },
    {
      id: "3",
      title: "Turkish Common Phrases",
      thumbnail:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "12:45",
      language: "Turkish",
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/rpWm-WomVgI",
    },
    {
      id: "4",
      title: "English Present Tense",
      thumbnail:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "18:30",
      language: "English",
      level: "Elementary",
      videoUrl: "https://www.youtube.com/embed/L9AWrJnhsRI",
    },
    {
      id: "5",
      title: "Kazakh Conversation Practice",
      thumbnail:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "20:15",
      language: "Kazakh",
      level: "Elementary",
      videoUrl: "https://www.youtube.com/embed/Ry8msyWnZQI",
    },
    {
      id: "6",
      title: "Turkish Grammar Basics",
      thumbnail:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "16:55",
      language: "Turkish",
      level: "Elementary",
      videoUrl: "https://www.youtube.com/embed/1d_6-IjQJF8",
    },
  ];

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
          <h1 className="text-3xl font-bold mb-2">{t("Video Lessons")}</h1>
          <p className="text-gray-600">
            {t("Watch instructional videos to improve your language skills")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoLessons.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full h-12 w-12"
                    onClick={() => window.open(video.videoUrl, "_blank")}
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {video.language}
                  </span>
                  <span className="text-sm text-gray-500">{video.level}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{t(video.title)}</h3>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => window.open(video.videoUrl, "_blank")}
                >
                  {t("Watch Lesson")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLessonsPage;
