document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('countryCode').value = '+60';
    document.getElementById('phoneNumber').value = '173527250';

    document.getElementById('page1Form').addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedCountryCode = document.getElementById('countryCode').value;
        const enteredPhoneNumber = document.getElementById('phoneNumber').value;

        if (selectedCountryCode === '+60' && enteredPhoneNumber === '173527250') {
            sessionStorage.setItem('phoneNumber', enteredPhoneNumber);
            window.location.href = 'Page2.html';
        } else {
            alert('Invalid phone number. Please select "+60" and enter "173527250".');
        }
    });
});