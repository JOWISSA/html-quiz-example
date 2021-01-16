/*
  question: {
    question: string,
    answer: string,
    options: [string]
  }
*/

const askQuestion = (question, callback) => {
  const wrapper = document.createElement('div'); // √
  const questionH3 = document.createElement('h3'); // √
  const inputsContainer = document.createElement('div'); // √
  const inputs = []; // √

  questionH3.innerHTML = question.question; // √

  const valueTracker = (id, checked) => {
    // 'id-' + key = 'id-0'
    // 'id-0'.split('-') = ['id', '0'];
    // key = ['id', '0'][1] // '1';
    // question.options = ['answer1', 'answer2', 'answer3']
    // question.options[key] // 'answer1'
    const key = id.split('-')[1];
    const answer = question.options[key];

    for (let i in inputs) {
      // not todo
      inputs[i].querySelector('input').setAttribute('disabled', true); // ??????
    }

    question.actualAnswer = answer; // √
    /*
      {
        question: 'Check "a"',
        answer: 'a',
        options: ['b', 'a', 'c', 'd'],
        actualAnswer: 'c'
      }
    */
    question.isCorrectAnswer = (question.answer === answer); // √
    /*
      {
        question: 'Check "a"',
        answer: 'a',
        options: ['b', 'a', 'c', 'd'],
        actualAnswer: 'c',
        isCorrectAnswer: false
      }
    */

    // callback function received from arguments !
    setTimeout(() => callback(question), 1500); // відкладемо виконання на 1.5 секунди
  }

  for (let key in question.options) { // √
    const checkbox = createCheckbox(question.options[key], 'id-' + key, valueTracker); // √
    inputs.push(checkbox); // √

    inputsContainer.appendChild(checkbox); // √
  }

  wrapper.appendChild(questionH3);
  wrapper.appendChild(inputsContainer);

  return wrapper;
}

// const q = askQuestion({
//   question: 'is you here ?',
//   answer: 'yis',
//   options: [
//     'yis',
//     'no',
//     'da'
//   ]
// }, console.log);

// document.body.appendChild(q);