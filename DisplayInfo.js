document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('page2Form');
    const nameError = document.getElementById('nameError');
    const birthdayError = document.getElementById('birthdayError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Reset error messages
        nameError.textContent = '';
        birthdayError.textContent = '';
        emailError.textContent = '';

        let isValid = true;
        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value;
        const noEmail = document.getElementById('noEmail').checked;

        if (!name.trim()) {
            nameError.textContent = '*Please insert a name.';
            isValid = false;
        }

        if (!birthday) {
            birthdayError.textContent = '*Please insert your birthday.';
            isValid = false;
        }

        if (!noEmail && !email.trim()) {
            emailError.textContent = '*Please insert a valid email address.';
            isValid = false;
        }

        if (isValid) {
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('birthday', birthday);
            sessionStorage.setItem('email', email);
            window.location.href = 'Page3.html';
        }
    });

    // Handle the "No Email Address" checkbox
    document.getElementById('noEmail').addEventListener('change', function() {
        const emailInput = document.getElementById('email');
        emailInput.disabled = this.checked;
        if (this.checked) {
            emailInput.value = '';
            emailError.textContent = '';
        }
    });
});
