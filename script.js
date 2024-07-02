document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  // Use arrow function for event listener
  checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === '') {
      alert('Please provide a phone number'); // Consider using a more user-friendly notification method
    } else if (isValidUSPhoneNumber(phoneNumber)) {
      resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
  });

  // Use arrow function for event listener
  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
  });

  // Define function before using it to avoid no-use-before-define error
  function isValidUSPhoneNumber(phoneNumber) {
    // Regular expression for US phone number validation
    const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
    return regex.test(phoneNumber);
  }
});
