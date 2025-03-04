// Test data for all languages and levels

export interface TestQuestion {
  id: string;
  type: "multiple-choice" | "checkbox" | "text" | "audio";
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  audioUrl?: string;
  explanation?: string;
}

export interface TestItem {
  id: string;
  title: string;
  description: string;
  estimatedDuration: number;
  difficulty: "easy" | "medium" | "hard";
  isCompleted: boolean;
  isLocked: boolean;
  score?: number;
  type:
    | "vocabulary"
    | "grammar"
    | "listening"
    | "reading"
    | "writing"
    | "speaking"
    | "mixed";
  questions: TestQuestion[];
}

// English Tests
const englishTests: Record<number, TestItem[]> = {
  1: [
    {
      id: "test-1",
      title: "Basic Vocabulary",
      description:
        "Learn essential words and phrases for everyday conversations.",
      estimatedDuration: 15,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "vocabulary",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the meaning of 'Hello' in English?",
          options: ["Goodbye", "Hello", "Thank you", "Please"],
          correctAnswer: "Hello",
          explanation: "'Hello' is a greeting used when meeting someone.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which word means 'a place where people live'?",
          options: ["Car", "House", "Book", "Tree"],
          correctAnswer: "House",
          explanation: "A 'house' is a building where people live.",
        },
        {
          id: "q3",
          type: "text",
          question: "What is the opposite of 'hot'?",
          correctAnswer: "cold",
          explanation: "'Cold' is the opposite of 'hot'.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which of these is a color?",
          options: ["Table", "Blue", "Run", "Eat"],
          correctAnswer: "Blue",
          explanation: "'Blue' is a color.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the fruits from the list:",
          options: ["Apple", "Carrot", "Banana", "Potato"],
          correctAnswer: ["Apple", "Banana"],
          explanation:
            "Apples and bananas are fruits. Carrots and potatoes are vegetables.",
        },
      ],
    },
    {
      id: "test-2",
      title: "Simple Grammar Structures",
      description:
        "Master the fundamental grammar rules for basic sentence construction.",
      estimatedDuration: 20,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "grammar",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which sentence is grammatically correct?",
          options: [
            "She go to school every day.",
            "She goes to school every day.",
            "She going to school every day.",
            "She to school goes every day.",
          ],
          correctAnswer: "She goes to school every day.",
          explanation:
            "In the present simple tense, we add 's' to the verb for third-person singular subjects (he/she/it).",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Choose the correct form of the verb: 'They ___ watching TV now.'",
          options: ["is", "are", "am", "be"],
          correctAnswer: "are",
          explanation:
            "'They' requires the plural form 'are' in the present continuous tense.",
        },
        {
          id: "q3",
          type: "text",
          question: "Complete the sentence: 'I ___ (have) a dog.'",
          correctAnswer: "have",
          explanation: "The correct form for 'I' in present simple is 'have'.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which is the correct past tense of 'eat'?",
          options: ["eated", "ate", "eaten", "eating"],
          correctAnswer: "ate",
          explanation: "'Ate' is the correct past tense form of 'eat'.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the correct sentences:",
          options: [
            "I am student.",
            "I am a student.",
            "He have a car.",
            "She has a car.",
          ],
          correctAnswer: ["I am a student.", "She has a car."],
          explanation:
            "'I am a student' uses the correct article. 'She has a car' uses the correct form of 'have' for third person singular.",
        },
      ],
    },
    {
      id: "test-3",
      title: "Listening Comprehension",
      description:
        "Practice understanding spoken language in various everyday scenarios.",
      estimatedDuration: 25,
      difficulty: "medium",
      isCompleted: false,
      isLocked: false,
      type: "listening",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the correct translation of 'weather' in English?",
          options: ["погода", "еда", "семья", "работа"],
          correctAnswer: "погода",
          explanation: "'Weather' translates to 'погода' in Russian.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What is the correct response to 'How are you?'",
          options: [
            "I'm 25 years old.",
            "I'm fine, thank you.",
            "I'm from Canada.",
            "I'm a teacher.",
          ],
          correctAnswer: "I'm fine, thank you.",
          explanation:
            "'I'm fine, thank you' is the appropriate response to 'How are you?'",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What is the correct spelling of the number 50 in English?",
          options: ["fifteen", "fifty", "sixteen", "sixty"],
          correctAnswer: "fifty",
          explanation: "The correct spelling of 50 in English is 'fifty'.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Complete the sentence: 'We are going ___ the cinema to watch a movie.'",
          options: ["at", "in", "to", "for"],
          correctAnswer: "to",
          explanation:
            "The correct preposition to use with 'go' and a place is 'to'.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "How do you say 3:45 in English?",
          options: [
            "quarter past three",
            "half past three",
            "quarter to four",
            "four o'clock",
          ],
          correctAnswer: "quarter to four",
          explanation: "3:45 is expressed as 'quarter to four' in English.",
        },
      ],
    },
    {
      id: "test-4",
      title: "Reading Practice",
      description:
        "Improve your reading skills with simple texts and comprehension questions.",
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
            "Read the text: 'John goes to school every day. He likes math and science, but he doesn't like history.' What does John like?",
          options: ["History", "Math and science", "English", "Geography"],
          correctAnswer: "Math and science",
          explanation: "The text states that John likes math and science.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Read: 'Mary has a red car. She drives to work every morning.' What color is Mary's car?",
          options: ["Blue", "Green", "Red", "Black"],
          correctAnswer: "Red",
          explanation: "The text mentions that Mary has a red car.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Read: 'Tom has three pets: a dog, a cat, and a bird.' How many pets does Tom have?",
          correctAnswer: "three",
          explanation: "The text states that Tom has three pets.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Read: 'It was raining, so Sarah took her umbrella.' Why did Sarah take her umbrella?",
          options: [
            "It was sunny",
            "It was raining",
            "It was windy",
            "It was snowing",
          ],
          correctAnswer: "It was raining",
          explanation:
            "The text says Sarah took her umbrella because it was raining.",
        },
        {
          id: "q5",
          type: "checkbox",
          question:
            "Read: 'David likes to play soccer and basketball on weekends. He also enjoys swimming.' Select all activities David enjoys:",
          options: ["Soccer", "Tennis", "Basketball", "Swimming"],
          correctAnswer: ["Soccer", "Basketball", "Swimming"],
          explanation:
            "According to the text, David enjoys soccer, basketball, and swimming.",
        },
      ],
    },
    {
      id: "test-5",
      title: "Writing Exercises",
      description:
        "Develop your writing skills through guided exercises and prompts.",
      estimatedDuration: 35,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "writing",
      questions: [
        {
          id: "q1",
          type: "text",
          question: "Write a sentence using the word 'happy':",
          correctAnswer: "happy",
          explanation: "Any sentence containing the word 'happy' is correct.",
        },
        {
          id: "q2",
          type: "text",
          question: "Correct this sentence: 'She go to school everyday.'",
          correctAnswer: "She goes to school every day.",
          explanation:
            "The correct form is 'She goes' (adding 's' for third person singular) and 'every day' should be two words.",
        },
        {
          id: "q3",
          type: "text",
          question: "Write the past tense of these verbs: go, eat, see",
          correctAnswer: "went, ate, saw",
          explanation: "The past tense forms are 'went', 'ate', and 'saw'.",
        },
        {
          id: "q4",
          type: "text",
          question: "Write a question asking someone about their age:",
          correctAnswer: "How old are you?",
          explanation:
            "'How old are you?' is the standard way to ask about someone's age.",
        },
        {
          id: "q5",
          type: "text",
          question:
            "Write a short paragraph (2-3 sentences) about your favorite food:",
          correctAnswer: "paragraph",
          explanation:
            "Any coherent paragraph about favorite food is acceptable.",
        },
      ],
    },
    {
      id: "test-6",
      title: "Speaking Practice",
      description:
        "Enhance your speaking abilities with pronunciation and conversation exercises.",
      estimatedDuration: 25,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "speaking",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which word is pronounced differently from the others?",
          options: ["weather", "whether", "feather", "leather"],
          correctAnswer: "whether",
          explanation:
            "'Whether' has a different vowel sound than the other words.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which pair of words has the same 'th' sound?",
          options: ["think/the", "think/thin", "the/they", "thin/though"],
          correctAnswer: "think/thin",
          explanation:
            "'Think' and 'thin' both have the unvoiced 'th' sound, while 'the' and 'they' have the voiced 'th' sound.",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question:
            "Which response uses the correct tense for 'What did you do yesterday?'",
          options: [
            "I am going to the store",
            "I go to the store",
            "I went to the store",
            "I will go to the store",
          ],
          correctAnswer: "I went to the store",
          explanation:
            "'Went' is the past tense of 'go', which is appropriate for answering a question about yesterday.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which type of question typically uses rising intonation?",
          options: [
            "Wh-questions",
            "Yes/no questions",
            "Tag questions",
            "Rhetorical questions",
          ],
          correctAnswer: "Yes/no questions",
          explanation:
            "Yes/no questions typically use rising intonation at the end.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "Which phrase would you use to order food in a restaurant?",
          options: [
            "I want this now",
            "Give me that",
            "I would like to order",
            "Food please",
          ],
          correctAnswer: "I would like to order",
          explanation:
            "'I would like to order' is a polite way to order food in a restaurant.",
        },
      ],
    },
    {
      id: "test-7",
      title: "Comprehensive Review",
      description:
        "Test your overall knowledge with a mixed format assessment covering all skills.",
      estimatedDuration: 45,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "mixed",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question:
            "Choose the correct word to complete the sentence: 'She ___ to the store yesterday.'",
          options: ["go", "goes", "went", "going"],
          correctAnswer: "went",
          explanation:
            "'Went' is the past tense of 'go', which is correct for 'yesterday'.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which of these would NOT be used to describe a city?",
          options: ["Crowded", "Urban", "Metropolitan", "Oceanic"],
          correctAnswer: "Oceanic",
          explanation:
            "'Oceanic' is typically used to describe oceans or seas, not cities.",
        },
        {
          id: "q3",
          type: "text",
          question: "Write a sentence using both 'if' and 'will':",
          correctAnswer: "if will",
          explanation:
            "Any grammatically correct sentence containing both 'if' and 'will' is acceptable.",
        },
        {
          id: "q4",
          type: "checkbox",
          question: "Select all the correct past tense forms:",
          options: ["goed", "went", "eated", "ate"],
          correctAnswer: ["went", "ate"],
          explanation:
            "'Went' is the past tense of 'go' and 'ate' is the past tense of 'eat'.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question:
            "Read: 'The man who lives next door is a doctor.' Who is a doctor?",
          options: [
            "The man's neighbor",
            "The man next door",
            "The doctor's neighbor",
            "The man who lives far away",
          ],
          correctAnswer: "The man next door",
          explanation:
            "The sentence states that the man who lives next door is a doctor.",
        },
      ],
    },
  ],
};

// Kazakh Tests
const kazakhTests: Record<number, TestItem[]> = {
  1: [
    {
      id: "test-1",
      title: "Basic Vocabulary",
      description:
        "Learn essential Kazakh words and phrases for everyday conversations.",
      estimatedDuration: 15,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "vocabulary",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the meaning of 'Сәлем' in English?",
          options: ["Goodbye", "Hello", "Thank you", "Please"],
          correctAnswer: "Hello",
          explanation: "'Сәлем' means 'Hello' in Kazakh.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which word means 'house' in Kazakh?",
          options: ["Көлік", "Үй", "Кітап", "Ағаш"],
          correctAnswer: "Үй",
          explanation: "'Үй' means 'house' in Kazakh.",
        },
        {
          id: "q3",
          type: "text",
          question: "What is the Kazakh word for 'water'?",
          correctAnswer: "су",
          explanation: "'Су' means 'water' in Kazakh.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which of these is a color in Kazakh?",
          options: ["Үстел", "Көк", "Жүгіру", "Жеу"],
          correctAnswer: "Көк",
          explanation: "'Көк' means 'blue' in Kazakh.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the fruits in Kazakh:",
          options: ["Алма", "Сәбіз", "Банан", "Картоп"],
          correctAnswer: ["Алма", "Банан"],
          explanation:
            "'Алма' means 'apple' and 'Банан' means 'banana' in Kazakh.",
        },
      ],
    },
    {
      id: "test-2",
      title: "Simple Grammar Structures",
      description:
        "Master the fundamental Kazakh grammar rules for basic sentence construction.",
      estimatedDuration: 20,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "grammar",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which sentence is grammatically correct in Kazakh?",
          options: [
            "Мен мектепке барамын.",
            "Мен мектепке бару.",
            "Мен мектепке барады.",
            "Мектепке мен барамын.",
          ],
          correctAnswer: "Мен мектепке барамын.",
          explanation:
            "'Мен мектепке барамын' means 'I go to school' with the correct verb ending for 'I'.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Choose the correct form: 'Олар қазір теледидар ___ жатыр.'",
          options: ["көру", "көріп", "көреді", "көрмек"],
          correctAnswer: "көріп",
          explanation:
            "'Көріп' is the correct form for the present continuous tense in Kazakh.",
        },
        {
          id: "q3",
          type: "text",
          question: "Complete the sentence: 'Менің ___ (ит) бар.'",
          correctAnswer: "итім",
          explanation:
            "'Итім' means 'my dog' with the correct possessive suffix.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which is the correct past tense of 'жеу' (to eat)?",
          options: ["жеуді", "жеді", "жеген", "жейді"],
          correctAnswer: "жеді",
          explanation: "'Жеді' is the correct past tense form of 'жеу'.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the correct sentences in Kazakh:",
          options: [
            "Мен студентпін.",
            "Мен студент.",
            "Оның көлігі бар.",
            "Оның көлік бар.",
          ],
          correctAnswer: ["Мен студентпін.", "Оның көлігі бар."],
          explanation:
            "'Мен студентпін' uses the correct verb ending. 'Оның көлігі бар' uses the correct possessive form.",
        },
      ],
    },
    {
      id: "test-3",
      title: "Listening Comprehension",
      description:
        "Practice understanding spoken Kazakh in various everyday scenarios.",
      estimatedDuration: 25,
      difficulty: "medium",
      isCompleted: false,
      isLocked: false,
      type: "listening",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the Kazakh word for 'weather'?",
          options: ["Ауа райы", "Тамақ", "Отбасы", "Жұмыс"],
          correctAnswer: "Ауа райы",
          explanation: "'Ауа райы' means 'weather' in Kazakh.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "What is the correct response to 'Қалың қалай?' (How are you?):",
          options: [
            "Мен 25 жастамын.",
            "Жақсы, рахмет.",
            "Мен Қазақстаннанмын.",
            "Мен мұғаліммін.",
          ],
          correctAnswer: "Жақсы, рахмет.",
          explanation:
            "'Жақсы, рахмет' (Fine, thank you) is the appropriate response to 'Қалың қалай?' (How are you?).",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Which of these is the number 50 in Kazakh?",
          options: ["Он бес", "Елу", "Он алты", "Алпыс"],
          correctAnswer: "Елу",
          explanation: "'Елу' means '50' in Kazakh.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Complete the sentence: 'Мен ___ барамын.' (I am going to...)",
          options: ["үйге", "үйден", "үйде", "үймен"],
          correctAnswer: "үйге",
          explanation:
            "'Үйге' means 'to home' in Kazakh, using the correct directional case.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "How do you say 3:45 in Kazakh?",
          options: [
            "Үш жарым",
            "Төртке он бес минут",
            "Төрт",
            "Үшке жиырма бес минут",
          ],
          correctAnswer: "Төртке он бес минут",
          explanation:
            "'Төртке он бес минут' means '3:45' (fifteen minutes to four) in Kazakh.",
        },
      ],
    },
    {
      id: "test-4",
      title: "Reading Practice",
      description:
        "Improve your Kazakh reading skills with simple texts and comprehension questions.",
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
            "Read the text: 'Асқар күнде мектепке барады. Ол математика мен жаратылыстануды ұнатады, бірақ тарихты ұнатпайды.' What does Askar like?",
          options: [
            "Тарих (History)",
            "Математика және жаратылыстану (Math and science)",
            "Ағылшын тілі (English)",
            "География (Geography)",
          ],
          correctAnswer: "Математика және жаратылыстану (Math and science)",
          explanation:
            "The text states that Askar likes math and science (математика мен жаратылыстануды ұнатады).",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Read: 'Айгүлдің қызыл көлігі бар. Ол әр таңда жұмысқа барады.' What color is Aigul's car?",
          options: [
            "Көк (Blue)",
            "Жасыл (Green)",
            "Қызыл (Red)",
            "Қара (Black)",
          ],
          correctAnswer: "Қызыл (Red)",
          explanation:
            "The text mentions that Aigul has a red car (қызыл көлігі).",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Read: 'Болаттың үш үй жануары бар: ит, мысық және құс.' How many pets does Bolat have?",
          correctAnswer: "үш",
          explanation: "The text states that Bolat has three (үш) pets.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Read: 'Жаңбыр жауып тұрды, сондықтан Сәуле қолшатырын алды.' Why did Saule take her umbrella?",
          options: [
            "Күн ашық болды (It was sunny)",
            "Жаңбыр жауып тұрды (It was raining)",
            "Жел соғып тұрды (It was windy)",
            "Қар жауып тұрды (It was snowing)",
          ],
          correctAnswer: "Жаңбыр жауып тұрды (It was raining)",
          explanation:
            "The text says Saule took her umbrella because it was raining (жаңбыр жауып тұрды).",
        },
        {
          id: "q5",
          type: "checkbox",
          question:
            "Read: 'Дәулет демалыс күндері футбол және баскетбол ойнағанды ұнатады. Ол сонымен қатар жүзуді де ұнатады.' Select all activities Daulet enjoys:",
          options: [
            "Футбол (Soccer)",
            "Теннис (Tennis)",
            "Баскетбол (Basketball)",
            "Жүзу (Swimming)",
          ],
          correctAnswer: [
            "Футбол (Soccer)",
            "Баскетбол (Basketball)",
            "Жүзу (Swimming)",
          ],
          explanation:
            "According to the text, Daulet enjoys soccer (футбол), basketball (баскетбол), and swimming (жүзу).",
        },
      ],
    },
    {
      id: "test-5",
      title: "Writing Exercises",
      description:
        "Develop your Kazakh writing skills through guided exercises and prompts.",
      estimatedDuration: 35,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "writing",
      questions: [
        {
          id: "q1",
          type: "text",
          question:
            "Write a sentence in Kazakh using the word 'бақытты' (happy):",
          correctAnswer: "бақытты",
          explanation: "Any sentence containing the word 'бақытты' is correct.",
        },
        {
          id: "q2",
          type: "text",
          question: "Correct this sentence: 'Ол мектепке бару.':",
          correctAnswer: "Ол мектепке барады.",
          explanation:
            "The correct form is 'Ол мектепке барады' using the proper verb ending for third person.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Write the past tense of these Kazakh verbs: бару (go), жеу (eat), көру (see)",
          correctAnswer: "барды, жеді, көрді",
          explanation: "The past tense forms are 'барды', 'жеді', and 'көрді'.",
        },
        {
          id: "q4",
          type: "text",
          question:
            "Write a question in Kazakh asking someone about their age:",
          correctAnswer: "Сіз нешедесіз?",
          explanation:
            "'Сіз нешедесіз?' is the standard way to ask about someone's age in Kazakh.",
        },
        {
          id: "q5",
          type: "text",
          question:
            "Write a short paragraph (2-3 sentences) in Kazakh about your favorite food:",
          correctAnswer: "paragraph",
          explanation:
            "Any coherent paragraph in Kazakh about favorite food is acceptable.",
        },
      ],
    },
    {
      id: "test-6",
      title: "Speaking Practice",
      description:
        "Enhance your Kazakh speaking abilities with pronunciation and conversation exercises.",
      estimatedDuration: 25,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "speaking",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question:
            "Which Kazakh letter is pronounced differently from the others?",
          options: ["Ә", "А", "Ы", "І"],
          correctAnswer: "А",
          explanation:
            "'А' is pronounced differently from the other letters which are specific to Kazakh.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which pair of Kazakh letters represents similar sounds?",
          options: ["Қ/К", "Ғ/Г", "Ң/Н", "Ү/Ұ"],
          correctAnswer: "Ң/Н",
          explanation: "'Ң' and 'Н' represent similar nasal sounds in Kazakh.",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question:
            "Which response uses the correct tense for 'Кеше не істедіңіз?' (What did you do yesterday?)",
          options: [
            "Мен дүкенге барамын",
            "Мен дүкенге барып жатырмын",
            "Мен дүкенге бардым",
            "Мен дүкенге барайын деп жатырмын",
          ],
          correctAnswer: "Мен дүкенге бардым",
          explanation:
            "'Бардым' is the past tense of 'бару', which is appropriate for answering a question about yesterday.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Which type of question in Kazakh typically uses rising intonation?",
          options: [
            "'Не' сұрақтары (What questions)",
            "Иә/жоқ сұрақтары (Yes/no questions)",
            "'Қайда' сұрақтары (Where questions)",
            "'Неге' сұрақтары (Why questions)",
          ],
          correctAnswer: "Иә/жоқ сұрақтары (Yes/no questions)",
          explanation:
            "Yes/no questions in Kazakh typically use rising intonation at the end.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question:
            "Which phrase would you use to order food in a restaurant in Kazakh?",
          options: [
            "Маған осыны әкеліңіз",
            "Мен тапсырыс бергім келеді",
            "Тамақ беріңіз",
            "Маған осы керек",
          ],
          correctAnswer: "Мен тапсырыс бергім келеді",
          explanation:
            "'Мен тапсырыс бергім келеді' (I would like to order) is a polite way to order food in Kazakh.",
        },
      ],
    },
    {
      id: "test-7",
      title: "Comprehensive Review",
      description:
        "Test your overall Kazakh knowledge with a mixed format assessment covering all skills.",
      estimatedDuration: 45,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "mixed",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question:
            "Choose the correct word to complete the sentence: 'Ол кеше дүкенге ___.' (She ___ to the store yesterday.)",
          options: ["бару", "барады", "барды", "барып"],
          correctAnswer: "барды",
          explanation:
            "'Барды' is the past tense of 'бару', which is correct for 'кеше' (yesterday).",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Which of these would NOT be used to describe a city in Kazakh?",
          options: [
            "Үлкен (Big)",
            "Қалалық (Urban)",
            "Теңіздік (Oceanic)",
            "Тарихи (Historical)",
          ],
          correctAnswer: "Теңіздік (Oceanic)",
          explanation:
            "'Теңіздік' (Oceanic) is typically used to describe seas or oceans, not cities.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Write a sentence in Kazakh using both 'егер' (if) and 'болады' (will):",
          correctAnswer: "егер болады",
          explanation:
            "Any grammatically correct Kazakh sentence containing both 'егер' and 'болады' is acceptable.",
        },
        {
          id: "q4",
          type: "checkbox",
          question: "Select all the correct past tense forms in Kazakh:",
          options: ["барды", "баруды", "жеді", "жеуді"],
          correctAnswer: ["барды", "жеді"],
          explanation:
            "'Барды' is the past tense of 'бару' (go) and 'жеді' is the past tense of 'жеу' (eat).",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question:
            "Read in Kazakh: 'Көрші тұратын адам – дәрігер.' (The man who lives next door is a doctor.) Who is a doctor?",
          options: [
            "Адамның көршісі (The man's neighbor)",
            "Көрші тұратын адам (The man next door)",
            "Дәрігердің көршісі (The doctor's neighbor)",
            "Алыста тұратын адам (The man who lives far away)",
          ],
          correctAnswer: "Көрші тұратын адам (The man next door)",
          explanation:
            "The sentence states that the man who lives next door (көрші тұратын адам) is a doctor.",
        },
      ],
    },
  ],
};

// Turkish Tests
const turkishTests: Record<number, TestItem[]> = {
  1: [
    {
      id: "test-1",
      title: "Basic Vocabulary",
      description:
        "Learn essential Turkish words and phrases for everyday conversations.",
      estimatedDuration: 15,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "vocabulary",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the meaning of 'Merhaba' in English?",
          options: ["Goodbye", "Hello", "Thank you", "Please"],
          correctAnswer: "Hello",
          explanation: "'Merhaba' means 'Hello' in Turkish.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which word means 'house' in Turkish?",
          options: ["Araba", "Ev", "Kitap", "Ağaç"],
          correctAnswer: "Ev",
          explanation: "'Ev' means 'house' in Turkish.",
        },
        {
          id: "q3",
          type: "text",
          question: "What is the Turkish word for 'water'?",
          correctAnswer: "su",
          explanation: "'Su' means 'water' in Turkish.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which of these is a color in Turkish?",
          options: ["Masa", "Mavi", "Koşmak", "Yemek"],
          correctAnswer: "Mavi",
          explanation: "'Mavi' means 'blue' in Turkish.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the fruits in Turkish:",
          options: ["Elma", "Havuç", "Muz", "Patates"],
          correctAnswer: ["Elma", "Muz"],
          explanation:
            "'Elma' means 'apple' and 'Muz' means 'banana' in Turkish.",
        },
      ],
    },
    {
      id: "test-2",
      title: "Simple Grammar Structures",
      description:
        "Master the fundamental Turkish grammar rules for basic sentence construction.",
      estimatedDuration: 20,
      difficulty: "easy",
      isCompleted: false,
      isLocked: false,
      type: "grammar",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which sentence is grammatically correct in Turkish?",
          options: [
            "Ben okula gidiyorum.",
            "Ben okula gitmek.",
            "Ben okula gidiyor.",
            "Okula ben gidiyorum.",
          ],
          correctAnswer: "Ben okula gidiyorum.",
          explanation:
            "'Ben okula gidiyorum' means 'I go to school' with the correct verb ending for 'I'.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Choose the correct form: 'Onlar şimdi televizyon ___.' (They are watching TV now.)",
          options: ["izlemek", "izliyor", "izliyorlar", "izle"],
          correctAnswer: "izliyorlar",
          explanation:
            "'İzliyorlar' is the correct form for the present continuous tense with 'they' in Turkish.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Complete the sentence: 'Benim bir ___ var.' (I have a dog.)",
          correctAnswer: "köpeğim",
          explanation:
            "'Köpeğim' means 'my dog' with the correct possessive suffix.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which is the correct past tense of 'yemek' (to eat)?",
          options: ["yemek", "yedi", "yemiş", "yiyor"],
          correctAnswer: "yedi",
          explanation: "'Yedi' is the correct past tense form of 'yemek'.",
        },
        {
          id: "q5",
          type: "checkbox",
          question: "Select all the correct sentences in Turkish:",
          options: [
            "Ben öğrenciyim.",
            "Ben öğrenci.",
            "Onun arabası var.",
            "Onun araba var.",
          ],
          correctAnswer: ["Ben öğrenciyim.", "Onun arabası var."],
          explanation:
            "'Ben öğrenciyim' uses the correct verb ending. 'Onun arabası var' uses the correct possessive form.",
        },
      ],
    },
    {
      id: "test-3",
      title: "Listening Comprehension",
      description:
        "Practice understanding spoken Turkish in various everyday scenarios.",
      estimatedDuration: 25,
      difficulty: "medium",
      isCompleted: false,
      isLocked: false,
      type: "listening",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the Turkish word for 'weather'?",
          options: ["Hava durumu", "Yemek", "Aile", "İş"],
          correctAnswer: "Hava durumu",
          explanation: "'Hava durumu' means 'weather' in Turkish.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "What is the correct response to 'Nasılsın?' (How are you?):",
          options: [
            "Ben 25 yaşındayım.",
            "İyiyim, teşekkür ederim.",
            "Ben Türkiye'denim.",
            "Ben öğretmenim.",
          ],
          correctAnswer: "İyiyim, teşekkür ederim.",
          explanation:
            "'İyiyim, teşekkür ederim' (I'm fine, thank you) is the appropriate response to 'Nasılsın?' (How are you?).",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Which of these is the number 50 in Turkish?",
          options: ["On beş", "Elli", "On altı", "Altmış"],
          correctAnswer: "Elli",
          explanation: "'Elli' means '50' in Turkish.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Complete the sentence: 'Ben ___ gidiyorum.' (I am going to...)",
          options: ["eve", "evden", "evde", "evle"],
          correctAnswer: "eve",
          explanation:
            "'Eve' means 'to home' in Turkish, using the correct directional case.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "How do you say 3:45 in Turkish?",
          options: ["Üç buçuk", "Dörde çeyrek var", "Dört", "Üç yirmi beş"],
          correctAnswer: "Dörde çeyrek var",
          explanation:
            "'Dörde çeyrek var' means '3:45' (quarter to four) in Turkish.",
        },
      ],
    },
    {
      id: "test-4",
      title: "Reading Practice",
      description:
        "Improve your Turkish reading skills with simple texts and comprehension questions.",
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
            "Read the text: 'Ahmet her gün okula gider. O, matematik ve fen bilgisini sever ama tarihi sevmez.' What does Ahmet like?",
          options: [
            "Tarih (History)",
            "Matematik ve fen bilgisi (Math and science)",
            "İngilizce (English)",
            "Coğrafya (Geography)",
          ],
          correctAnswer: "Matematik ve fen bilgisi (Math and science)",
          explanation:
            "The text states that Ahmet likes math and science (matematik ve fen bilgisini sever).",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Read: 'Ayşe'nin kırmızı bir arabası var. O, her sabah işe gider.' What color is Ayşe's car?",
          options: [
            "Mavi (Blue)",
            "Yeşil (Green)",
            "Kırmızı (Red)",
            "Siyah (Black)",
          ],
          correctAnswer: "Kırmızı (Red)",
          explanation:
            "The text mentions that Ayşe has a red car (kırmızı bir arabası).",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Read: 'Mehmet'in üç evcil hayvanı var: bir köpek, bir kedi ve bir kuş.' How many pets does Mehmet have?",
          correctAnswer: "üç",
          explanation: "The text states that Mehmet has three (üç) pets.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Read: 'Yağmur yağıyordu, bu yüzden Zeynep şemsiyesini aldı.' Why did Zeynep take her umbrella?",
          options: [
            "Güneşliydi (It was sunny)",
            "Yağmur yağıyordu (It was raining)",
            "Rüzgarlıydı (It was windy)",
            "Kar yağıyordu (It was snowing)",
          ],
          correctAnswer: "Yağmur yağıyordu (It was raining)",
          explanation:
            "The text says Zeynep took her umbrella because it was raining (yağmur yağıyordu).",
        },
        {
          id: "q5",
          type: "checkbox",
          question:
            "Read: 'Ali hafta sonları futbol ve basketbol oynamayı sever. Ayrıca yüzmeyi de sever.' Select all activities Ali enjoys:",
          options: [
            "Futbol (Soccer)",
            "Tenis (Tennis)",
            "Basketbol (Basketball)",
            "Yüzme (Swimming)",
          ],
          correctAnswer: [
            "Futbol (Soccer)",
            "Basketbol (Basketball)",
            "Yüzme (Swimming)",
          ],
          explanation:
            "According to the text, Ali enjoys soccer (futbol), basketball (basketbol), and swimming (yüzme).",
        },
      ],
    },
    {
      id: "test-5",
      title: "Writing Exercises",
      description:
        "Develop your Turkish writing skills through guided exercises and prompts.",
      estimatedDuration: 35,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "writing",
      questions: [
        {
          id: "q1",
          type: "text",
          question:
            "Write a sentence in Turkish using the word 'mutlu' (happy):",
          correctAnswer: "mutlu",
          explanation: "Any sentence containing the word 'mutlu' is correct.",
        },
        {
          id: "q2",
          type: "text",
          question: "Correct this sentence: 'O okula gitmek.':",
          correctAnswer: "O okula gidiyor.",
          explanation:
            "The correct form is 'O okula gidiyor' using the proper verb ending for third person.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Write the past tense of these Turkish verbs: gitmek (go), yemek (eat), görmek (see)",
          correctAnswer: "gitti, yedi, gördü",
          explanation: "The past tense forms are 'gitti', 'yedi', and 'gördü'.",
        },
        {
          id: "q4",
          type: "text",
          question:
            "Write a question in Turkish asking someone about their age:",
          correctAnswer: "Kaç yaşındasın?",
          explanation:
            "'Kaç yaşındasın?' is the standard way to ask about someone's age in Turkish.",
        },
        {
          id: "q5",
          type: "text",
          question:
            "Write a short paragraph (2-3 sentences) in Turkish about your favorite food:",
          correctAnswer: "paragraph",
          explanation:
            "Any coherent paragraph in Turkish about favorite food is acceptable.",
        },
      ],
    },
    {
      id: "test-6",
      title: "Speaking Practice",
      description:
        "Enhance your Turkish speaking abilities with pronunciation and conversation exercises.",
      estimatedDuration: 25,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "speaking",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question:
            "Which Turkish letter is pronounced differently from the others?",
          options: ["ç", "ş", "c", "ğ"],
          correctAnswer: "c",
          explanation:
            "'c' is pronounced like 'j' in 'jump', while the others have different sounds.",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which pair of Turkish vowels follows vowel harmony rules?",
          options: ["a/e", "ı/i", "o/ö", "u/ü"],
          correctAnswer: "a/e",
          explanation:
            "'a' and 'e' follow the back/front vowel harmony in Turkish.",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question:
            "Which response uses the correct tense for 'Dün ne yaptın?' (What did you do yesterday?)",
          options: [
            "Markete gidiyorum",
            "Markete gideceğim",
            "Markete gittim",
            "Markete giderim",
          ],
          correctAnswer: "Markete gittim",
          explanation:
            "'Gittim' is the past tense of 'gitmek', which is appropriate for answering a question about yesterday.",
        },
        {
          id: "q4",
          type: "multiple-choice",
          question:
            "Which type of question in Turkish typically uses rising intonation?",
          options: [
            "'Ne' soruları (What questions)",
            "Evet/hayır soruları (Yes/no questions)",
            "'Nerede' soruları (Where questions)",
            "'Neden' soruları (Why questions)",
          ],
          correctAnswer: "Evet/hayır soruları (Yes/no questions)",
          explanation:
            "Yes/no questions in Turkish typically use rising intonation at the end.",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question:
            "Which phrase would you use to order food in a restaurant in Turkish?",
          options: [
            "Bunu istiyorum",
            "Sipariş vermek istiyorum",
            "Yemek lütfen",
            "Bana bunu getir",
          ],
          correctAnswer: "Sipariş vermek istiyorum",
          explanation:
            "'Sipariş vermek istiyorum' (I would like to order) is a polite way to order food in Turkish.",
        },
      ],
    },
    {
      id: "test-7",
      title: "Comprehensive Review",
      description:
        "Test your overall Turkish knowledge with a mixed format assessment covering all skills.",
      estimatedDuration: 45,
      difficulty: "hard",
      isCompleted: false,
      isLocked: false,
      type: "mixed",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question:
            "Choose the correct word to complete the sentence: 'O dün markete ___.' (She ___ to the store yesterday.)",
          options: ["gitmek", "gidiyor", "gitti", "giden"],
          correctAnswer: "gitti",
          explanation:
            "'Gitti' is the past tense of 'gitmek', which is correct for 'dün' (yesterday).",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question:
            "Which of these would NOT be used to describe a city in Turkish?",
          options: [
            "Büyük (Big)",
            "Kalabalık (Crowded)",
            "Denizsel (Oceanic)",
            "Tarihi (Historical)",
          ],
          correctAnswer: "Denizsel (Oceanic)",
          explanation:
            "'Denizsel' (Oceanic) is typically used to describe seas or oceans, not cities.",
        },
        {
          id: "q3",
          type: "text",
          question:
            "Write a sentence in Turkish using both 'eğer' (if) and 'olacak' (will be):",
          correctAnswer: "eğer olacak",
          explanation:
            "Any grammatically correct Turkish sentence containing both 'eğer' and 'olacak' is acceptable.",
        },
        {
          id: "q4",
          type: "checkbox",
          question: "Select all the correct past tense forms in Turkish:",
          options: ["gitti", "gitmek", "yedi", "yemek"],
          correctAnswer: ["gitti", "yedi"],
          explanation:
            "'Gitti' is the past tense of 'gitmek' (go) and 'yedi' is the past tense of 'yemek' (eat).",
        },
        {
          id: "q5",
          type: "multiple-choice",
          question:
            "Read in Turkish: 'Yan dairede yaşayan adam bir doktor.' (The man who lives next door is a doctor.) Who is a doctor?",
          options: [
            "Adamın komşusu (The man's neighbor)",
            "Yan dairede yaşayan adam (The man next door)",
            "Doktorun komşusu (The doctor's neighbor)",
            "Uzakta yaşayan adam (The man who lives far away)",
          ],
          correctAnswer: "Yan dairede yaşayan adam (The man next door)",
          explanation:
            "The sentence states that the man who lives next door (yan dairede yaşayan adam) is a doctor.",
        },
      ],
    },
  ],
};

// Import level 2 tests
import {
  englishLevel2Tests,
  kazakhLevel2Tests,
  turkishLevel2Tests,
} from "./level2Tests";

// Import level 3 tests
import {
  englishLevel3Tests,
  kazakhLevel3Tests,
  turkishLevel3Tests,
} from "./level3Tests";

// Export all test data
export const testData = {
  english: {
    1: englishTests[1],
    2: englishLevel2Tests,
    3: englishLevel3Tests,
  },
  kazakh: {
    1: kazakhTests[1],
    2: kazakhLevel2Tests,
    3: kazakhLevel3Tests,
  },
  turkish: {
    1: turkishTests[1],
    2: turkishLevel2Tests,
    3: turkishLevel3Tests,
  },
};
