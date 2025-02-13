document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('page2Form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value;


        if (name && birthday && (email || document.getElementById('noEmail').checked)) {
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('birthday', birthday);
            sessionStorage.setItem('email', email);

            window.location.href = 'Page3.html';
        } else {
            // Add red text under empty fields
            if (!name) {
                document.getElementById('nameWarning').style.display = 'block';
            }
            if (!birthday) {
                document.getElementById('birthdayWarning').style.display = 'block';
            }
            if (!email && !document.getElementById('noEmail').checked) {
                document.getElementById('emailWarning').style.display = 'block';
            }
        }
    });

    // Clear warnings when user types
    document.getElementById('name').addEventListener('input', function() {
        document.getElementById('nameWarning').style.display = 'none';
    });

    document.getElementById('birthday').addEventListener('input', function() {
        document.getElementById('birthdayWarning').style.display = 'none';
    });

    document.getElementById('email').addEventListener('input', function() {
        document.getElementById('emailWarning').style.display = 'none';
    });
});
