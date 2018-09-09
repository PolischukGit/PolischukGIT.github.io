let preloader_wrapp;
let invite_wrapp;
let preloader_cont;
let preloader_child;
let name_space;
let surname_array = {
    бобровников: 'Владимир и Татьяна!',
    галушка: 'Владимир и Елена!',
    омельченко: 'Евгений, Алена и Полина!',
    испас: 'Денис, Юлия и Дарьяна!'
};
let invite = localStorage.getItem('invite');
window.onload = () => {
    preloader_wrapp = document.getElementsByClassName('preloader-cont')[0];
    invite_wrapp = document.getElementsByClassName('invite-cont')[0];
    preloader_child = document.getElementsByClassName('input-wrapp')[0];
    preloader_cont = document.getElementById('surname-id-input');
    name_space = document.getElementsByClassName('invite-name')[0];
    if (!invite) {
        setTimeout(() => {
        preloader_child.style.display = 'inline-block';
        preloader_child.classList.add('animated', 'slideInDown');
        }, 500);
    } else {
        preloader_wrapp.style.display = 'none';
        invite_wrapp.style.display = 'block';
        name_space.innerHTML = invite;
    }
};
let enterSurname = (e) => {
    if (e.keyCode === 13) {
        e.target.blur();
        selectSurname();
    }
};
let selectSurname = () => {
    let surname = preloader_cont.value;
    let exist = null;
    if (surname.length < 5) {
        alert('Введите фамилию полностью!');
        return;
    }
    for (let sur of Object.keys(surname_array)) {
        if (sur.toLowerCase().indexOf(surname.substr(0, surname.length - 1).toLowerCase()) !== -1) {
            exist = surname_array[sur];
        }
    }
    if (exist) {
        localStorage.setItem('invite', exist);
        preloader_wrapp.classList.add('animated', 'rollOut');
        invite_wrapp.style.display = 'block';
        invite_wrapp.classList.add('animated', 'rollIn');
        name_space.innerHTML = exist;
    } else {
        alert('Фамилия не найдена, попробуйте еще раз');
    }
};