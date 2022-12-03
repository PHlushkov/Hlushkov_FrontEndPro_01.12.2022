const userAge = +prompt("What year were you born?");

if (userAge) {
    alert(2022 - userAge)
} else {
    alert("Шкода, що Ви не захотіли ввести свій(ю) дату народження")
}

const userCity = prompt("What city do you live in?");

if (userCity) {
    switch (userCity) {
        case 'Київ':
            alert("Ви живите в столиці України")
            break;
        case 'Лондон':
            alert("Ти живеш у столиці Англії")
            break;
        case 'Вашингтон':
            alert("Ти живеш у стлиці США")
            break;
        default:
            alert("Ти живеш у місті " + userCity)
            break;
    }
} else {
    alert("Шкода, що Ви не захотіли ввести свій(ю) місце проживання")
}

const userSport = prompt("What sports are you into?");

if (userSport) {
    switch (userSport) {
        case 'Футбол':
            alert("Круто!Хочеш стати Ліонелем Месі?")
            break;
        case 'Хокей':
            alert("Круто! Хочеш стати Вейн Ґрецкі?")
            break;
        case 'Теніс':
            alert("Круто! Хочеш стати Новаком Джоковичем?")
            break;
        default:
            alert("Круто! Що обрав " + userSport)
            break;
    }
} else {
    alert("Шкода, що Ви не захотіли ввести свій(ю) вид спорту")
}