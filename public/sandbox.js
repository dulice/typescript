"use strict";
// console.log('hello');
//lesson - 2
//basic
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    // console.log(input);
});
// ============================================================= 
// lesson -3
// types basic
let character = 'mario';
let age = 20;
let isLoggedIn = true;
// character = 20; ( will raise error because of different type, string cannot assign with number)
character = 'nang';
// age = '20'; ( number type can overwirte with string)
age = 25;
// isLoggedIn = 'yes'; ( not same data type)
isLoggedIn = false;
const area = (diameter) => {
    return diameter * Math.PI;
};
// console.log(area('hello')); (not same data type) 
// console.log(area(3.4));
// ============================================================= 
// lesson - 4 
//arrays
const names = ['john', 'doe', 'emalia'];
// names.push(20); (in string array cannot push number) 
// names[0]  = 20
names.push('pop');
const numbers = [3, 30, 34, 14];
// numbers.push = '20';
// numbers[0] = 'hello';
numbers.push(23);
const mixed = ['nang', 21, 'aye', 32];
mixed.push('kay');
mixed.push(22);
mixed[3] = 'kyaw';
// mixed.push(true);
//objects
let nang = {
    name: 'yoon',
    age: 21,
    hobby: 'eat'
};
nang.name = 'myat';
// nang.skill = ['coding'];
// nang.age = '20'; (different type);
nang = {
    name: 'yoon',
    age: 21,
    hobby: 'eat',
    // skills: ['coding'] (cannot add new key values)
};
// console.log(nang);
// ============================================================= 
// lesson - 5 ( add specific type || explicit type)
let username = [];
username.push('nang');
username.push('kay');
let maixed = [];
maixed.push(20);
maixed.push('nang');
maixed.push(true);
maixed[0] = 30;
let nangOne;
nangOne = {
    name: nang,
    age: 21
};
let nangTwo;
nangTwo = {
    name: 'nang',
    // age: '20',
    age: 21,
    skills: ['javascript', 'typescript']
};
// ============================================================= 
// lesson - 6 ( dynamic(any) type )
let mixing = [];
mixing.push('nang');
mixing.push(21);
// console.log(mixing);
let myself;
myself = { name: 'nang', age: 21 };
// console.log(myself);
// ============================================================= 
// lessong - 7 (better workflow and tsconfig)
// ============================================================= 
// lesson -8 ( function basic)
let greet = () => {
    // console.log('hello world');
};
// greet = 'hello';
let add = (a, b, c = 10, d) => {
    // console.log(a+b);
    // console.log(c);
    // console.log(d);
};
add(3, 5);
add(4, 6, 10, 20);
const minus = (a, b) => {
    return a - b;
};
const logDetail = (uuid, item) => {
    console.log(`${item} has a uuid of ${uuid}.`);
};
// logDetail(134, 'apple');
const greeting = (user) => {
    console.log(`${user.name} says hello.`);
};
// greeting({name: 'nang', uuid: '34f'});
// ============================================================= 
// lesson - 10 ( function signature)
let sayHello;
sayHello = (name, greet) => {
    console.log(`${name} says ${greet}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetails;
logDetails = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
// logDetails({name: 'ae', age: 21});
// ============================================================= 
