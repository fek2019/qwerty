// Level 2 tests for all languages

import { TestItem } from "./testData";

// English Level 2 Tests
export const englishLevel2Tests: TestItem[] = [
  {
    id: "test-1-level2",
    title: "Intermediate Vocabulary",
    description: "Expand your English vocabulary with more advanced terms.",
    estimatedDuration: 20,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the meaning of 'ambiguous'?",
        options: ["Clear", "Uncertain", "Difficult", "Interesting"],
        correctAnswer: "Uncertain",
        explanation:
          "'Ambiguous' means open to more than one interpretation; not clear or decided.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Select all words related to business:",
        options: ["Revenue", "Mountain", "Investment", "Flower"],
        correctAnswer: ["Revenue", "Investment"],
        explanation: "'Revenue' and 'Investment' are business-related terms.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Which word is a synonym for 'enormous'?",
        options: ["Tiny", "Huge", "Average", "Interesting"],
        correctAnswer: "Huge",
        explanation:
          "'Huge' is a synonym for 'enormous', both meaning very large in size.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What does 'procrastinate' mean?",
        options: [
          "To work quickly",
          "To delay doing something",
          "To finish early",
          "To plan ahead",
        ],
        correctAnswer: "To delay doing something",
        explanation:
          "'Procrastinate' means to delay or postpone action; to put off doing something.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Select all words that describe emotions:",
        options: ["Joyful", "Table", "Angry", "Computer"],
        correctAnswer: ["Joyful", "Angry"],
        explanation: "'Joyful' and 'Angry' are words that describe emotions.",
      },
    ],
  },
  {
    id: "test-2-level2",
    title: "Present Continuous Tense",
    description: "Master the present continuous tense in English.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Choose the correct form: 'She ___ a book right now.'",
        options: ["reads", "is reading", "read", "reading"],
        correctAnswer: "is reading",
        explanation:
          "The present continuous tense is formed with 'is/am/are' + the -ing form of the verb.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Which sentence is in the present continuous tense?",
        options: [
          "They went to the store yesterday.",
          "We will visit Paris next summer.",
          "He plays tennis every Sunday.",
          "I am studying for my exam.",
        ],
        correctAnswer: "I am studying for my exam.",
        explanation:
          "'I am studying for my exam' uses the present continuous structure: am + studying (verb+ing).",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Select all sentences that use the present continuous correctly:",
        options: [
          "They are watching a movie now.",
          "She cooking dinner at the moment.",
          "We are playing football this afternoon.",
          "He sleeping right now.",
        ],
        correctAnswer: [
          "They are watching a movie now.",
          "We are playing football this afternoon.",
        ],
        explanation: "The correct structure is subject + am/is/are + verb-ing.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Complete the sentence: 'Look! The baby ___ to walk.'",
        options: ["try", "tries", "is trying", "tried"],
        correctAnswer: "is trying",
        explanation:
          "For actions happening at the moment of speaking, we use the present continuous tense.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Which sentence is NOT in the present continuous?",
        options: [
          "She is singing beautifully.",
          "They are having lunch now.",
          "He works in a bank.",
          "We are traveling to London.",
        ],
        correctAnswer: "He works in a bank.",
        explanation:
          "'He works in a bank' is in the simple present tense, not the present continuous.",
      },
    ],
  },
  {
    id: "test-3-level2",
    title: "Past Simple Tense",
    description: "Learn to use the past simple tense correctly.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "What is the past simple form of 'go'?",
        options: ["goed", "went", "gone", "going"],
        correctAnswer: "went",
        explanation: "'Went' is the irregular past simple form of 'go'.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Select all verbs that are in the past simple form:",
        options: ["played", "eating", "walked", "running"],
        correctAnswer: ["played", "walked"],
        explanation:
          "'Played' and 'walked' are regular verbs in the past simple form (verb + ed).",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Choose the correct sentence in past simple:",
        options: [
          "I am visiting my grandmother yesterday.",
          "She will cook dinner last night.",
          "They watched a movie last weekend.",
          "He is playing tennis two days ago.",
        ],
        correctAnswer: "They watched a movie last weekend.",
        explanation:
          "'They watched a movie last weekend' correctly uses the past simple tense with a past time marker.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "What is the past simple form of 'eat'?",
        options: ["eated", "ate", "eaten", "eating"],
        correctAnswer: "ate",
        explanation: "'Ate' is the irregular past simple form of 'eat'.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Select all sentences that use the past simple correctly:",
        options: [
          "I goed to the store.",
          "She worked all day yesterday.",
          "They eated dinner at 7 PM.",
          "He bought a new car last month.",
        ],
        correctAnswer: [
          "She worked all day yesterday.",
          "He bought a new car last month.",
        ],
        explanation:
          "'Worked' is the correct past form of 'work' and 'bought' is the correct past form of 'buy'.",
      },
    ],
  },
  {
    id: "test-4-level2",
    title: "Reading Comprehension",
    description: "Improve your reading skills with short passages.",
    estimatedDuration: 30,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Read the passage: 'Sarah woke up early and made breakfast. She had eggs and toast with coffee. Then she went for a morning run in the park.' What did Sarah do first?",
        options: [
          "Made breakfast",
          "Had coffee",
          "Went for a run",
          "Woke up early",
        ],
        correctAnswer: "Woke up early",
        explanation:
          "According to the sequence in the passage, Sarah woke up early first, then made breakfast.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Read: 'The weather was terrible. It was raining heavily and the wind was strong. John decided not to go out.' Why did John stay home?",
        options: [
          "He was tired",
          "He was sick",
          "The weather was bad",
          "He had no plans",
        ],
        correctAnswer: "The weather was bad",
        explanation:
          "The passage states that the weather was terrible with heavy rain and strong wind, which is why John decided not to go out.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Read: 'Lisa loves animals. She has two dogs, a cat, and three fish. She walks her dogs every morning and evening.' Select all pets that Lisa has:",
        options: ["Dogs", "Birds", "Cats", "Fish"],
        correctAnswer: ["Dogs", "Cats", "Fish"],
        explanation:
          "According to the passage, Lisa has two dogs, a cat, and three fish.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Read: 'Mark is a doctor. He works at City Hospital. He specializes in treating children.' What is Mark's profession?",
        options: ["Nurse", "Teacher", "Doctor", "Engineer"],
        correctAnswer: "Doctor",
        explanation: "The passage clearly states that Mark is a doctor.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Read: 'The library is open from Monday to Friday, 9 AM to 8 PM. On weekends, it is open from 10 AM to 5 PM.' When does the library close on Saturday?",
        options: ["8 PM", "5 PM", "9 PM", "6 PM"],
        correctAnswer: "5 PM",
        explanation:
          "The passage states that on weekends (which includes Saturday), the library is open until 5 PM.",
      },
    ],
  },
  {
    id: "test-5-level2",
    title: "Listening Comprehension",
    description: "Practice understanding spoken English in various contexts.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Listen to the audio and answer: What time does the train leave?",
        options: ["9:15 AM", "9:50 AM", "10:15 AM", "10:50 AM"],
        correctAnswer: "10:15 AM",
        explanation:
          "In the audio, the announcement states that the train to London departs at 10:15 AM.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Listen to the conversation and answer: What does the woman want to buy?",
        options: ["A book", "A laptop", "A phone", "A camera"],
        correctAnswer: "A laptop",
        explanation:
          "In the conversation, the woman is asking about laptop prices and features.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Listen to the weather forecast and select all the weather conditions mentioned for this week:",
        options: ["Sunny", "Rainy", "Windy", "Snowy"],
        correctAnswer: ["Sunny", "Rainy", "Windy"],
        explanation:
          "The weather forecast mentions sunny days at the beginning of the week, followed by rain and wind. Snow is not mentioned.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Listen to the instructions and answer: What should you do first?",
        options: [
          "Add water",
          "Turn on the machine",
          "Insert the capsule",
          "Press the button",
        ],
        correctAnswer: "Turn on the machine",
        explanation:
          "According to the instructions, you should first turn on the machine and wait for it to warm up.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Listen to the announcement and answer: What is the gate number for the flight to Paris?",
        options: ["Gate 12", "Gate 15", "Gate 22", "Gate 25"],
        correctAnswer: "Gate 22",
        explanation:
          "The announcement states that the flight to Paris is boarding at Gate 22.",
      },
    ],
  },
];

// Kazakh Level 2 Tests
export const kazakhLevel2Tests: TestItem[] = [
  {
    id: "test-1-level2",
    title: "Intermediate Vocabulary",
    description: "Expand your Kazakh vocabulary with more advanced terms.",
    estimatedDuration: 20,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Қоршаған орта' дегеніміз не?",
        options: ["Үй", "Мектеп", "Табиғат", "Қала"],
        correctAnswer: "Табиғат",
        explanation:
          "'Қоршаған орта' means 'environment' or 'nature' in Kazakh.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Төмендегі сөздердің қайсысы жануарларға қатысты?",
        options: ["Мысық", "Үстел", "Ит", "Кітап"],
        correctAnswer: ["Мысық", "Ит"],
        explanation: "'Мысық' (cat) and 'Ит' (dog) are animals.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "'Дәрігер' сөзінің мағынасы қандай?",
        options: ["Мұғалім", "Инженер", "Дәрігер", "Аспаз"],
        correctAnswer: "Дәрігер",
        explanation: "'Дәрігер' means 'doctor' in Kazakh.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Жаңбыр' сөзінің мағынасы қандай?",
        options: ["Қар", "Жаңбыр", "Күн", "Жел"],
        correctAnswer: "Жаңбыр",
        explanation: "'Жаңбыр' means 'rain' in Kazakh.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Төмендегі сөздердің қайсысы тамақ атауларына жатады?",
        options: ["Алма", "Қалам", "Нан", "Кітап"],
        correctAnswer: ["Алма", "Нан"],
        explanation: "'Алма' (apple) and 'Нан' (bread) are food items.",
      },
    ],
  },
  {
    id: "test-2-level2",
    title: "Present Tense in Kazakh",
    description: "Master the present tense in Kazakh language.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Мен кітап оқимын' сөйлемінде етістіктің шағы қандай?",
        options: ["Өткен шақ", "Осы шақ", "Келер шақ", "Бұйрық рай"],
        correctAnswer: "Осы шақ",
        explanation:
          "'Мен кітап оқимын' (I read a book) is in the present tense in Kazakh.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Қай сөйлем осы шақта тұр?",
        options: [
          "Олар кеше келді.",
          "Біз ертең барамыз.",
          "Ол қазір жұмыс істеп жатыр.",
          "Сен кітапты оқыдың.",
        ],
        correctAnswer: "Ол қазір жұмыс істеп жатыр.",
        explanation:
          "'Ол қазір жұмыс істеп жатыр' (He/she is working now) is in the present continuous tense.",
      },
      {
        id: "q3",
        type: "checkbox",
        question: "Төмендегі сөйлемдердің қайсысы осы шақта тұр?",
        options: [
          "Олар қазір теледидар көріп отыр.",
          "Мен кеше мектепке бардым.",
          "Біз таңертең шай ішеміз.",
          "Сен ертең келесің.",
        ],
        correctAnswer: [
          "Олар қазір теледидар көріп отыр.",
          "Біз таңертең шай ішеміз.",
        ],
        explanation:
          "'Олар қазір теледидар көріп отыр' (They are watching TV now) and 'Біз таңертең шай ішеміз' (We drink tea in the morning) are in the present tense.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Сен не істеп жатырсың?' сөйлемінде етістіктің шағы қандай?",
        options: ["Өткен шақ", "Осы шақ", "Келер шақ", "Бұйрық рай"],
        correctAnswer: "Осы шақ",
        explanation:
          "'Сен не істеп жатырсың?' (What are you doing?) is in the present continuous tense.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Қай сөйлем осы шақта ЕМЕС?",
        options: [
          "Ол әдемі ән айтады.",
          "Біз қазір тамақ жеп отырмыз.",
          "Олар кеше келді.",
          "Мен қазақ тілін үйренемін.",
        ],
        correctAnswer: "Олар кеше келді.",
        explanation:
          "'Олар кеше келді' (They came yesterday) is in the past tense, not the present tense.",
      },
    ],
  },
  {
    id: "test-3-level2",
    title: "Past Tense in Kazakh",
    description: "Learn to use the past tense correctly in Kazakh.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Бару' етістігінің өткен шақтағы формасы қандай?",
        options: ["барамын", "барды", "барған", "барады"],
        correctAnswer: "барды",
        explanation: "'Барды' is the past tense form of 'бару' (to go).",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Төмендегі етістіктердің қайсысы өткен шақта тұр?",
        options: ["оқыды", "жазады", "келді", "барады"],
        correctAnswer: ["оқыды", "келді"],
        explanation: "'Оқыды' (read) and 'келді' (came) are in the past tense.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Қай сөйлем өткен шақта тұр?",
        options: [
          "Мен қазір мектепке барамын.",
          "Ол ертең келеді.",
          "Олар кеше кино көрді.",
          "Біз таңертең шай ішеміз.",
        ],
        correctAnswer: "Олар кеше кино көрді.",
        explanation:
          "'Олар кеше кино көрді' (They watched a movie yesterday) is in the past tense.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Жеу' етістігінің өткен шақтағы формасы қандай?",
        options: ["жейді", "жеді", "жеген", "жейтін"],
        correctAnswer: "жеді",
        explanation: "'Жеді' is the past tense form of 'жеу' (to eat).",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Төмендегі сөйлемдердің қайсысы өткен шақта дұрыс құрылған?",
        options: [
          "Мен кеше мектепке бардым.",
          "Ол кітапты оқыды.",
          "Біз ертең киноға барамыз.",
          "Сен қазір не істеп жатырсың?",
        ],
        correctAnswer: ["Мен кеше мектепке бардым.", "Ол кітапты оқыды."],
        explanation:
          "'Мен кеше мектепке бардым' (I went to school yesterday) and 'Ол кітапты оқыды' (He/she read the book) are correctly formed past tense sentences.",
      },
    ],
  },
  {
    id: "test-4-level2",
    title: "Reading Comprehension in Kazakh",
    description: "Improve your Kazakh reading skills with short passages.",
    estimatedDuration: 30,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Айгүл таңертең ерте тұрды. Ол таңғы асын ішті. Содан кейін ол мектепке барды.' Айгүл алдымен не істеді?",
        options: [
          "Таңғы асын ішті",
          "Мектепке барды",
          "Ерте тұрды",
          "Киімін киді",
        ],
        correctAnswer: "Ерте тұрды",
        explanation:
          "According to the passage, Aigul first woke up early (ерте тұрды), then had breakfast.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Ауа райы өте жаман болды. Қатты жаңбыр жауып, жел соқты. Асқар үйден шықпауға шешім қабылдады.' Асқар неге үйде қалды?",
        options: [
          "Ол ауырып қалды",
          "Ауа райы жаман болды",
          "Оның жоспары болмады",
          "Ол шаршап қалды",
        ],
        correctAnswer: "Ауа райы жаман болды",
        explanation:
          "The passage states that the weather was bad with heavy rain and wind, which is why Askar decided to stay home.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Мәтінді оқыңыз: 'Сәуле жануарларды жақсы көреді. Оның екі иті, бір мысығы және үш балығы бар. Ол иттерін әр таңертең және кешке серуендетеді.' Сәуленің қандай үй жануарлары бар?",
        options: ["Иттер", "Құстар", "Мысықтар", "Балықтар"],
        correctAnswer: ["Иттер", "Мысықтар", "Балықтар"],
        explanation:
          "According to the passage, Saule has two dogs, a cat, and three fish.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Болат – дәрігер. Ол қалалық ауруханада жұмыс істейді. Ол балаларды емдеуге маманданған.' Болаттың мамандығы қандай?",
        options: ["Мұғалім", "Дәрігер", "Инженер", "Аспаз"],
        correctAnswer: "Дәрігер",
        explanation:
          "The passage clearly states that Bolat is a doctor (дәрігер).",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Мәтінді оқыңыз: 'Кітапхана дүйсенбіден жұмаға дейін таңғы 9-дан кешкі 8-ге дейін ашық. Демалыс күндері ол таңғы 10-нан кешкі 5-ке дейін ашық.' Сенбі күні кітапхана қай уақытта жабылады?",
        options: ["Кешкі 8-де", "Кешкі 5-те", "Кешкі 9-да", "Кешкі 6-да"],
        correctAnswer: "Кешкі 5-те",
        explanation:
          "The passage states that on weekends (which includes Saturday), the library is open until 5 PM.",
      },
    ],
  },
  {
    id: "test-5-level2",
    title: "Listening Comprehension in Kazakh",
    description: "Practice understanding spoken Kazakh in various contexts.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Аудионы тыңдап, сұраққа жауап беріңіз: Пойыз қай уақытта жүреді?",
        options: ["Таңғы 9:15", "Таңғы 9:50", "Таңғы 10:15", "Таңғы 10:50"],
        correctAnswer: "Таңғы 10:15",
        explanation:
          "In the audio, the announcement states that the train departs at 10:15 AM.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Әңгімені тыңдап, сұраққа жауап беріңіз: Әйел не сатып алғысы келеді?",
        options: ["Кітап", "Ноутбук", "Телефон", "Камера"],
        correctAnswer: "Ноутбук",
        explanation:
          "In the conversation, the woman is asking about laptop prices and features.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Ауа райы болжамын тыңдап, осы аптада айтылған ауа райы жағдайларын таңдаңыз:",
        options: ["Күн ашық", "Жаңбырлы", "Желді", "Қарлы"],
        correctAnswer: ["Күн ашық", "Жаңбырлы", "Желді"],
        explanation:
          "The weather forecast mentions sunny days at the beginning of the week, followed by rain and wind. Snow is not mentioned.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Нұсқауларды тыңдап, сұраққа жауап беріңіз: Алдымен не істеу керек?",
        options: ["Су қосу", "Машинаны қосу", "Капсуланы салу", "Түймені басу"],
        correctAnswer: "Машинаны қосу",
        explanation:
          "According to the instructions, you should first turn on the machine and wait for it to warm up.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Хабарландыруды тыңдап, сұраққа жауап беріңіз: Парижге ұшатын рейстің қақпа нөмірі қандай?",
        options: ["12-қақпа", "15-қақпа", "22-қақпа", "25-қақпа"],
        correctAnswer: "22-қақпа",
        explanation:
          "The announcement states that the flight to Paris is boarding at Gate 22.",
      },
    ],
  },
];

// Turkish Level 2 Tests
export const turkishLevel2Tests: TestItem[] = [
  {
    id: "test-1-level2",
    title: "Intermediate Vocabulary",
    description: "Expand your Turkish vocabulary with more advanced terms.",
    estimatedDuration: 20,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "vocabulary",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Çevre' kelimesinin anlamı nedir?",
        options: ["Ev", "Okul", "Çevre", "Şehir"],
        correctAnswer: "Çevre",
        explanation: "'Çevre' means 'environment' in Turkish.",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Aşağıdaki kelimelerden hangileri hayvanlara aittir?",
        options: ["Kedi", "Masa", "Köpek", "Kitap"],
        correctAnswer: ["Kedi", "Köpek"],
        explanation: "'Kedi' (cat) and 'Köpek' (dog) are animals.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "'Doktor' kelimesinin anlamı nedir?",
        options: ["Öğretmen", "Mühendis", "Doktor", "Aşçı"],
        correctAnswer: "Doktor",
        explanation: "'Doktor' means 'doctor' in Turkish.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Yağmur' kelimesinin anlamı nedir?",
        options: ["Kar", "Yağmur", "Güneş", "Rüzgar"],
        correctAnswer: "Yağmur",
        explanation: "'Yağmur' means 'rain' in Turkish.",
      },
      {
        id: "q5",
        type: "checkbox",
        question: "Aşağıdaki kelimelerden hangileri yiyecek adlarıdır?",
        options: ["Elma", "Kalem", "Ekmek", "Kitap"],
        correctAnswer: ["Elma", "Ekmek"],
        explanation: "'Elma' (apple) and 'Ekmek' (bread) are food items.",
      },
    ],
  },
  {
    id: "test-2-level2",
    title: "Present Tense in Turkish",
    description: "Master the present tense in Turkish language.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Ben kitap okuyorum' cümlesinde fiil hangi zamandadır?",
        options: [
          "Geçmiş zaman",
          "Şimdiki zaman",
          "Gelecek zaman",
          "Emir kipi",
        ],
        correctAnswer: "Şimdiki zaman",
        explanation:
          "'Ben kitap okuyorum' (I am reading a book) is in the present continuous tense in Turkish.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Hangi cümle şimdiki zamandadır?",
        options: [
          "Onlar dün geldiler.",
          "Biz yarın gideceğiz.",
          "O şimdi çalışıyor.",
          "Sen kitabı okudun.",
        ],
        correctAnswer: "O şimdi çalışıyor.",
        explanation:
          "'O şimdi çalışıyor' (He/she is working now) is in the present continuous tense.",
      },
      {
        id: "q3",
        type: "checkbox",
        question: "Aşağıdaki cümlelerden hangileri şimdiki zamandadır?",
        options: [
          "Onlar şimdi televizyon izliyorlar.",
          "Ben dün okula gittim.",
          "Biz sabahları çay içeriz.",
          "Sen yarın geleceksin.",
        ],
        correctAnswer: [
          "Onlar şimdi televizyon izliyorlar.",
          "Biz sabahları çay içeriz.",
        ],
        explanation:
          "'Onlar şimdi televizyon izliyorlar' (They are watching TV now) is in the present continuous tense, and 'Biz sabahları çay içeriz' (We drink tea in the mornings) is in the simple present tense.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Sen ne yapıyorsun?' cümlesinde fiil hangi zamandadır?",
        options: [
          "Geçmiş zaman",
          "Şimdiki zaman",
          "Gelecek zaman",
          "Emir kipi",
        ],
        correctAnswer: "Şimdiki zaman",
        explanation:
          "'Sen ne yapıyorsun?' (What are you doing?) is in the present continuous tense.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Hangi cümle şimdiki zamanda DEĞİLDİR?",
        options: [
          "O güzel şarkı söylüyor.",
          "Biz şimdi yemek yiyoruz.",
          "Onlar dün geldiler.",
          "Ben Türkçe öğreniyorum.",
        ],
        correctAnswer: "Onlar dün geldiler.",
        explanation:
          "'Onlar dün geldiler' (They came yesterday) is in the past tense, not the present tense.",
      },
    ],
  },
  {
    id: "test-3-level2",
    title: "Past Tense in Turkish",
    description: "Learn to use the past tense correctly in Turkish.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "grammar",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "'Gitmek' fiilinin geçmiş zaman formu nedir?",
        options: ["gidiyorum", "gitti", "gitmiş", "gidiyor"],
        correctAnswer: "gitti",
        explanation: "'Gitti' is the past tense form of 'gitmek' (to go).",
      },
      {
        id: "q2",
        type: "checkbox",
        question: "Aşağıdaki fiillerden hangileri geçmiş zamandadır?",
        options: ["okudu", "yazıyor", "geldi", "gidiyor"],
        correctAnswer: ["okudu", "geldi"],
        explanation: "'Okudu' (read) and 'geldi' (came) are in the past tense.",
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Hangi cümle geçmiş zamandadır?",
        options: [
          "Ben şimdi okula gidiyorum.",
          "O yarın gelecek.",
          "Onlar dün film izlediler.",
          "Biz sabahları çay içeriz.",
        ],
        correctAnswer: "Onlar dün film izlediler.",
        explanation:
          "'Onlar dün film izlediler' (They watched a movie yesterday) is in the past tense.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "'Yemek' fiilinin geçmiş zaman formu nedir?",
        options: ["yiyor", "yedi", "yemiş", "yiyecek"],
        correctAnswer: "yedi",
        explanation: "'Yedi' is the past tense form of 'yemek' (to eat).",
      },
      {
        id: "q5",
        type: "checkbox",
        question:
          "Aşağıdaki cümlelerden hangileri geçmiş zamanda doğru kurulmuştur?",
        options: [
          "Ben dün okula gittim.",
          "O kitabı okudu.",
          "Biz yarın sinemaya gideceğiz.",
          "Sen şimdi ne yapıyorsun?",
        ],
        correctAnswer: ["Ben dün okula gittim.", "O kitabı okudu."],
        explanation:
          "'Ben dün okula gittim' (I went to school yesterday) and 'O kitabı okudu' (He/she read the book) are correctly formed past tense sentences.",
      },
    ],
  },
  {
    id: "test-4-level2",
    title: "Reading Comprehension in Turkish",
    description: "Improve your Turkish reading skills with short passages.",
    estimatedDuration: 30,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "reading",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Ayşe sabah erken kalktı. Kahvaltısını yaptı. Sonra okula gitti.' Ayşe ilk önce ne yaptı?",
        options: ["Kahvaltı yaptı", "Okula gitti", "Erken kalktı", "Giyindi"],
        correctAnswer: "Erken kalktı",
        explanation:
          "According to the passage, Ayşe first woke up early (erken kalktı), then had breakfast.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Hava çok kötüydü. Şiddetli yağmur yağıyordu ve rüzgar esiyordu. Ahmet dışarı çıkmamaya karar verdi.' Ahmet neden evde kaldı?",
        options: ["Hastaydı", "Hava kötüydü", "Planı yoktu", "Yorgundu"],
        correctAnswer: "Hava kötüydü",
        explanation:
          "The passage states that the weather was bad with heavy rain and wind, which is why Ahmet decided to stay home.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Metni okuyun: 'Zeynep hayvanları çok sever. İki köpeği, bir kedisi ve üç balığı var. Her sabah ve akşam köpeklerini yürüyüşe çıkarır.' Zeynep'in hangi evcil hayvanları var?",
        options: ["Köpekler", "Kuşlar", "Kediler", "Balıklar"],
        correctAnswer: ["Köpekler", "Kediler", "Balıklar"],
        explanation:
          "According to the passage, Zeynep has two dogs, a cat, and three fish.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Mehmet bir doktordur. Şehir hastanesinde çalışır. Çocukları tedavi etmekte uzmanlaşmıştır.' Mehmet'in mesleği nedir?",
        options: ["Öğretmen", "Doktor", "Mühendis", "Aşçı"],
        correctAnswer: "Doktor",
        explanation:
          "The passage clearly states that Mehmet is a doctor (doktor).",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Metni okuyun: 'Kütüphane pazartesiden cumaya kadar sabah 9'dan akşam 8'e kadar açıktır. Hafta sonları sabah 10'dan akşam 5'e kadar açıktır.' Cumartesi günü kütüphane saat kaçta kapanır?",
        options: ["Akşam 8'de", "Akşam 5'te", "Akşam 9'da", "Akşam 6'da"],
        correctAnswer: "Akşam 5'te",
        explanation:
          "The passage states that on weekends (which includes Saturday), the library is open until 5 PM.",
      },
    ],
  },
  {
    id: "test-5-level2",
    title: "Listening Comprehension in Turkish",
    description: "Practice understanding spoken Turkish in various contexts.",
    estimatedDuration: 25,
    difficulty: "medium",
    isCompleted: false,
    isLocked: false,
    type: "listening",
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        question:
          "Ses kaydını dinleyin ve soruyu cevaplayın: Tren saat kaçta kalkıyor?",
        options: ["Sabah 9:15", "Sabah 9:50", "Sabah 10:15", "Sabah 10:50"],
        correctAnswer: "Sabah 10:15",
        explanation:
          "In the audio, the announcement states that the train departs at 10:15 AM.",
      },
      {
        id: "q2",
        type: "multiple-choice",
        question:
          "Konuşmayı dinleyin ve soruyu cevaplayın: Kadın ne satın almak istiyor?",
        options: ["Kitap", "Dizüstü bilgisayar", "Telefon", "Kamera"],
        correctAnswer: "Dizüstü bilgisayar",
        explanation:
          "In the conversation, the woman is asking about laptop prices and features.",
      },
      {
        id: "q3",
        type: "checkbox",
        question:
          "Hava durumu tahminini dinleyin ve bu hafta için bahsedilen hava koşullarını seçin:",
        options: ["Güneşli", "Yağmurlu", "Rüzgarlı", "Karlı"],
        correctAnswer: ["Güneşli", "Yağmurlu", "Rüzgarlı"],
        explanation:
          "The weather forecast mentions sunny days at the beginning of the week, followed by rain and wind. Snow is not mentioned.",
      },
      {
        id: "q4",
        type: "multiple-choice",
        question:
          "Talimatları dinleyin ve soruyu cevaplayın: İlk önce ne yapmalısınız?",
        options: [
          "Su eklemek",
          "Makineyi açmak",
          "Kapsülü yerleştirmek",
          "Düğmeye basmak",
        ],
        correctAnswer: "Makineyi açmak",
        explanation:
          "According to the instructions, you should first turn on the machine and wait for it to warm up.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        question:
          "Duyuruyu dinleyin ve soruyu cevaplayın: Paris'e giden uçuşun kapı numarası nedir?",
        options: ["Kapı 12", "Kapı 15", "Kapı 22", "Kapı 25"],
        correctAnswer: "Kapı 22",
        explanation:
          "The announcement states that the flight to Paris is boarding at Gate 22.",
      },
    ],
  },
];
