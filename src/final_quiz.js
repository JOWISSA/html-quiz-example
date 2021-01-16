const quiz = [
  {
    question: 'Що таке javascript',
    answer: 'Мова для вебу',
    options: [
      'Мова для створена для обробки серверних даних',
      'Мова для вебу',
      'Інтерпритатор коду',
      'Це все масони придумали',
    ],
  },
  {
    question: 'Яке основне середивище виконання для javascript',
    answer: 'Браузер, Node.js',
    options: [
      'Браузер, Node.js',
      'JVM, VScode',
      'React, Angular',
      'Я тут не для цього прийшов'
    ],
  },
  {
    question: "2 + '2'",
    answer: '22',
    options: [
      '4',
      '"4"',
      '4.0',
      '22'
    ],
  },
];

const el = startQuiz(quiz);

document.body.appendChild(el);