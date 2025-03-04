// Level 3 tests for all languages

import { TestItem } from "./testData";

// English Level 3 Tests
export const englishLevel3Tests: TestItem[] = [
  {
    id: "test-1-level3",
    title: "Advanced Vocabulary",
    description: "Expand your English vocabulary with more advanced terms.",
    estimatedDuration: 25,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the meaning of 'ubiquitous'?",
        options: ["Rare", "Everywhere", "Unique", "Unusual"],
        correctAnswer: "Everywhere",
        explanation:
          "'Ubiquitous' means present, appearing, or found everywhere.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Select all words related to economics:",
        options: ["Inflation", "Democracy", "Recession", "Judiciary"],
        correctAnswer: ["Inflation", "Recession"],
        explanation: "'Inflation' and 'Recession' are economic terms.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Which word is a synonym for 'benevolent'?",
        options: ["Cruel", "Kind", "Angry", "Jealous"],
        correctAnswer: "Kind",
        explanation: "'Benevolent' means well-meaning and kindly.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What does 'ephemeral' mean?",
        options: [
          "Lasting for a very short time",
          "Extremely important",
          "Highly dangerous",
          "Easily broken",
        ],
        correctAnswer: "Lasting for a very short time",
        explanation: "'Ephemeral' means lasting for a very short time.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Select all words that describe personality traits:",
        options: ["Diligent", "Mountain", "Gregarious", "Telephone"],
        correctAnswer: ["Diligent", "Gregarious"],
        explanation: "'Diligent' and 'Gregarious' are personality traits.",
      },
    ],
  },
  {
    id: "test-2-level3",
    title: "Conditional Tenses",
    description: "Master conditional tenses in English.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Which sentence uses the first conditional correctly?",
        options: [
          "If it rains, I would stay home.",
          "If it rains, I will stay home.",
          "If it rained, I will stay home.",
          "If it would rain, I will stay home.",
        ],
        correctAnswer: "If it rains, I will stay home.",
        explanation:
          "The first conditional uses 'if + present simple, will + infinitive'.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Which sentence uses the second conditional correctly?",
        options: [
          "If I won the lottery, I will buy a house.",
          "If I win the lottery, I would buy a house.",
          "If I won the lottery, I would buy a house.",
          "If I would win the lottery, I would buy a house.",
        ],
        correctAnswer: "If I won the lottery, I would buy a house.",
        explanation:
          "The second conditional uses 'if + past simple, would + infinitive'.",
      },
      {
        id: "q3",
        type: "checkbox",
        question: "Select all sentences that use conditionals correctly:",
        options: [
          "If I had studied harder, I would have passed the exam.",
          "If I study harder, I would pass the exam.",
          "If I had more time, I would help you.",
          "If I will have time, I would help you.",
        ],
        correctAnswer: [
          "If I had studied harder, I would have passed the exam.",
          "If I had more time, I would help you.",
        ],
        explanation:
          "The first is third conditional, the third is second conditional.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Complete the sentence: 'If it ___ sunny tomorrow, we ___ to the beach.'",
        options: [
          "is / will go",
          "will be / go",
          "is / would go",
          "would be / will go",
        ],
        correctAnswer: "is / will go",
        explanation:
          "This is a first conditional sentence: 'if + present simple, will + infinitive'.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Which type of conditional is used in: 'If I had known about the party, I would have come'?",
        options: [
          "Zero conditional",
          "First conditional",
          "Second conditional",
          "Third conditional",
        ],
        correctAnswer: "Third conditional",
        explanation:
          "The third conditional uses 'if + past perfect, would have + past participle'.",
      },
    ],
  },
  {
    id: "test-3-level3",
    title: "Advanced Reading Comprehension",
    description: "Improve your reading skills with more complex texts.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Read the passage: 'The proliferation of digital technologies has transformed how we communicate, work, and even think. While these advancements offer unprecedented convenience, they also raise concerns about privacy, attention spans, and social interaction.' What is the main idea of this passage?",
        options: [
          "Digital technologies are harmful to society.",
          "Digital technologies have both benefits and drawbacks.",
          "People should use digital technologies less.",
          "Digital technologies improve communication.",
        ],
        correctAnswer: "Digital technologies have both benefits and drawbacks.",
        explanation:
          "The passage discusses both the convenience of digital technologies and the concerns they raise.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Read the passage: 'Despite its reputation as a modern phenomenon, globalization has historical roots dating back centuries. The Silk Road, for instance, facilitated trade and cultural exchange between East and West long before the term 'globalization' was coined.' According to the passage, what is true about globalization?",
        options: [
          "It is entirely a modern phenomenon.",
          "It began with the Silk Road.",
          "It has existed in some form for centuries.",
          "It was invented in the East.",
        ],
        correctAnswer: "It has existed in some form for centuries.",
        explanation:
          "The passage states that globalization has historical roots dating back centuries.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Read the passage: 'The author's use of vivid imagery transports readers to the desolate landscape, where the protagonist's internal struggle mirrors the harsh external environment.' What literary device is described here?",
        options: ["Foreshadowing", "Symbolism", "Irony", "Alliteration"],
        correctAnswer: "Symbolism",
        explanation:
          "The passage describes how the external environment symbolizes the protagonist's internal struggle.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Read the passage: 'While some economists argue that inflation is a necessary evil in growing economies, others contend that it disproportionately affects those with fixed incomes, particularly retirees and low-wage workers.' What can be inferred from this passage?",
        options: [
          "All economists agree that inflation is bad.",
          "Inflation affects everyone equally.",
          "There are differing views on the impact of inflation.",
          "Retirees benefit from inflation.",
        ],
        correctAnswer: "There are differing views on the impact of inflation.",
        explanation: "The passage presents two contrasting views on inflation.",
      },
      {
        id: "q5",
        type: "checkbox",
        question:
          "Read the passage: 'The Renaissance was characterized by a revival of interest in classical learning, an emphasis on human potential, and groundbreaking developments in art, architecture, and science. Figures like Leonardo da Vinci and Michelangelo embodied the period's ideal of the 'Renaissance man' – someone skilled in multiple disciplines.' Select all characteristics of the Renaissance mentioned in the passage:",
        options: [
          "Revival of classical learning",
          "Focus on religious authority",
          "Emphasis on human potential",
          "Rejection of scientific inquiry",
        ],
        correctAnswer: [
          "Revival of classical learning",
          "Emphasis on human potential",
        ],
        explanation:
          "The passage mentions revival of classical learning and emphasis on human potential as characteristics of the Renaissance.",
      },
    ],
  },
  {
    id: "test-4-level3",
    title: "Advanced Listening Comprehension",
    description:
      "Practice understanding complex spoken English in various contexts.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Listen to the academic lecture and answer: What is the main topic of the lecture?",
        options: [
          "Climate change solutions",
          "Renewable energy sources",
          "Environmental policy",
          "Sustainable development",
        ],
        correctAnswer: "Renewable energy sources",
        explanation:
          "The lecture primarily discusses various renewable energy sources and their potential.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Listen to the business presentation and answer: What is the company's main goal for the next fiscal year?",
        options: [
          "Increase market share",
          "Reduce operational costs",
          "Expand to international markets",
          "Develop new product lines",
        ],
        correctAnswer: "Expand to international markets",
        explanation:
          "The presenter emphasizes the company's plans for international expansion as the primary goal.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Listen to the podcast discussion about modern literature and select all the authors mentioned:",
        options: [
          "Margaret Atwood",
          "Ernest Hemingway",
          "Haruki Murakami",
          "Jane Austen",
        ],
        correctAnswer: ["Margaret Atwood", "Haruki Murakami"],
        explanation:
          "Only Margaret Atwood and Haruki Murakami were mentioned as contemporary authors in the discussion.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Listen to the medical interview and answer: What treatment does the doctor recommend for the patient?",
        options: [
          "Surgery",
          "Physical therapy",
          "Medication and rest",
          "Alternative medicine",
        ],
        correctAnswer: "Physical therapy",
        explanation:
          "The doctor recommends a course of physical therapy as the primary treatment for the patient's condition.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Listen to the news report and answer: What is the main cause of the economic downturn according to the analyst?",
        options: [
          "Government policies",
          "International trade tensions",
          "Technological disruption",
          "Consumer spending habits",
        ],
        correctAnswer: "International trade tensions",
        explanation:
          "The economic analyst in the news report attributes the downturn primarily to international trade tensions.",
      },
    ],
  },
  {
    id: "test-5-level3",
    title: "Advanced Writing Skills",
    description:
      "Develop your English writing skills with more complex exercises.",
    estimatedDuration: 40,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "writing",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Which sentence demonstrates parallel structure?",
        options: [
          "She likes swimming, to run, and bike riding.",
          "She likes swimming, running, and biking.",
          "She likes to swim, running, and to ride bikes.",
          "She likes swimming, runs, and to ride bikes.",
        ],
        correctAnswer: "She likes swimming, running, and biking.",
        explanation:
          "This sentence maintains parallel structure by using the -ing form for all three activities.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Which transition would best connect these two sentences? 'The company invested heavily in research and development. _____, profits increased by 30% the following year.'",
        options: ["However", "Nevertheless", "Consequently", "Meanwhile"],
        correctAnswer: "Consequently",
        explanation:
          "'Consequently' shows a cause-effect relationship between the investment and the increase in profits.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Which sentence contains a dangling modifier?",
        options: [
          "Walking to the store, I saw my friend.",
          "Having finished the assignment, the TV was turned on.",
          "To improve your score, you should study more.",
          "While reading the book, she fell asleep.",
        ],
        correctAnswer: "Having finished the assignment, the TV was turned on.",
        explanation:
          "This sentence has a dangling modifier because 'Having finished the assignment' should modify a person, not 'the TV'.",
      },
      {
        id: "q4",
        type: "checkbox",
        question: "Select all sentences that use active voice:",
        options: [
          "The committee approved the proposal.",
          "The proposal was approved by the committee.",
          "The chef prepared a delicious meal.",
          "A delicious meal was prepared by the chef.",
        ],
        correctAnswer: [
          "The committee approved the proposal.",
          "The chef prepared a delicious meal.",
        ],
        explanation:
          "In active voice, the subject performs the action. 'The committee approved' and 'The chef prepared' are in active voice.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Which sentence demonstrates the most concise writing?",
        options: [
          "The reason for his absence was due to the fact that he was ill.",
          "He was absent because of the fact that he was experiencing illness.",
          "The fact that he was ill was the reason for his absence.",
          "He was absent because he was ill.",
        ],
        correctAnswer: "He was absent because he was ill.",
        explanation:
          "This sentence communicates the same information as the others but in the most concise way.",
      },
    ],
  },
  {
    id: "test-6-level3",
    title: "Idiomatic Expressions",
    description: "Learn common English idioms and their meanings.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What does the idiom 'bite the bullet' mean?",
        options: [
          "To act aggressively",
          "To face a difficult situation bravely",
          "To speak without thinking",
          "To make a mistake",
        ],
        correctAnswer: "To face a difficult situation bravely",
        explanation:
          "'Bite the bullet' means to endure a painful or difficult situation with courage.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "What does the idiom 'cost an arm and a leg' mean?",
        options: [
          "To be very expensive",
          "To require physical labor",
          "To cause injury",
          "To be worth the price",
        ],
        correctAnswer: "To be very expensive",
        explanation:
          "'Cost an arm and a leg' means something is extremely expensive.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "In which situation would you use the idiom 'under the weather'?",
        options: [
          "When it's raining",
          "When you're feeling sick",
          "When you're depressed",
          "When you're outdoors",
        ],
        correctAnswer: "When you're feeling sick",
        explanation:
          "'Under the weather' means feeling slightly ill or unwell.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What does the idiom 'hit the nail on the head' mean?",
        options: [
          "To hurt yourself",
          "To build something",
          "To be exactly right",
          "To work hard",
        ],
        correctAnswer: "To be exactly right",
        explanation:
          "'Hit the nail on the head' means to describe exactly what is causing a situation or problem.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Select all idioms that relate to time:",
        options: [
          "In the blink of an eye",
          "Spill the beans",
          "Once in a blue moon",
          "Break a leg",
        ],
        correctAnswer: ["In the blink of an eye", "Once in a blue moon"],
        explanation:
          "'In the blink of an eye' means very quickly, and 'once in a blue moon' means very rarely - both relate to time.",
      },
    ],
  },
  {
    id: "test-7-level3",
    title: "Academic English",
    description: "Develop skills for academic writing and speaking in English.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "mixed",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Which of these would be most appropriate in academic writing?",
        options: [
          "The experiment was a total disaster.",
          "The experiment yielded unexpected results.",
          "The experiment didn't work out at all.",
          "The experiment was super challenging.",
        ],
        correctAnswer: "The experiment yielded unexpected results.",
        explanation:
          "This option uses formal language appropriate for academic writing.",
      },
      {
        id: "q2",
        type: "checkbox",
        question:
          "Select all phrases that would be appropriate in an academic essay:",
        options: [
          "It can be argued that",
          "I think that",
          "Research suggests that",
          "Everybody knows that",
        ],
        correctAnswer: ["It can be argued that", "Research suggests that"],
        explanation:
          "'It can be argued that' and 'Research suggests that' are formal phrases suitable for academic writing.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Which citation style is commonly used in humanities?",
        options: ["APA", "MLA", "Chicago", "IEEE"],
        correctAnswer: "MLA",
        explanation:
          "MLA (Modern Language Association) style is commonly used in humanities disciplines.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Which of these is NOT a characteristic of academic writing?",
        options: [
          "Formal language",
          "Personal anecdotes",
          "Evidence-based arguments",
          "Precise terminology",
        ],
        correctAnswer: "Personal anecdotes",
        explanation:
          "Academic writing typically avoids personal anecdotes and focuses on objective, evidence-based content.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "What is the purpose of a literature review in academic writing?",
        options: [
          "To entertain the reader",
          "To summarize and evaluate existing research",
          "To present personal opinions",
          "To list all available sources",
        ],
        correctAnswer: "To summarize and evaluate existing research",
        explanation:
          "A literature review examines and evaluates previous research related to the topic being studied.",
      },
    ],
  },
];

// Kazakh Level 3 Tests
export const kazakhLevel3Tests: TestItem[] = [
  {
    id: "test-1-level3",
    title: "Advanced Vocabulary",
    description: "Expand your Kazakh vocabulary with more advanced terms.",
    estimatedDuration: 25,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Жаһандану' сөзінің мағынасы қандай?",
        options: ["Жаңару", "Глобализация", "Дамыту", "Өзгеру"],
        correctAnswer: "Глобализация",
        explanation: "'Жаһандану' means 'globalization' in Kazakh.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Төмендегі сөздердің қайсысы экономикаға қатысты?",
        options: ["Инфляция", "Демократия", "Рецессия", "Сот"],
        correctAnswer: ["Инфляция", "Рецессия"],
        explanation:
          "'Инфляция' (inflation) and 'Рецессия' (recession) are economic terms.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "'Қайырымды' сөзінің синонимі қандай?",
        options: ["Қатал", "Мейірімді", "Ашулы", "Қызғаншақ"],
        correctAnswer: "Мейірімді",
        explanation:
          "'Мейірімді' is a synonym for 'қайырымды', both meaning 'kind' or 'benevolent'.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Өткінші' сөзінің мағынасы қандай?",
        options: [
          "Өте қысқа уақытқа созылатын",
          "Өте маңызды",
          "Өте қауіпті",
          "Оңай сынатын",
        ],
        correctAnswer: "Өте қысқа уақытқа созылатын",
        explanation:
          "'Өткінші' means 'ephemeral' or 'lasting for a very short time'.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Төмендегі сөздердің қайсысы мінез-құлықты сипаттайды?",
        options: ["Еңбекқор", "Тау", "Көпшіл", "Телефон"],
        correctAnswer: ["Еңбекқор", "Көпшіл"],
        explanation:
          "'Еңбекқор' (diligent) and 'Көпшіл' (sociable) are personality traits.",
      },
    ],
  },
  {
    id: "test-2-level3",
    title: "Conditional Sentences in Kazakh",
    description: "Master conditional sentences in Kazakh language.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Қай сөйлем шартты райда дұрыс құрылған?",
        options: [
          "Егер жаңбыр жауса, мен үйде қалар едім.",
          "Егер жаңбыр жауса, мен үйде қаламын.",
          "Егер жаңбыр жауады, мен үйде қаламын.",
          "Егер жаңбыр жауар еді, мен үйде қаламын.",
        ],
        correctAnswer: "Егер жаңбыр жауса, мен үйде қаламын.",
        explanation:
          "This sentence correctly uses the conditional form in Kazakh.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Қай сөйлем екінші түрдегі шартты райда дұрыс құрылған?",
        options: [
          "Егер мен лотереядан ұтсам, үй сатып аламын.",
          "Егер мен лотереядан ұтсам, үй сатып алар едім.",
          "Егер мен лотереядан ұтқан болсам, үй сатып алар едім.",
          "Егер мен лотереядан ұтар едім, үй сатып алар едім.",
        ],
        correctAnswer: "Егер мен лотереядан ұтқан болсам, үй сатып алар едім.",
        explanation:
          "This sentence correctly uses the second type of conditional in Kazakh.",
      },
      {
        id: "q3",
        type: "checkbox",
        question: "Төмендегі сөйлемдердің қайсысы шартты райда дұрыс құрылған?",
        options: [
          "Егер мен көбірек оқыған болсам, емтиханды тапсырар едім.",
          "Егер мен көбірек оқысам, емтиханды тапсырар едім.",
          "Егер менің көбірек уақытым болса, мен саған көмектесер едім.",
          "Егер менің уақытым болады, мен саған көмектесер едім.",
        ],
        correctAnswer: [
          "Егер мен көбірек оқыған болсам, емтиханды тапсырар едім.",
          "Егер менің көбірек уақытым болса, мен саған көмектесер едім.",
        ],
        explanation:
          "These sentences correctly use conditional forms in Kazakh.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Сөйлемді толықтырыңыз: 'Егер ертең күн ___, біз теңізге ___.''",
        options: [
          "ашық болса / барамыз",
          "ашық болады / барамыз",
          "ашық болса / барар едік",
          "ашық болар еді / барамыз",
        ],
        correctAnswer: "ашық болса / барамыз",
        explanation:
          "This is the correct form for a first conditional sentence in Kazakh.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "'Егер мен кеше білген болсам, мен келер едім' сөйлемінде қандай шартты рай қолданылған?",
        options: [
          "Нөлдік шартты рай",
          "Бірінші шартты рай",
          "Екінші шартты рай",
          "Үшінші шартты рай",
        ],
        correctAnswer: "Үшінші шартты рай",
        explanation: "This sentence uses the third conditional form in Kazakh.",
      },
    ],
  },
  {
    id: "test-3-level3",
    title: "Advanced Reading in Kazakh",
    description: "Improve your Kazakh reading skills with more complex texts.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Сандық технологиялардың таралуы біздің қарым-қатынас, жұмыс және тіпті ойлау тәсілімізді өзгертті. Бұл жетістіктер бұрын-соңды болмаған ыңғайлылықты ұсынғанымен, олар жеке өмір, назар аудару және әлеуметтік өзара әрекеттесу туралы алаңдаушылық тудырады.' Бұл мәтіннің негізгі идеясы қандай?",
        options: [
          "Сандық технологиялар қоғамға зиянды.",
          "Сандық технологиялардың артықшылықтары да, кемшіліктері де бар.",
          "Адамдар сандық технологияларды аз пайдалануы керек.",
          "Сандық технологиялар байланысты жақсартады.",
        ],
        correctAnswer:
          "Сандық технологиялардың артықшылықтары да, кемшіліктері де бар.",
        explanation:
          "The passage discusses both the benefits and drawbacks of digital technologies.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Жаһандану қазіргі құбылыс ретіндегі беделіне қарамастан, оның тарихи тамыры ғасырлар бойы созылады. Мысалы, Жібек жолы 'жаһандану' термині пайда болғанға дейін-ақ Шығыс пен Батыс арасындағы сауда мен мәдени алмасуға ықпал етті.' Мәтінге сәйкес, жаһандану туралы не дұрыс?",
        options: [
          "Бұл толығымен қазіргі заманғы құбылыс.",
          "Ол Жібек жолынан басталды.",
          "Ол ғасырлар бойы белгілі бір формада болған.",
          "Ол Шығыста ойлап табылды.",
        ],
        correctAnswer: "Ол ғасырлар бойы белгілі бір формада болған.",
        explanation:
          "The passage states that globalization has historical roots dating back centuries.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Автордың жарқын бейнелерді қолдануы оқырмандарды жапан далаға апарады, онда кейіпкердің ішкі күресі қатал сыртқы ортаны көрсетеді.' Мұнда қандай әдеби тәсіл сипатталған?",
        options: ["Алдын-ала ескерту", "Символизм", "Ирония", "Аллитерация"],
        correctAnswer: "Символизм",
        explanation:
          "The passage describes how the external environment symbolizes the protagonist's internal struggle.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Кейбір экономистер инфляция өсіп келе жатқан экономикада қажетті жамандық деп дәлелдесе, басқалары оның тұрақты табысы бар адамдарға, әсіресе зейнеткерлер мен төмен жалақы алатын жұмысшыларға әсер ететінін айтады.' Бұл мәтіннен нені түсінуге болады?",
        options: [
          "Барлық экономистер инфляцияның жаман екенімен келіседі.",
          "Инфляция барлығына бірдей әсер етеді.",
          "Инфляцияның әсері туралы әртүрлі көзқарастар бар.",
          "Зейнеткерлер инфляциядан пайда көреді.",
        ],
        correctAnswer: "Инфляцияның әсері туралы әртүрлі көзқарастар бар.",
        explanation:
          "The passage presents differing views on the impact of inflation.",
      },
      {
        id: "q5",
        type: "checkbox",
        question:
          "Мәтінді оқыңыз: 'Қайта өрлеу дәуірі классикалық білімге деген қызығушылықтың жаңаруымен, адам әлеуетіне баса назар аударумен және өнер, сәулет және ғылымдағы серпінді жетістіктермен сипатталды. Леонардо да Винчи және Микеланджело сияқты тұлғалар кезеңнің 'Қайта өрлеу адамы' – бірнеше пәнде білікті адам идеалын көрсетті.' Мәтінде аталған Қайта өрлеу дәуірінің барлық сипаттамаларын таңдаңыз:",
        options: [
          "Классикалық білімнің жаңаруы",
          "Діни билікке назар аудару",
          "Адам әлеуетіне баса назар аудару",
          "Ғылыми зерттеулерден бас тарту",
        ],
        correctAnswer: [
          "Классикалық білімнің жаңаруы",
          "Адам әлеуетіне баса назар аудару",
        ],
        explanation:
          "The passage mentions revival of classical learning and emphasis on human potential as characteristics of the Renaissance.",
      },
    ],
  },
  {
    id: "test-4-level3",
    title: "Advanced Listening in Kazakh",
    description:
      "Practice understanding complex spoken Kazakh in various contexts.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Академиялық дәрісті тыңдап, сұраққа жауап беріңіз: Дәрістің негізгі тақырыбы қандай?",
        options: [
          "Климаттың өзгеруі шешімдері",
          "Жаңартылатын энергия көздері",
          "Экологиялық саясат",
          "Тұрақты даму",
        ],
        correctAnswer: "Жаңартылатын энергия көздері",
        explanation:
          "The lecture primarily discusses various renewable energy sources and their potential.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Бизнес презентацияны тыңдап, сұраққа жауап беріңіз: Компанияның келесі қаржы жылына арналған негізгі мақсаты қандай?",
        options: [
          "Нарық үлесін арттыру",
          "Операциялық шығындарды азайту",
          "Халықаралық нарықтарға кеңею",
          "Жаңа өнім желілерін әзірлеу",
        ],
        correctAnswer: "Халықаралық нарықтарға кеңею",
        explanation:
          "The presenter emphasizes the company's plans for international expansion as the primary goal.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Қазіргі әдебиет туралы подкаст талқылауын тыңдап, аталған барлық авторларды таңдаңыз:",
        options: [
          "Маргарет Этвуд",
          "Эрнест Хемингуэй",
          "Харуки Мураками",
          "Джейн Остин",
        ],
        correctAnswer: ["Маргарет Этвуд", "Харуки Мураками"],
        explanation:
          "Only Margaret Atwood and Haruki Murakami were mentioned as contemporary authors in the discussion.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Медициналық сұхбатты тыңдап, сұраққа жауап беріңіз: Дәрігер науқасқа қандай емдеуді ұсынады?",
        options: [
          "Хирургиялық операция",
          "Физикалық терапия",
          "Дәрі-дәрмек және демалыс",
          "Баламалы медицина",
        ],
        correctAnswer: "Физикалық терапия",
        explanation:
          "The doctor recommends a course of physical therapy as the primary treatment for the patient's condition.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Жаңалықтар репортажын тыңдап, сұраққа жауап беріңіз: Талдаушының айтуынша, экономикалық құлдыраудың негізгі себебі қандай?",
        options: [
          "Мемлекеттік саясат",
          "Халықаралық сауда шиеленістері",
          "Технологиялық бұзылу",
          "Тұтынушылардың шығын әдеттері",
        ],
        correctAnswer: "Халықаралық сауда шиеленістері",
        explanation:
          "The economic analyst in the news report attributes the downturn primarily to international trade tensions.",
      },
    ],
  },
  {
    id: "test-5-level3",
    title: "Advanced Writing in Kazakh",
    description:
      "Develop your Kazakh writing skills with more complex exercises.",
    estimatedDuration: 40,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "writing",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Қай сөйлем параллель құрылымды көрсетеді?",
        options: [
          "Ол жүзуді, жүгіруді және велосипед тебуді ұнатады.",
          "Ол жүзуді, жүгіруді және велосипедпен жүруді ұнатады.",
          "Ол жүзуді, жүгіру және велосипедпен жүруді ұнатады.",
          "Ол жүзеді, жүгіруді және велосипедпен жүруді ұнатады.",
        ],
        correctAnswer: "Ол жүзуді, жүгіруді және велосипедпен жүруді ұнатады.",
        explanation:
          "This sentence maintains parallel structure by using the same grammatical form for all three activities.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Бұл екі сөйлемді қай ауысу сөзі жақсы байланыстырады? 'Компания зерттеу мен дамуға көп инвестиция салды. _____, келесі жылы пайда 30%-ға өсті.'",
        options: ["Алайда", "Дегенмен", "Нәтижесінде", "Сонымен қатар"],
        correctAnswer: "Нәтижесінде",
        explanation:
          "'Нәтижесінде' (Consequently) shows a cause-effect relationship between the investment and the increase in profits.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Қай сөйлемде ілінісіп тұрған анықтауыш бар?",
        options: [
          "Дүкенге бара жатып, мен досымды көрдім.",
          "Тапсырманы аяқтап, теледидар қосылды.",
          "Бағаңызды жақсарту үшін, сіз көбірек оқуыңыз керек.",
          "Кітапты оқып жатқанда, ол ұйықтап қалды.",
        ],
        correctAnswer: "Тапсырманы аяқтап, теледидар қосылды.",
        explanation:
          "This sentence has a dangling modifier because 'Having finished the assignment' should modify a person, not 'the TV'.",
      },
      {
        id: "q4",
        type: "checkbox",
        question: "Белсенді етісті қолданатын барлық сөйлемдерді таңдаңыз:",
        options: [
          "Комитет ұсынысты мақұлдады.",
          "Ұсыныс комитетпен мақұлданды.",
          "Аспаз дәмді тамақ дайындады.",
          "Дәмді тамақ аспазбен дайындалды.",
        ],
        correctAnswer: [
          "Комитет ұсынысты мақұлдады.",
          "Аспаз дәмді тамақ дайындады.",
        ],
        explanation:
          "In active voice, the subject performs the action. 'The committee approved' and 'The chef prepared' are in active voice.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Қай сөйлем ең нақты жазуды көрсетеді?",
        options: [
          "Оның болмауының себебі ол ауырып қалғандығына байланысты болды.",
          "Ол ауру жағдайына байланысты болмады.",
          "Ол ауырып қалғандықтан болмады.",
          "Ол ауырғандықтан, ол болмады.",
        ],
        correctAnswer: "Ол ауырып қалғандықтан болмады.",
        explanation:
          "This sentence communicates the same information as the others but in the most concise way.",
      },
    ],
  },
  {
    id: "test-6-level3",
    title: "Kazakh Idioms and Expressions",
    description: "Learn common Kazakh idioms and their meanings.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Тістің бармағын' деген тіркестің мағынасы қандай?",
        options: [
          "Агрессивті әрекет ету",
          "Қиын жағдайға батыл түрде қарсы тұру",
          "Ойланбай сөйлеу",
          "Қате жасау",
        ],
        correctAnswer: "Қиын жағдайға батыл түрде қарсы тұру",
        explanation:
          "This Kazakh idiom is similar to 'bite the bullet' in English, meaning to face a difficult situation bravely.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "'Қымбатқа түсу' деген тіркестің мағынасы қандай?",
        options: [
          "Өте қымбат болу",
          "Физикалық еңбекті қажет ету",
          "Жарақат алу",
          "Бағасына тұру",
        ],
        correctAnswer: "Өте қымбат болу",
        explanation:
          "This Kazakh idiom means something is very expensive, similar to 'cost an arm and a leg' in English.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "'Көңіл-күйі болмау' деген тіркесті қай жағдайда қолданар едіңіз?",
        options: [
          "Жаңбыр жауғанда",
          "Сырқаттанғанда",
          "Көңіліңіз түскенде",
          "Далада болғанда",
        ],
        correctAnswer: "Көңіліңіз түскенде",
        explanation:
          "This Kazakh expression is used when someone is feeling down or in a bad mood.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Дөп басу' деген тіркестің мағынасы қандай?",
        options: [
          "Өзіңді жарақаттау",
          "Бірдеңе құрастыру",
          "Дәл айту",
          "Қатты жұмыс істеу",
        ],
        correctAnswer: "Дәл айту",
        explanation:
          "This Kazakh idiom means to be exactly right, similar to 'hit the nail on the head' in English.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Уақытқа қатысты барлық тіркестерді таңдаңыз:",
        options: [
          "Көз ашып жұмғанша",
          "Сырын ашу",
          "Жылына бір рет",
          "Сәттілік тілеу",
        ],
        correctAnswer: ["Көз ашып жұмғанша", "Жылына бір рет"],
        explanation:
          "'Көз ашып жұмғанша' means 'in the blink of an eye' and 'жылына бір рет' means 'once a year' - both relate to time.",
      },
    ],
  },
  {
    id: "test-7-level3",
    title: "Academic Kazakh",
    description: "Develop skills for academic writing and speaking in Kazakh.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "mixed",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Академиялық жазуда қайсысы ең қолайлы болар еді?",
        options: [
          "Эксперимент толық сәтсіз болды.",
          "Эксперимент күтпеген нәтижелер берді.",
          "Эксперимент мүлдем жұмыс істемеді.",
          "Эксперимент өте қиын болды.",
        ],
        correctAnswer: "Эксперимент күтпеген нәтижелер берді.",
        explanation:
          "This option uses formal language appropriate for academic writing.",
      },
      {
        id: "q2",
        type: "checkbox",
        question:
          "Академиялық эссеге қолайлы болатын барлық сөз тіркестерін таңдаңыз:",
        options: [
          "Дәлелдеуге болады",
          "Менің ойымша",
          "Зерттеулер көрсеткендей",
          "Бәріне белгілі",
        ],
        correctAnswer: ["Дәлелдеуге болады", "Зерттеулер көрсеткендей"],
        explanation:
          "'Дәлелдеуге болады' (It can be argued that) and 'Зерттеулер көрсеткендей' (Research suggests that) are formal phrases suitable for academic writing.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Гуманитарлық ғылымдарда қандай дәйексөз стилі жиі қолданылады?",
        options: ["APA", "MLA", "Chicago", "IEEE"],
        correctAnswer: "MLA",
        explanation:
          "MLA (Modern Language Association) style is commonly used in humanities disciplines.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Төмендегілердің қайсысы академиялық жазудың сипаттамасы ЕМЕС?",
        options: [
          "Ресми тіл",
          "Жеке әңгімелер",
          "Дәлелдерге негізделген аргументтер",
          "Нақты терминология",
        ],
        correctAnswer: "Жеке әңгімелер",
        explanation:
          "Academic writing typically avoids personal anecdotes and focuses on objective, evidence-based content.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Академиялық жазудағы әдебиеттерге шолудың мақсаты қандай?",
        options: [
          "Оқырманды көңілдендіру",
          "Бар зерттеулерді қорытындылау және бағалау",
          "Жеке пікірлерді ұсыну",
          "Барлық қол жетімді дереккөздерді тізімдеу",
        ],
        correctAnswer: "Бар зерттеулерді қорытындылау және бағалау",
        explanation:
          "A literature review examines and evaluates previous research related to the topic being studied.",
      },
    ],
  },
];

// Turkish Level 3 Tests
export const turkishLevel3Tests: TestItem[] = [
  {
    id: "test-1-level3",
    title: "Advanced Vocabulary",
    description: "Expand your Turkish vocabulary with more advanced terms.",
    estimatedDuration: 25,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Küreselleşme' kelimesinin anlamı nedir?",
        options: ["Yenilenme", "Globalleşme", "Gelişme", "Değişim"],
        correctAnswer: "Globalleşme",
        explanation: "'Küreselleşme' means 'globalization' in Turkish.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Aşağıdaki kelimelerden hangileri ekonomiyle ilgilidir?",
        options: ["Enflasyon", "Demokrasi", "Resesyon", "Yargı"],
        correctAnswer: ["Enflasyon", "Resesyon"],
        explanation:
          "'Enflasyon' (inflation) and 'Resesyon' (recession) are economic terms.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "'Hayırsever' kelimesinin eş anlamlısı nedir?",
        options: ["Zalim", "İyiliksever", "Öfkeli", "Kıskanç"],
        correctAnswer: "İyiliksever",
        explanation:
          "'İyiliksever' is a synonym for 'hayırsever', both meaning 'benevolent' or 'philanthropic'.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Geçici' kelimesinin anlamı nedir?",
        options: [
          "Çok kısa süren",
          "Çok önemli",
          "Çok tehlikeli",
          "Kolay kırılan",
        ],
        correctAnswer: "Çok kısa süren",
        explanation:
          "'Geçici' means 'ephemeral' or 'temporary', lasting for a very short time.",
      },
      {
        id: "q5",
        type: "checkbox",
        question:
          "Aşağıdaki kelimelerden hangileri kişilik özelliklerini tanımlar?",
        options: ["Çalışkan", "Dağ", "Sosyal", "Telefon"],
        correctAnswer: ["Çalışkan", "Sosyal"],
        explanation:
          "'Çalışkan' (diligent) and 'Sosyal' (sociable) are personality traits.",
      },
    ],
  },
  {
    id: "test-2-level3",
    title: "Conditional Sentences in Turkish",
    description: "Master conditional sentences in Turkish language.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Hangi cümle birinci tip şart cümlesini doğru kullanıyor?",
        options: [
          "Eğer yağmur yağarsa, evde kalırdım.",
          "Eğer yağmur yağarsa, evde kalacağım.",
          "Eğer yağmur yağıyor, evde kalacağım.",
          "Eğer yağmur yağardı, evde kalacağım.",
        ],
        correctAnswer: "Eğer yağmur yağarsa, evde kalacağım.",
        explanation:
          "This sentence correctly uses the first conditional form in Turkish.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Hangi cümle ikinci tip şart cümlesini doğru kullanıyor?",
        options: [
          "Eğer piyango kazanırsam, ev alacağım.",
          "Eğer piyango kazanırsam, ev alırdım.",
          "Eğer piyango kazansaydım, ev alırdım.",
          "Eğer piyango kazanırdım, ev alırdım.",
        ],
        correctAnswer: "Eğer piyango kazansaydım, ev alırdım.",
        explanation:
          "This sentence correctly uses the second conditional form in Turkish.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Aşağıdaki cümlelerden hangileri şart kipini doğru kullanıyor?",
        options: [
          "Eğer daha çok çalışsaydım, sınavı geçerdim.",
          "Eğer daha çok çalışırsam, sınavı geçerdim.",
          "Eğer daha fazla zamanım olsaydı, sana yardım ederdim.",
          "Eğer zamanım olacak, sana yardım ederdim.",
        ],
        correctAnswer: [
          "Eğer daha çok çalışsaydım, sınavı geçerdim.",
          "Eğer daha fazla zamanım olsaydı, sana yardım ederdim.",
        ],
        explanation:
          "These sentences correctly use conditional forms in Turkish.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Cümleyi tamamlayın: 'Eğer yarın hava ___, denize ___.''",
        options: [
          "güzel olursa / gideceğiz",
          "güzel olacak / gideceğiz",
          "güzel olursa / giderdik",
          "güzel olurdu / gideceğiz",
        ],
        correctAnswer: "güzel olursa / gideceğiz",
        explanation:
          "This is the correct form for a first conditional sentence in Turkish.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "'Eğer dün bilseydim, gelirdim' cümlesinde hangi tip şart kipi kullanılmıştır?",
        options: [
          "Sıfır tip şart",
          "Birinci tip şart",
          "İkinci tip şart",
          "Üçüncü tip şart",
        ],
        correctAnswer: "Üçüncü tip şart",
        explanation:
          "This sentence uses the third conditional form in Turkish.",
      },
    ],
  },
  {
    id: "test-3-level3",
    title: "Advanced Reading in Turkish",
    description: "Improve your Turkish reading skills with more complex texts.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Dijital teknolojilerin yaygınlaşması, iletişim, çalışma ve hatta düşünme şeklimizi değiştirdi. Bu gelişmeler benzeri görülmemiş kolaylıklar sunarken, aynı zamanda gizlilik, dikkat süreleri ve sosyal etkileşim konularında endişeler de yaratıyor.' Bu metnin ana fikri nedir?",
        options: [
          "Dijital teknolojiler topluma zararlıdır.",
          "Dijital teknolojilerin hem faydaları hem de sakıncaları vardır.",
          "İnsanlar dijital teknolojileri daha az kullanmalıdır.",
          "Dijital teknolojiler iletişimi iyileştirir.",
        ],
        correctAnswer:
          "Dijital teknolojilerin hem faydaları hem de sakıncaları vardır.",
        explanation:
          "The passage discusses both the benefits and drawbacks of digital technologies.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Modern bir fenomen olarak ününe rağmen, küreselleşmenin tarihsel kökleri yüzyıllar öncesine dayanmaktadır. Örneğin İpek Yolu, 'küreselleşme' terimi ortaya çıkmadan çok önce Doğu ve Batı arasındaki ticaret ve kültürel alışverişi kolaylaştırmıştır.' Metne göre, küreselleşme hakkında ne doğrudur?",
        options: [
          "Tamamen modern bir fenomendir.",
          "İpek Yolu ile başlamıştır.",
          "Yüzyıllardır bir şekilde var olmuştur.",
          "Doğu'da icat edilmiştir.",
        ],
        correctAnswer: "Yüzyıllardır bir şekilde var olmuştur.",
        explanation:
          "The passage states that globalization has historical roots dating back centuries.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Yazarın canlı imgeleri kullanması, okuyucuları ıssız manzaraya taşır; burada kahramanın iç mücadelesi, sert dış çevreyi yansıtır.' Burada hangi edebi araç tanımlanmıştır?",
        options: ["Öngörü", "Sembolizm", "İroni", "Aliterasyon"],
        correctAnswer: "Sembolizm",
        explanation:
          "The passage describes how the external environment symbolizes the protagonist's internal struggle.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Bazı ekonomistler enflasyonun büyüyen ekonomilerde gerekli bir kötülük olduğunu savunurken, diğerleri bunun özellikle emekliler ve düşük ücretli işçiler olmak üzere sabit gelirli kişileri orantısız bir şekilde etkilediğini iddia ediyor.' Bu metinden ne çıkarılabilir?",
        options: [
          "Tüm ekonomistler enflasyonun kötü olduğu konusunda hemfikirdir.",
          "Enflasyon herkesi eşit şekilde etkiler.",
          "Enflasyonun etkisi konusunda farklı görüşler vardır.",
          "Emekliler enflasyondan faydalanır.",
        ],
        correctAnswer: "Enflasyonun etkisi konusunda farklı görüşler vardır.",
        explanation:
          "The passage presents differing views on the impact of inflation.",
      },
      {
        id: "q5",
        type: "checkbox",
        question:
          "Metni okuyun: 'Rönesans, klasik öğrenmeye yeniden ilgi, insan potansiyeline vurgu ve sanat, mimari ve bilimde çığır açan gelişmelerle karakterize edildi. Leonardo da Vinci ve Michelangelo gibi figürler, dönemin 'Rönesans insanı' idealini - birden fazla disiplinde yetenekli birini - somutlaştırdı.' Metinde bahsedilen Rönesans'ın tüm özelliklerini seçin:",
        options: [
          "Klasik öğrenmeye yeniden ilgi",
          "Dini otoriteye odaklanma",
          "İnsan potansiyeline vurgu",
          "Bilimsel araştırmaların reddi",
        ],
        correctAnswer: [
          "Klasik öğrenmeye yeniden ilgi",
          "İnsan potansiyeline vurgu",
        ],
        explanation:
          "The passage mentions revival of classical learning and emphasis on human potential as characteristics of the Renaissance.",
      },
    ],
  },
  {
    id: "test-4-level3",
    title: "Advanced Listening in Turkish",
    description:
      "Practice understanding complex spoken Turkish in various contexts.",
    estimatedDuration: 30,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Akademik dersi dinleyin ve cevaplayın: Dersin ana konusu nedir?",
        options: [
          "İklim değişikliği çözümleri",
          "Yenilenebilir enerji kaynakları",
          "Çevre politikası",
          "Sürdürülebilir kalkınma",
        ],
        correctAnswer: "Yenilenebilir enerji kaynakları",
        explanation:
          "The lecture primarily discusses various renewable energy sources and their potential.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "İş sunumunu dinleyin ve cevaplayın: Şirketin gelecek mali yıl için ana hedefi nedir?",
        options: [
          "Pazar payını artırmak",
          "Operasyonel maliyetleri azaltmak",
          "Uluslararası pazarlara açılmak",
          "Yeni ürün hatları geliştirmek",
        ],
        correctAnswer: "Uluslararası pazarlara açılmak",
        explanation:
          "The presenter emphasizes the company's plans for international expansion as the primary goal.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Modern edebiyat hakkındaki podcast tartışmasını dinleyin ve bahsedilen tüm yazarları seçin:",
        options: [
          "Margaret Atwood",
          "Ernest Hemingway",
          "Haruki Murakami",
          "Jane Austen",
        ],
        correctAnswer: ["Margaret Atwood", "Haruki Murakami"],
        explanation:
          "Only Margaret Atwood and Haruki Murakami were mentioned as contemporary authors in the discussion.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Tıbbi görüşmeyi dinleyin ve cevaplayın: Doktor hasta için hangi tedaviyi öneriyor?",
        options: [
          "Ameliyat",
          "Fizik tedavi",
          "İlaç ve dinlenme",
          "Alternatif tıp",
        ],
        correctAnswer: "Fizik tedavi",
        explanation:
          "The doctor recommends a course of physical therapy as the primary treatment for the patient's condition.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Haber raporunu dinleyin ve cevaplayın: Analistin belirttiğine göre ekonomik gerilemenin ana nedeni nedir?",
        options: [
          "Hükümet politikaları",
          "Uluslararası ticaret gerilimleri",
          "Teknolojik bozulma",
          "Tüketici harcama alışkanlıkları",
        ],
        correctAnswer: "Uluslararası ticaret gerilimleri",
        explanation:
          "The economic analyst in the news report attributes the downturn primarily to international trade tensions.",
      },
    ],
  },
  {
    id: "test-5-level3",
    title: "Advanced Writing in Turkish",
    description:
      "Develop your Turkish writing skills with more complex exercises.",
    estimatedDuration: 40,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "writing",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Hangi cümle paralel yapıyı gösteriyor?",
        options: [
          "O yüzmeyi, koşmayı ve bisiklete binmeyi sever.",
          "O yüzmeyi, koşmak ve bisiklete binmeyi sever.",
          "O yüzer, koşmayı ve bisiklete binmeyi sever.",
          "O yüzmeyi, koşar ve bisiklete binmeyi sever.",
        ],
        correctAnswer: "O yüzmeyi, koşmayı ve bisiklete binmeyi sever.",
        explanation:
          "This sentence maintains parallel structure by using the same grammatical form for all three activities.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Bu iki cümleyi en iyi hangi geçiş kelimesi bağlar? 'Şirket araştırma ve geliştirmeye büyük yatırım yaptı. _____, bir sonraki yıl kârlar %30 arttı.'",
        options: ["Ancak", "Yine de", "Sonuç olarak", "Bu arada"],
        correctAnswer: "Sonuç olarak",
        explanation:
          "'Sonuç olarak' (Consequently) shows a cause-effect relationship between the investment and the increase in profits.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Hangi cümlede sallanan bir niteleyici var?",
        options: [
          "Mağazaya yürürken, arkadaşımı gördüm.",
          "Ödevi bitirdikten sonra, televizyon açıldı.",
          "Puanınızı yükseltmek için, daha çok çalışmalısınız.",
          "Kitabı okurken, uyuyakaldı.",
        ],
        correctAnswer: "Ödevi bitirdikten sonra, televizyon açıldı.",
        explanation:
          "This sentence has a dangling modifier because 'Having finished the assignment' should modify a person, not 'the TV'.",
      },
      {
        id: "q4",
        type: "checkbox",
        question: "Etken çatı kullanan tüm cümleleri seçin:",
        options: [
          "Komite öneriyi onayladı.",
          "Öneri komite tarafından onaylandı.",
          "Şef lezzetli bir yemek hazırladı.",
          "Lezzetli bir yemek şef tarafından hazırlandı.",
        ],
        correctAnswer: [
          "Komite öneriyi onayladı.",
          "Şef lezzetli bir yemek hazırladı.",
        ],
        explanation:
          "In active voice, the subject performs the action. 'The committee approved' and 'The chef prepared' are in active voice.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Hangi cümle en özlü yazımı gösteriyor?",
        options: [
          "Onun yokluğunun nedeni hasta olması gerçeğinden kaynaklanıyordu.",
          "Hasta olma gerçeğinden dolayı yoktu.",
          "Hasta olduğu için yoktu.",
          "Hasta olduğu gerçeği, onun yokluğunun nedeniydi.",
        ],
        correctAnswer: "Hasta olduğu için yoktu.",
        explanation:
          "This sentence communicates the same information as the others but in the most concise way.",
      },
    ],
  },
  {
    id: "test-6-level3",
    title: "Turkish Idioms and Expressions",
    description: "Learn common Turkish idioms and their meanings.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Dişini sıkmak' deyiminin anlamı nedir?",
        options: [
          "Agresif davranmak",
          "Zor bir duruma cesaretle karşı koymak",
          "Düşünmeden konuşmak",
          "Hata yapmak",
        ],
        correctAnswer: "Zor bir duruma cesaretle karşı koymak",
        explanation:
          "This Turkish idiom is similar to 'bite the bullet' in English, meaning to face a difficult situation bravely.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "'Pahalıya mal olmak' deyiminin anlamı nedir?",
        options: [
          "Çok pahalı olmak",
          "Fiziksel emek gerektirmek",
          "Yaralanmaya neden olmak",
          "Değerine değmek",
        ],
        correctAnswer: "Çok pahalı olmak",
        explanation:
          "This Turkish idiom means something is very expensive, similar to 'cost an arm and a leg' in English.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "'Keyfi yerinde olmamak' deyimini hangi durumda kullanırsınız?",
        options: [
          "Yağmur yağdığında",
          "Hasta olduğunuzda",
          "Moraliniz bozuk olduğunda",
          "Dışarıda olduğunuzda",
        ],
        correctAnswer: "Moraliniz bozuk olduğunda",
        explanation:
          "This Turkish expression is used when someone is feeling down or in a bad mood.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Tam isabet' deyiminin anlamı nedir?",
        options: [
          "Kendini yaralamak",
          "Bir şey inşa etmek",
          "Tam olarak doğru olmak",
          "Sıkı çalışmak",
        ],
        correctAnswer: "Tam olarak doğru olmak",
        explanation:
          "This Turkish idiom means to be exactly right, similar to 'hit the nail on the head' in English.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Zamanla ilgili tüm deyimleri seçin:",
        options: [
          "Göz açıp kapayıncaya kadar",
          "Ağzından kaçırmak",
          "Yılda bir kez",
          "Başarılar dilemek",
        ],
        correctAnswer: ["Göz açıp kapayıncaya kadar", "Yılda bir kez"],
        explanation:
          "'Göz açıp kapayıncaya kadar' means 'in the blink of an eye' and 'yılda bir kez' means 'once a year' - both relate to time.",
      },
    ],
  },
  {
    id: "test-7-level3",
    title: "Academic Turkish",
    description: "Develop skills for academic writing and speaking in Turkish.",
    estimatedDuration: 35,
    difficulty: "hard",
    isCompleted: false,
    isLocked: false,
    type: "mixed",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Akademik yazıda hangisi en uygun olurdu?",
        options: [
          "Deney tam bir fiyaskoydu.",
          "Deney beklenmedik sonuçlar verdi.",
          "Deney hiç işe yaramadı.",
          "Deney süper zordu.",
        ],
        correctAnswer: "Deney beklenmedik sonuçlar verdi.",
        explanation:
          "This option uses formal language appropriate for academic writing.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Akademik bir makalede uygun olacak tüm ifadeleri seçin:",
        options: [
          "İddia edilebilir ki",
          "Bence",
          "Araştırmalar gösteriyor ki",
          "Herkes bilir ki",
        ],
        correctAnswer: ["İddia edilebilir ki", "Araştırmalar gösteriyor ki"],
        explanation:
          "'İddia edilebilir ki' (It can be argued that) and 'Araştırmalar gösteriyor ki' (Research suggests that) are formal phrases suitable for academic writing.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question:
          "Beşeri bilimlerde yaygın olarak hangi alıntı stili kullanılır?",
        options: ["APA", "MLA", "Chicago", "IEEE"],
        correctAnswer: "MLA",
        explanation:
          "MLA (Modern Language Association) style is commonly used in humanities disciplines.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Aşağıdakilerden hangisi akademik yazının bir özelliği DEĞİLDİR?",
        options: [
          "Resmi dil",
          "Kişisel anekdotlar",
          "Kanıta dayalı argümanlar",
          "Kesin terminoloji",
        ],
        correctAnswer: "Kişisel anekdotlar",
        explanation:
          "Academic writing typically avoids personal anecdotes and focuses on objective, evidence-based content.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Akademik yazıda literatür taramasının amacı nedir?",
        options: [
          "Okuyucuyu eğlendirmek",
          "Mevcut araştırmaları özetlemek ve değerlendirmek",
          "Kişisel görüşleri sunmak",
          "Tüm mevcut kaynakları listelemek",
        ],
        correctAnswer: "Mevcut araştırmaları özetlemek ve değerlendirmek",
        explanation:
          "A literature review examines and evaluates previous research related to the topic being studied.",
      },
    ],
  },
];
