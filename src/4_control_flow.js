/*
  quiz: [
    {
      question: string,
      answer: string,
      options: [string]
    }
  ]
*/


const startQuiz = (quiz) => {
  const wrapper = document.createElement('div');
  const scale = createScale(quiz.length);
  let currentQuestion;
  let questionIndex = 0;
  
  const moveToNextQuestion = () => {
    const question = quiz[questionIndex];

    scale.updateAnsweredNumber(questionIndex);
    if (currentQuestion) wrapper.removeChild(currentQuestion);
    if (!question) return wrapper.appendChild(displayResults(quiz));

    currentQuestion = askQuestion(question, moveToNextQuestion);
    wrapper.appendChild(currentQuestion);
    questionIndex++;
  }

  wrapper.appendChild(scale);
  moveToNextQuestion();

  return wrapper;
};

// const wrapper = startQuiz([
//   {
//     question: 'Are you Andrew',
//     answer: 'yis',
//     options: [
//       'yep',
//       'yes',
//       'of course',
//       'yis'
//     ]
//   },
//   {
//     question: 'Do you want to finish this quiz',
//     answer: 'maybe',
//     options: [
//       'yep',
//       'yes',
//       'of course',
//       'maybe',
//       'no',
//       'yis'
//     ]
//   },
// ]);

// document.body.appendChild(wrapper);