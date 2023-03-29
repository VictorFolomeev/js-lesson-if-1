// Проверка возраста //

// let age = null;
// const gender = 'муж' // жен

// age = +age;

// if(!isNaN(age)) {
//     if (age > 18) {
//         console.log("Вам больше 18")
//     } else if (age < 18) {
//         console.log("Вам меньше 18 лет")
//     } else if (age === 18) {
//         console.log("Вам 18 лет")
//     } else {
//         console.log('Укажите Ваш возраст')
//     }    
// } else {
//     console.log('Введите корректные данные')
// }


// if (gender.toLocaleLowerCase() === 'муж') {
//     console.log('Вам налево');
// }

// if (gender.toLocaleLowerCase() === 'жен') {
//     console.log('Вам направо');
// }
// // Возраст
  
// Тернарный оператор

// const isAdmin = true;

// console.log(`Добро пожаловать: ${
//     isAdmin
//     ? 'Администратор'
//     : 'Пользователь1'
// }`)


// const typeUser = "admin"; // user, guest, bot

// switch (typeUser) {
//     case 'admin':
//         console.log('Вы администратор');
//         break;
//     case 'user':
//         console.log('Вы пользователь');
//         break;
//     case 'quest':
//         console.log('Вы гость');
//         break;
//     case 'bot':
//         console.log('Вы бот');
//         break;

//     default:
//         console.log('Неизвестный тип пользователь')
//         break;    
// }