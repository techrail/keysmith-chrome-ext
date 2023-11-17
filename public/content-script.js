// content.js

// Function to handle login button click
function handleLoginButtonClick() {
  alert('Login button clicked!');
}

// Function to handle sign-up button click
function handleSignUpButtonClick() {
  alert('Sign-up button clicked!');
}

// Add a listener for login button click events
function addLoginButtonClickListener() {
  // Replace 'Login' with the actual text content of your login button
  const loginButton = document.querySelector('button:contains("Login")');

  if (loginButton) {
    loginButton.addEventListener('click', handleLoginButtonClick);
  }
}

// Add a listener for sign-up button click events
function addSignUpButtonClickListener() {
  // Replace 'Sign Up' with the actual text content of your sign-up button
  const signUpButton = document.querySelector('button:contains("Sign Up")');

  if (signUpButton) {
    signUpButton.addEventListener('click', handleSignUpButtonClick);
  }
}

// Wait for the DOM to be ready before attaching the event listeners
document.addEventListener('DOMContentLoaded', () => {
  addLoginButtonClickListener();
  addSignUpButtonClickListener();
});
