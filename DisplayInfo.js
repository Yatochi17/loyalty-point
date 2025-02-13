document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('page2Form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value;

        // Add validation with error messages
        if (!name.trim()) {
            document.getElementById('nameError').textContent = '*Please insert a name.';
            return;
        }

        if (!birthday) {
            document.getElementById('birthdayError').textContent = '*Please insert your birthday.';
            return;
        }

        if (!email.trim() && !document.getElementById('noEmail').checked) {
            document.getElementById('emailError').textContent = '*Please insert a valid email address.';
            return;
        }

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('birthday', birthday);
        sessionStorage.setItem('email', email);

        window.location.href = 'Page3.html';
    });

    // Clear error messages when user starts typing
    document.getElementById('name').addEventListener('input', function() {
        document.getElementById('nameError').textContent = '';
    });
    
    document.getElementById('birthday').addEventListener('input', function() {
        document.getElementById('birthdayError').textContent = '';
    });
    
    document.getElementById('email').addEventListener('input', function() {
        document.getElementById('emailError').textContent = '';
    });
});
