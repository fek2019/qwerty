import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  currentLanguage?: string;
  onLanguageChange?: (language: string) => void;
  onShowLogin?: () => void;
  onShowRegister?: () => void;
}

const Navbar = ({
  currentLanguage = "English",
  onLanguageChange = () => {},
  onShowLogin = () => {},
  onShowRegister = () => {},
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const languages = [
    { name: "English", code: "en" },
    { name: "Kazakh", code: "kk" },
    { name: "Turkish", code: "tr" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">LinguaLearn</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/learning-path/english"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Start Learning
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Begin your language journey with structured lessons
                            and interactive tests.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tests"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {t("Tests")}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Assess your language skills with our comprehensive
                            tests.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/video-lessons"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {t("Video Lessons")}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Watch instructional videos to improve pronunciation
                            and comprehension.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/dashboard"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {t("Dashboard")}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Track your progress and view personalized
                            recommendations.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/dashboard"
                  onClick={(e) => {
                    // Check if user is logged in
                    const userString = localStorage.getItem("user");
                    const user = userString ? JSON.parse(userString) : null;
                    if (!user || !user.isLoggedIn) {
                      e.preventDefault();
                      onShowLogin();
                    }
                  }}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("Dashboard")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/learning-path/english">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    English
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/learning-path/kazakh">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kazakh
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/learning-path/turkish">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Turkish
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {currentLanguage}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => onLanguageChange(language.name)}
                  className="cursor-pointer"
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={onShowLogin}>
              {t("Login")}
            </Button>
            <Button onClick={onShowRegister}>{t("Register")}</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/learning-path/english"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Start Learning
              </Link>
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={(e) => {
                  // Check if user is logged in
                  const userString = localStorage.getItem("user");
                  const user = userString ? JSON.parse(userString) : null;
                  if (!user || !user.isLoggedIn) {
                    e.preventDefault();
                    onShowLogin();
                  } else {
                    toggleMenu();
                  }
                }}
              >
                Dashboard
              </Link>
              <Link
                to="/learning-path/english"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                English
              </Link>
              <Link
                to="/learning-path/kazakh"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Kazakh
              </Link>
              <Link
                to="/learning-path/turkish"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Turkish
              </Link>
              <Link
                to="/video-lessons"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Video Lessons
              </Link>

              <div className="pt-2 border-t border-gray-200">
                <p className="px-4 py-2 text-sm font-medium text-gray-500">
                  Interface Language
                </p>
                <div className="grid grid-cols-2 gap-2 px-4 py-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        onLanguageChange(language.name);
                        toggleMenu();
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md ${currentLanguage === language.name ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2">
                <Button
                  className="w-full"
                  onClick={() => {
                    onShowLogin();
                    toggleMenu();
                  }}
                >
                  {t("Login")}
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    onShowRegister();
                    toggleMenu();
                  }}
                >
                  {t("Register")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
