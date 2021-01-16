const displayResults = (quiz) => {
  const wrapper = document.createElement('div');
  const total = document.createElement('h4');
  const summary = document.createElement('div');
  let correctAnswers = 0;
  
  summary.appendChild(total);

  for (let i in quiz) {
    const questionResult = document.createElement('div');
    const questionText = document.createElement('h5');
    const question = quiz[i];
    const isCorrectAnswer = question.isCorrectAnswer;

    questionText.className = 'question-result';
    questionText.innerHTML = Number(i) + 1 + '. ' + question.question;
    questionResult.appendChild(questionText);
    
    if (isCorrectAnswer) {
      questionText.style.background = '#cfffcf';
      correctAnswers++;
    } else {
      questionText.style.background = '#fbb';
      const expectedAnswer = document.createElement('p');
      const actualAnswer = document.createElement('p');

      expectedAnswer.innerHTML = 'Expected answer: ' + question.answer;
      actualAnswer.innerHTML = 'Actual answer: ' + question.actualAnswer;

      questionResult.appendChild(expectedAnswer);
      questionResult.appendChild(actualAnswer);
    }

    summary.appendChild(questionResult);
  }

  total.innerHTML = 'You have answered ' + correctAnswers + ' out of ' + quiz.length;

  wrapper.appendChild(summary);

  return wrapper;
}