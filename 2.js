console.log('Hello world');
alert("Привет!");
alert("Еще раз")
//---------------------------------------  1  ----------------------
let age = 'myAge';
age = 42;
myAge = age;
alert('myAge');
alert("42");
//----------------------------------------  2 --------------------
const a = 3;
const b = 7;
const c = 2;
alert(`результат: ${a + b + c}`);

let d = 4;
let f = 5;
let e = 1;
alert(`результат: ${d + f + e}`);

alert(`результат: ${12 / 10}`);
//---------------------------------------  3  ----------------------
let myage = '33';
alert(`Мне, ${myage}`);

//-----------------------------------  4  ---------------------------

alert("Приветствую тебя друзья!");

let check = prompt('Сколько тебе лет?');

if (check < 42) {
    alert("true")
} else if (age != 43) {
    alert("false")
}
let result = prompt('Уточни свой возраст');

if (result < 42) {
    alert("Вам меньше 42")
} else if (age != 42) {
    alert("Вам больше 42")
}

let yourAge = confirm("Выберите вариант");
if (yourAge < 42) {
    alert("true")
} else if (yourAge != 42) {
    alert("false")
}
// --- не уверена в правильности выполнения - Вернуть результат функции promt ?!---//
//-----------------------------  5  --------------------------
alert (5 > 4);
alert ('ананас' > 'яблоко');
alert ('2' > '12');
alert(undefined == null);
alert(undefined === null);
alert(null == "\n0\n");

let newName = prompt('Как Вас зовут ?');

if (newName == 'Иван') {
    alert('Привет Иван!')
} else {
    alert("Привет друг!")
} 

let newage = prompt("Введите возраст")

if (newage < 18) {
    alert("Вам вход запрещен")
} else if (newage > 18) {
    alert("Добро пожаловать")
} 
//------------------------------- 6 ----------------------------
let Mth = prompt('Какой сейчас номер месяца?')

//--------------------------  7 не понимаю как ?! --------------------------------

let x = +prompt('Первое число?');
let y = +prompt('Второе число?');

alert(x + y);
alert(x - y);
alert(x / y);
alert(x * y);
//-------------------------  8  ---------------------------------------------------