"use strict";

// Ensure DOM is fully loaded before executing script
document.addEventListener('DOMContentLoaded', function () {
    // Handle the contact form submission
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Collect all input fields and the textarea
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            let formData = {};

            // Loop through each input field to validate
            inputs.forEach(function (input) {
                const value = input.value.trim();
                const name = input.getAttribute('name');

                // Store form data
                formData[name] = value;

                // Basic validation: Check if the field is not empty
                if (!value) {
                    alert(`Please fill out the ${name} field.`);
                    isValid = false;
                    return;
                }

                // Additional validation for email field
                if (name === 'email' && !validateEmail(value)) {
                    alert('Please enter a valid email address.');
                    isValid = false;
                    return;
                }
            });

            // If all fields are valid, proceed
            if (isValid) {
                alert(`Thank you, ${formData.name}, for your message! We will get back to you soon at ${formData.email}.`);
                contactForm.reset(); // Optionally reset the form
            }
        });
    }

    // Handle login form submission
    const loginForm = document.querySelector('.loginContainer').closest('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Get username and password
            const username = loginForm.querySelector('input[name="uname"]').value;
            const password = loginForm.querySelector('input[name="psw"]').value;

            // Basic check for username and password
            if (username && password) {
                if (password.length >= 8) {
                    alert(`Welcome back, ${username}!`);
                } else {
                    alert('Password must be at least 8 characters long.');
                }
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

});

// Utility function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}