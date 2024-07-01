const loginPopup = document.querySelector('.login-popup');
const closeButton = document.querySelector('.close-popup');
function showLoginPopup() {
    setTimeout(() => {
        loginPopup.style.display = 'block';
    },5000);
}