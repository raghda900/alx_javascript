document.addEventListener('DOMContentLoaded', function () {
    const dynamicForm = document.getElementById('dynamicForm');
    const numFieldsSelect = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');
  
    dynamicForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  
    numFieldsSelect.addEventListener('change', function () {
      const selectedValue = parseInt(numFieldsSelect.value, 10);
      generateInputFields(selectedValue);
    });
  
    function generateInputFields(numFields) {
      inputContainer.innerHTML = ''; // Clear existing input fields
  
      for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = `field${i}`;
        inputContainer.appendChild(inputField);
      }
    }
  
    function validateForm() {
      const inputFields = inputContainer.querySelectorAll('input');
      let isValid = true;
  
      inputFields.forEach(function (field) {
        if (field.value.trim() === '') {
          isValid = false;
        }
      });
  
      if (!isValid) {
        alert('Please fill in all fields.');
      } else {
        // Allow form submission or perform further actions if the form is valid
        dynamicForm.submit();
      }
    }
  });
  