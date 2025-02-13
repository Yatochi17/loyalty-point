document.addEventListener('DOMContentLoaded', function () {
    // Remove the required attribute from inputs to prevent default browser validation
    document.getElementById('name').removeAttribute('required');
    document.getElementById('birthday').removeAttribute('required');
    document.getElementById('email').removeAttribute('required');

    document.getElementById('page2Form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Remove any existing warning messages
        const existingWarnings = document.querySelectorAll('.warning-text');
        existingWarnings.forEach(warning => warning.remove());

        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value;
        const noEmail = document.getElementById('noEmail').checked;

        let isValid = true;

        // Name validation
        if (!name.trim()) {
            const nameWarning = document.createElement('div');
            nameWarning.className = 'warning-text';
            nameWarning.innerHTML = '*Please insert a name.';
            nameWarning.style.color = 'red';
            nameWarning.style.fontSize = '12px';
            nameWarning.style.fontStyle = 'italic';
            nameWarning.style.marginTop = '5px';
            document.getElementById('name').insertAdjacentElement('afterend', nameWarning);
            isValid = false;
        }

        // Birthday validation
        if (!birthday) {
            const birthdayWarning = document.createElement('div');
            birthdayWarning.className = 'warning-text';
            birthdayWarning.innerHTML = '*Please insert your birthday.';
            birthdayWarning.style.color = 'red';
            birthdayWarning.style.fontSize = '12px';
            birthdayWarning.style.fontStyle = 'italic';
            birthdayWarning.style.marginTop = '5px';
            document.getElementById('birthday').insertAdjacentElement('afterend', birthdayWarning);
            isValid = false;
        }

        // Email validation
        if (!noEmail && !email.trim()) {
            const emailWarning = document.createElement('div');
            emailWarning.className = 'warning-text';
            emailWarning.innerHTML = '*Please insert a valid email address.';
            emailWarning.style.color = 'red';
            emailWarning.style.fontSize = '12px';
            emailWarning.style.fontStyle = 'italic';
            emailWarning.style.marginTop = '5px';
            document.getElementById('email').insertAdjacentElement('afterend', emailWarning);
            isValid = false;
        }

        if (isValid) {
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('birthday', birthday);
            sessionStorage.setItem('email', email);
            window.location.href = 'Page3.html';
        }
    });

    // Clear warnings when typing
    ['name', 'birthday', 'email'].forEach(fieldId => {
        document.getElementById(fieldId).addEventListener('input', function() {
            const warning = this.nextElementSibling;
            if (warning && warning.className === 'warning-text') {
                warning.remove();
            }
        });
    });
});
