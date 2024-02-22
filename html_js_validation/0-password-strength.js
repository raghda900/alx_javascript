// passwordValidation.js

document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');
  
    passwordForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validatePassword(passwordInput.value);
    });
  
    function validatePassword(password) {
      const minLength = 8;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /\d/;
      const specialCharRegex = /[!@#$%^&*]/;
  
      let errorMessage = '';
  
      if (password.length < minLength) {
        errorMessage = 'Password must be at least 8 characters long.';
      } else if (!uppercaseRegex.test(password)) {
        errorMessage = 'Password must contain at least one uppercase letter.';
      } else if (!lowercaseRegex.test(password)) {
        errorMessage = 'Password must contain at least one lowercase letter.';
      } else if (!digitRegex.test(password)) {
        errorMessage = 'Password must contain at least one numeric digit.';
      } else if (!specialCharRegex.test(password)) {
        errorMessage = 'Password must contain at least one special character (!@#$%^&*).';
      }
  
      if (errorMessage) {
        errorElement.textContent = errorMessage;
      } else {
        errorElement.textContent = '';
        // Allow form submission or perform further actions if the password is valid
        passwordForm.submit();
      }
    }
  });
  