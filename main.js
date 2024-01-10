const form = document.forms[0];
const btn = document.getElementById('ring');
const backdrop = document.querySelector('.backdrop')
const inputTel = document.getElementById('tel');

form.addEventListener('submit', onFormSubmit);
btn.addEventListener('click', openModal);
backdrop.addEventListener('click', onBackdropClose);


function onInputChange(evt) {
    if (isNaN(Number(evt.currentTarget.value))) {
        evt.currentTarget.closest('form').lastElementChild.classList.add('disabled');
        evt.currentTarget.nextElementSibling.classList.add('show-error');
    } else if (evt.currentTarget.value === "") {
        evt.currentTarget.nextElementSibling.classList.remove('show-error');
        evt.currentTarget.closest('form').lastElementChild.classList.add('disabled');

    } else if (!isNaN(Number(evt.currentTarget.value))) {
        evt.currentTarget.nextElementSibling.classList.remove('show-error');
        evt.currentTarget.closest('form').lastElementChild.classList.remove('disabled');
    }
}

function onBackdropClose(evt) {
    if (evt.currentTarget === evt.target) {
        closeForm();
    }
}

function openModal() {
    backdrop.classList.toggle('backdrop-open');
    document.body.classList.toggle('open');
    document.addEventListener('keydown', onEscClose);
    inputTel.addEventListener('input', onInputChange);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    closeForm();
}

function closeForm() {
    backdrop.classList.toggle('backdrop-open');
    document.body.classList.toggle('open');
    document.removeEventListener('keydown', onEscClose);
    inputTel.removeEventListener('input', onInputChange);
}

function onEscClose(evt) {
    if (evt.code === 'Escape') {
        closeForm();
    }
}