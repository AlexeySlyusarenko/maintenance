export {
    statusLogin
}

let statusLogin = 1;

const loginElement = document.querySelectorAll(".login")[1],
    loginInputTextElement = loginElement.querySelector(".login__input-text"),
    loginListInputElement = loginElement.querySelector(".login__list-input");

loginListInputElement.addEventListener('click', () => {
    loginInputTextElement.value = '123';
});

