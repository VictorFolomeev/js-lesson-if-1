const age = 15;
const gender = 'муж' // жен

if (age > 18) {
    console.log("Вам больше 18")
}

if (gender.toLocaleLowerCase() === 'муж') {
    console.log('Вам налево');
}

if (gender.toLocaleLowerCase() === 'жен') {
    console.log('Вам направо');
}