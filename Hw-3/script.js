//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let num = +prompt();
console.log(num)
if (num !== 0) {
    document.write(`<h1>Вірно</h1>`)

}
else
{
document.write(`<h1>Невірно</h1>`)
}*/


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*let time = +prompt(`Time`);
if (time > 0 && time <= 15 ) {
    document.write(1)
}
else if (time >15 && time <= 30 ) {
    document.write(2)
}
else if (time > 30  && time <= 45)  {
    document.write(3)
}
else if (time > 45 && time <= 59) {
    document.write(4)
}*/


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

/*let day = +prompt(`Day?`)

if (day > 0 && day <=10){
    document.write(1)
}
else if(day >10 && day <=20){
    document.write(2)
}
else if(day >20 && day <=31){
    document.write(3)
}*/


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

/*
let month = +prompt(`Month?`)

switch (month) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}
*/


//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

