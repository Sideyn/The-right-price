document.addEventListener("DOMContentLoaded", () => {
  
  // Selecting DOM elements
  let input = document.querySelector("#price");  // Input field for guessing the price
  let error = document.querySelector("small");  // Error message for invalid input
  let form = document.querySelector("#form");   // Form element
  let reset = document.querySelector("#reset");  // Button to reset the game

  // Hide the error message initially
  error.style.display = "none";

  // Generate a random number between 0 and 1000
  let randomNumber = Math.floor(Math.random() * 1001);
  
  // Counter for the number of guesses
  let hits = 0;

  // Variable to store the guessed number
  let numberChosen;

  // Function to check the guessed number against the random number
  function check(number) {
    let instruction = document.createElement("div");

    if (number < randomNumber) {
      // If the guessed number is less than the random number
      instruction.textContent = "#" + hits + " ( " + number + " ) It's more !";
      instruction.className = "instruction more bold";
    } else if (number > randomNumber) {
      // If the guessed number is greater than the random number
      instruction.textContent = "#" + hits + " ( " + number + " ) It's less !";
      instruction.className = "instruction less";
    } else {
      // If the guessed number is equal to the random number (correct guess)
      instruction.textContent =
        "#" +
        hits +
        " ( " +
        number +
        " ) Congratulations on finding the right price !";
      instruction.className = "instruction finished";
      input.disabled = true;  // Disable the input field after a correct guess
    }

    // Add the instruction element to the container
    document.querySelector("#instructions").prepend(instruction);
  }

  // Event listener for the form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check if the input is not a number or is empty
    if (isNaN(input.value) || input.value == "") {
      input.style.borderColor = "red";  // Change the border color of the input
      error.style.display = "block";   // Display the error message
      input.value = "";                 // Clear the input value
    } else {
      // If the input is a valid number
      hits++;                           // Increment the number of guesses
      input.style.borderColor = "silver";  // Reset the border color of the input
      numberChosen = input.value;          // Get the guessed number
      input.value = "";                    // Clear the input value
      check(numberChosen);                 // Check the guessed number
      error.style.display = "none";        // Hide the error message
    }
  });

  // Event listener for the reset button
  reset.addEventListener("click", () => {
    location.reload();  // Reload the page to reset the game
  });
});
