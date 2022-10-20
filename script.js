const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

const icons = document.querySelectorAll('i');
icons.forEach(icon => {
    icon.addEventListener('click', toggleIcon)
})

function handleSubmit() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');

    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let usernameError = document.getElementById('userNameError');
    let passwordError = document.getElementById('passwordError');

    firstNameError.innerText = !firstName.value ? 'Enter First Name' : '';

    lastNameError.innerText = !lastName.value ? 'Enter Last Name' : '';

    usernameError.innerText = !userName.value ? 'Enter User Name' : '';

    passwordError.innerText = !password.value ? 'Enter Password' : (password.value && (password.value.length < 8 || password.value.length > 20)) ? 'Password must be 8-20 letters long.' : '';


    if (firstName.value && lastName.value && userName.value && password.value && (password.value.length > 8 && password.value.length < 20)) {
        let toast = document.getElementById('toast-section');
        toast.setAttribute('style', 'top:12px !important');
        document.querySelector('button').disabled = true;
        setTimeout(() => {
            firstName.value = '';
            lastName.value = '';
            userName.value = '';
            password.value = '';
            toast.setAttribute('style', 'top:-50px !important');
            document.querySelector('button').disabled = false;
        }, 3000);
    }
}

function toggleIcon(event) {
    let hiddenIcon = document.getElementsByClassName('hide')[0].classList;
    hiddenIcon.add('show');
    hiddenIcon.remove('hide');

    const clickedIcon = document.getElementById(event.target.id);
    clickedIcon.classList.remove('show');
    clickedIcon.classList.add('hide');

    let inputType = document.getElementById('password');
    if (inputType.type === 'text')
        inputType.type = "password";
    else
        inputType.type = "text";

}