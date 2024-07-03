document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  // Define function to display messages before using it
  function displayMessage(message) {
    resultsDiv.textContent = message;
  }

  // Define function for phone number validation
  function isValidUSPhoneNumber(phoneNumber) {
    // Regular expression for US phone number validation
    const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
    return regex.test(phoneNumber);
  }

  // Event listener for check button
  checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();

    if (phoneNumber === '') {
      alert('Please provide a phone number');
    } else if (isValidUSPhoneNumber(phoneNumber)) {
      displayMessage(`Valid US number: ${phoneNumber}`);
    } else {
      displayMessage(`Invalid US number: ${phoneNumber}`);
    }
  });

  // Event listener for clear button
  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
  });
});
