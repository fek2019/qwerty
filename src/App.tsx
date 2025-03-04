import { Suspense, lazy, ReactNode } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./pages/dashboard";
import LanguageLearningPath from "./pages/learning-path/[language]/index";
import LevelTestsPage from "./pages/learning-path/[language]/[level]/index";
import TestPage from "./pages/learning-path/[language]/[level]/[testId]";
import ProfilePage from "./pages/profile";
import routes from "tempo-routes";

const TestsPage = lazy(() => import("./pages/tests"));
const VideoLessonsPage = lazy(() => import("./pages/video-lessons"));

// Protected route component
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  // Check if user is logged in
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const isAuthenticated = user && user.isLoggedIn;

  if (!isAuthenticated) {
    // Redirect to home page if not authenticated
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/video-lessons" element={<VideoLessonsPage />} />
        <Route
          path="/learning-path/:language"
          element={<LanguageLearningPath />}
        />
        <Route
          path="/learning-path/:language/:level"
          element={<LevelTestsPage />}
        />
        <Route
          path="/learning-path/:language/:level/:testId"
          element={<TestPage />}
        />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
