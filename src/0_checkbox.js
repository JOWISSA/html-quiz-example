const createCheckbox = (option, id, valueTracker) => {
  const input = document.createElement('input'); // √
  const label = document.createElement('label'); // √
  const wrapper = document.createElement('div'); // √

  const inputName = 'input-' + id; // √

  input.type = 'checkbox'; // √
  input.id = inputName; // √

  input.addEventListener('change', (event) => { // √
    /*
      event: {
        target: {
          checked: true
        }
      }
    */
    valueTracker && valueTracker(id, event.target.checked); // √
  });

  label.innerHTML = option; // √
  label.setAttribute('for', inputName); // √

  wrapper.appendChild(input); // input -> div // √
  wrapper.appendChild(label); // label -> div // √

  return wrapper; // √
}

// const wrappedCheckbox = createCheckbox('Are you mad ?', 'i-1', console.log);

// document.body.appendChild(wrappedCheckbox);
