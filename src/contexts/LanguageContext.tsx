import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "English" | "Kazakh" | "Turkish";

type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

const translations: Translations = {
  "Preferences saved!": {
    English: "Preferences saved!",
    Kazakh: "Параметрлер сақталды!",
    Turkish: "Tercihler kaydedildi!",
  },
  "Across all languages": {
    English: "Across all languages",
    Kazakh: "Барлық тілдер бойынша",
    Turkish: "Tüm dillerde",
  },
  "Test completion rate": {
    English: "Test completion rate",
    Kazakh: "Тест аяқтау жылдамдығы",
    Turkish: "Test tamamlama oranı",
  },
  of: {
    English: "of",
    Kazakh: "ішінен",
    Turkish: "arasından",
  },
  "tests completed": {
    English: "tests completed",
    Kazakh: "тест аяқталды",
    Turkish: "test tamamlandı",
  },
  "Learning Progress": {
    English: "Learning Progress",
    Kazakh: "Оқу прогресі",
    Turkish: "Öğrenme İlerlemesi",
  },
  "Track your progress across all languages": {
    English: "Track your progress across all languages",
    Kazakh: "Барлық тілдер бойынша прогресіңізді қадағалаңыз",
    Turkish: "Tüm dillerdeki ilerlemenizi takip edin",
  },
  Overview: {
    English: "Overview",
    Kazakh: "Шолу",
    Turkish: "Genel Bakış",
  },
  Languages: {
    English: "Languages",
    Kazakh: "Тілдер",
    Turkish: "Diller",
  },
  Statistics: {
    English: "Statistics",
    Kazakh: "Статистика",
    Turkish: "İstatistikler",
  },
  "Total Languages": {
    English: "Total Languages",
    Kazakh: "Барлық тілдер",
    Turkish: "Toplam Diller",
  },
  "Lessons Completed": {
    English: "Lessons Completed",
    Kazakh: "Аяқталған сабақтар",
    Turkish: "Tamamlanan Dersler",
  },
  "Tests Completed": {
    English: "Tests Completed",
    Kazakh: "Аяқталған тесттер",
    Turkish: "Tamamlanan Testler",
  },
  "Recent Progress": {
    English: "Recent Progress",
    Kazakh: "Соңғы прогресс",
    Turkish: "Son İlerleme",
  },
  "Start Learning": {
    English: "Start Learning",
    Kazakh: "Оқуды бастау",
    Turkish: "Öğrenmeye Başla",
  },
  "Create Account": {
    English: "Create Account",
    Kazakh: "Тіркелгі жасау",
    Turkish: "Hesap Oluştur",
  },
  Cancel: {
    English: "Cancel",
    Kazakh: "Болдырмау",
    Turkish: "İptal",
  },
  "Learn Languages the Smart Way": {
    English: "Learn Languages the Smart Way",
    Kazakh: "Тілдерді ақылды түрде үйреніңіз",
    Turkish: "Akıllı Yolla Dil Öğrenin",
  },
  "Master English, Kazakh, and Turkish with our interactive lessons, personalized learning paths, and adaptive testing system.":
    {
      English:
        "Master English, Kazakh, and Turkish with our interactive lessons, personalized learning paths, and adaptive testing system.",
      Kazakh:
        "Интерактивті сабақтар, жеке оқу жолдары және бейімделген тестілеу жүйесі арқылы ағылшын, қазақ және түрік тілдерін меңгеріңіз.",
      Turkish:
        "İnteraktif derslerimiz, kişiselleştirilmiş öğrenme yollarımız ve uyarlanabilir test sistemimizle İngilizce, Kazakça ve Türkçe'yi öğrenin.",
    },
  "Choose Your Language": {
    English: "Choose Your Language",
    Kazakh: "Тілді таңдаңыз",
    Turkish: "Dilinizi Seçin",
  },
  "Select a language to begin your learning journey. Our interactive lessons will help you master vocabulary, grammar, and conversation skills.":
    {
      English:
        "Select a language to begin your learning journey. Our interactive lessons will help you master vocabulary, grammar, and conversation skills.",
      Kazakh:
        "Оқу жолыңызды бастау үшін тілді таңдаңыз. Біздің интерактивті сабақтарымыз сөздік қорды, грамматиканы және сөйлесу дағдыларын меңгеруге көмектеседі.",
      Turkish:
        "Öğrenme yolculuğunuza başlamak için bir dil seçin. İnteraktif derslerimiz kelime bilgisi, dilbilgisi ve konuşma becerilerini geliştirmenize yardımcı olacaktır.",
    },
  "Why Choose Our Platform": {
    English: "Why Choose Our Platform",
    Kazakh: "Біздің платформаны неге таңдау керек",
    Turkish: "Platformumuzu Neden Seçmelisiniz",
  },
  "Structured Learning Paths": {
    English: "Structured Learning Paths",
    Kazakh: "Құрылымдалған оқу жолдары",
    Turkish: "Yapılandırılmış Öğrenme Yolları",
  },
  "Follow a carefully designed curriculum with 6 difficulty levels, each containing 7 interactive tests to build your skills progressively.":
    {
      English:
        "Follow a carefully designed curriculum with 6 difficulty levels, each containing 7 interactive tests to build your skills progressively.",
      Kazakh:
        "Дағдыларыңызды біртіндеп дамыту үшін әрқайсысында 7 интерактивті тест бар 6 қиындық деңгейі бар мұқият жасалған оқу бағдарламасын орындаңыз.",
      Turkish:
        "Becerilerinizi aşamalı olarak geliştirmek için her biri 7 interaktif test içeren 6 zorluk seviyesine sahip özenle tasarlanmış bir müfredatı takip edin.",
    },
  "Progress Tracking": {
    English: "Progress Tracking",
    Kazakh: "Прогресті бақылау",
    Turkish: "İlerleme Takibi",
  },
  "Monitor your learning journey with detailed analytics, test scores, and personalized recommendations to improve your weak areas.":
    {
      English:
        "Monitor your learning journey with detailed analytics, test scores, and personalized recommendations to improve your weak areas.",
      Kazakh:
        "Әлсіз жақтарыңызды жақсарту үшін егжей-тегжейлі аналитика, тест нәтижелері және жеке ұсыныстар арқылы оқу жолыңызды бақылаңыз.",
      Turkish:
        "Zayıf yönlerinizi geliştirmek için ayrıntılı analizler, test puanları ve kişiselleştirilmiş önerilerle öğrenme yolculuğunuzu izleyin.",
    },
  "Multilingual Interface": {
    English: "Multilingual Interface",
    Kazakh: "Көптілді интерфейс",
    Turkish: "Çok Dilli Arayüz",
  },
  "Use the platform in your preferred language with support for English, Kazakh, and Turkish interfaces.":
    {
      English:
        "Use the platform in your preferred language with support for English, Kazakh, and Turkish interfaces.",
      Kazakh:
        "Ағылшын, қазақ және түрік интерфейстерін қолдайтын платформаны өзіңіз қалаған тілде пайдаланыңыз.",
      Turkish:
        "Platformu İngilizce, Kazakça ve Türkçe arayüz desteğiyle tercih ettiğiniz dilde kullanın.",
    },
  "Learn English": {
    English: "Learn English",
    Kazakh: "Ағылшын тілін үйрену",
    Turkish: "İngilizce Öğren",
  },
  "Learn Kazakh": {
    English: "Learn Kazakh",
    Kazakh: "Қазақ тілін үйрену",
    Turkish: "Kazakça Öğren",
  },
  "Learn Turkish": {
    English: "Learn Turkish",
    Kazakh: "Түрік тілін үйрену",
    Turkish: "Türkçe Öğren",
  },
  Login: {
    English: "Login",
    Kazakh: "Кіру",
    Turkish: "Giriş",
  },
  Register: {
    English: "Register",
    Kazakh: "Тіркелу",
    Turkish: "Kayıt Ol",
  },
  Dashboard: {
    English: "Dashboard",
    Kazakh: "Басқару тақтасы",
    Turkish: "Kontrol Paneli",
  },
  Tests: {
    English: "Tests",
    Kazakh: "Тесттер",
    Turkish: "Testler",
  },
  "Video Lessons": {
    English: "Video Lessons",
    Kazakh: "Бейне сабақтар",
    Turkish: "Video Dersler",
  },
  "Language Tests": {
    English: "Language Tests",
    Kazakh: "Тіл тесттері",
    Turkish: "Dil Testleri",
  },
  "Select a language to view available tests": {
    English: "Select a language to view available tests",
    Kazakh: "Қол жетімді тесттерді көру үшін тілді таңдаңыз",
    Turkish: "Mevcut testleri görüntülemek için bir dil seçin",
  },
  "English Tests": {
    English: "English Tests",
    Kazakh: "Ағылшын тілі тесттері",
    Turkish: "İngilizce Testleri",
  },
  "Kazakh Tests": {
    English: "Kazakh Tests",
    Kazakh: "Қазақ тілі тесттері",
    Turkish: "Kazakça Testleri",
  },
  "Turkish Tests": {
    English: "Turkish Tests",
    Kazakh: "Түрік тілі тесттері",
    Turkish: "Türkçe Testleri",
  },
  "Complete set of English language tests from beginner to advanced": {
    English: "Complete set of English language tests from beginner to advanced",
    Kazakh:
      "Бастапқы деңгейден жоғары деңгейге дейінгі ағылшын тілі тесттерінің толық жиынтығы",
    Turkish:
      "Başlangıçtan ileri seviyeye kadar eksiksiz İngilizce dil testleri seti",
  },
  "Complete set of Kazakh language tests from beginner to advanced": {
    English: "Complete set of Kazakh language tests from beginner to advanced",
    Kazakh:
      "Бастапқы деңгейден жоғары деңгейге дейінгі қазақ тілі тесттерінің толық жиынтығы",
    Turkish:
      "Başlangıçtan ileri seviyeye kadar eksiksiz Kazakça dil testleri seti",
  },
  "Complete set of Turkish language tests from beginner to advanced": {
    English: "Complete set of Turkish language tests from beginner to advanced",
    Kazakh:
      "Бастапқы деңгейден жоғары деңгейге дейінгі түрік тілі тесттерінің толық жиынтығы",
    Turkish:
      "Başlangıçtan ileri seviyeye kadar eksiksiz Türkçe dil testleri seti",
  },
  "View Tests": {
    English: "View Tests",
    Kazakh: "Тесттерді қарау",
    Turkish: "Testleri Görüntüle",
  },
  "Watch instructional videos to improve your language skills": {
    English: "Watch instructional videos to improve your language skills",
    Kazakh: "Тілдік дағдыларыңызды жақсарту үшін оқыту бейнелерін қараңыз",
    Turkish: "Dil becerilerinizi geliştirmek için eğitim videolarını izleyin",
  },
  "Watch Lesson": {
    English: "Watch Lesson",
    Kazakh: "Сабақты қарау",
    Turkish: "Dersi İzle",
  },
  "Back to Home": {
    English: "Back to Home",
    Kazakh: "Басты бетке оралу",
    Turkish: "Ana Sayfaya Dön",
  },
  "Back to Levels": {
    English: "Back to Levels",
    Kazakh: "Деңгейлерге оралу",
    Turkish: "Seviyelere Dön",
  },
  "Back to Dashboard": {
    English: "Back to Dashboard",
    Kazakh: "Басқару тақтасына оралу",
    Turkish: "Kontrol Paneline Dön",
  },
  Profile: {
    English: "Profile",
    Kazakh: "Профиль",
    Turkish: "Profil",
  },
  "Account Settings": {
    English: "Account Settings",
    Kazakh: "Аккаунт параметрлері",
    Turkish: "Hesap Ayarları",
  },
  "Manage your account settings and preferences": {
    English: "Manage your account settings and preferences",
    Kazakh: "Аккаунт параметрлері мен қалауларыңызды басқарыңыз",
    Turkish: "Hesap ayarlarınızı ve tercihlerinizi yönetin",
  },
  Security: {
    English: "Security",
    Kazakh: "Қауіпсіздік",
    Turkish: "Güvenlik",
  },
  Preferences: {
    English: "Preferences",
    Kazakh: "Қалаулар",
    Turkish: "Tercihler",
  },
  "Full Name": {
    English: "Full Name",
    Kazakh: "Толық аты",
    Turkish: "Tam Ad",
  },
  "Email Address": {
    English: "Email Address",
    Kazakh: "Электрондық пошта",
    Turkish: "E-posta Adresi",
  },
  Bio: {
    English: "Bio",
    Kazakh: "Өзіңіз туралы",
    Turkish: "Hakkında",
  },
  "Tell us about yourself and your language learning goals": {
    English: "Tell us about yourself and your language learning goals",
    Kazakh: "Өзіңіз және тіл үйрену мақсаттарыңыз туралы айтыңыз",
    Turkish: "Kendiniz ve dil öğrenme hedefleriniz hakkında bilgi verin",
  },
  "Save Changes": {
    English: "Save Changes",
    Kazakh: "Өзгерістерді сақтау",
    Turkish: "Değişiklikleri Kaydet",
  },
  "Current Password": {
    English: "Current Password",
    Kazakh: "Ағымдағы құпия сөз",
    Turkish: "Mevcut Şifre",
  },
  "New Password": {
    English: "New Password",
    Kazakh: "Жаңа құпия сөз",
    Turkish: "Yeni Şifre",
  },
  "Confirm New Password": {
    English: "Confirm New Password",
    Kazakh: "Жаңа құпия сөзді растаңыз",
    Turkish: "Yeni Şifreyi Onayla",
  },
  "Change Password": {
    English: "Change Password",
    Kazakh: "Құпия сөзді өзгерту",
    Turkish: "Şifreyi Değiştir",
  },
  "Interface Language": {
    English: "Interface Language",
    Kazakh: "Интерфейс тілі",
    Turkish: "Arayüz Dili",
  },
  "Learning Preferences": {
    English: "Learning Preferences",
    Kazakh: "Оқу қалаулары",
    Turkish: "Öğrenme Tercihleri",
  },
  "Daily Goal": {
    English: "Daily Goal",
    Kazakh: "Күнделікті мақсат",
    Turkish: "Günlük Hedef",
  },
  minutes: {
    English: "minutes",
    Kazakh: "минут",
    Turkish: "dakika",
  },
  Reminder: {
    English: "Reminder",
    Kazakh: "Еске салу",
    Turkish: "Hatırlatıcı",
  },
  "Save Preferences": {
    English: "Save Preferences",
    Kazakh: "Қалауларды сақтау",
    Turkish: "Tercihleri Kaydet",
  },
  Achievements: {
    English: "Achievements",
    Kazakh: "Жетістіктер",
    Turkish: "Başarılar",
  },
  "Your learning milestones and accomplishments": {
    English: "Your learning milestones and accomplishments",
    Kazakh: "Сіздің оқу кезеңдері мен жетістіктеріңіз",
    Turkish: "Öğrenme dönüm noktalarınız ve başarılarınız",
  },
  "View All Achievements": {
    English: "View All Achievements",
    Kazakh: "Барлық жетістіктерді көру",
    Turkish: "Tüm Başarıları Görüntüle",
  },
  Level: {
    English: "Level",
    Kazakh: "Деңгей",
    Turkish: "Seviye",
  },
  Points: {
    English: "Points",
    Kazakh: "Ұпайлар",
    Turkish: "Puan",
  },
  "day streak": {
    English: "day streak",
    Kazakh: "күн қатарынан",
    Turkish: "günlük seri",
  },
  Joined: {
    English: "Joined",
    Kazakh: "Қосылды",
    Turkish: "Katıldı",
  },
  "Overall Progress": {
    English: "Overall Progress",
    Kazakh: "Жалпы прогресс",
    Turkish: "Genel İlerleme",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("English");

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to the key itself if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
