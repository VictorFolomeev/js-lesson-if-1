let age = null;
const gender = 'муж' // жен

age = +age;

if(!isNaN(age)) {
    if (age > 18) {
        console.log("Вам больше 18")
    } else if (age < 18) {
        console.log("Вам меньше 18 лет")
    } else if (age === 18) {
        console.log("Вам 18 лет")
    } else {
        console.log('Укажите Ваш возраст')
    }    
} else {
    console.log('Введите корректные данные')
}


if (gender.toLocaleLowerCase() === 'муж') {
    console.log('Вам налево');
}

if (gender.toLocaleLowerCase() === 'жен') {
    console.log('Вам направо');
}