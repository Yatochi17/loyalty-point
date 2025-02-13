document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('page2Form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const email = document.getElementById('email').value;


        sessionStorage.setItem('name', name);
        sessionStorage.setItem('birthday', birthday);
        sessionStorage.setItem('email', email);


        window.location.href = 'Page3.html';
    });
});