
const container = document.querySelector('.container');

const cardData = ['One-1','Two-2','Three-3','Four-4','Five-5','Six-6','Seven-7','Eight-8','Nine-9'];

cardData.forEach((data)=>{
    container.innerHTML += `<div class='ele'>${data}</div>`;
})


const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    cardData.sort(()=> 0.5 - Math.random());

    container.innerHTML = '';
    cardData.forEach((data)=>{
        container.innerHTML += `<div class='ele'>${data}</div>`;
    })
})


// Array

/*
let arr = ["shani", 12, undefined, null, true, 12n];

// console.log(arr);
// console.log(arr.length)

//--> Array.isArray(arrName)
// console.log(Array.isArray(arr));


// let num = null;
// console.log(typeof(num));

let arr1 = [1,2,6,5]
// Array mathod
// push
    arr1.push("samiran"); //add to end
    console.log(arr1);
// pop
    arr1.pop(); //remove from end
    console.log(arr1)

// unshift
    arr1.unshift("shani"); //add at beginning
    console.log(arr1);

// shift
    arr1.shift(); //remove from beginning
    console.log(arr1);
*/


// let str = '22';
// let num = 29;

// *****  string to number
// console.log(Number(str) + num);
// console.log(+str + num)


// ***** number to string
// console.log(typeof String(num));
// console.log(typeof (num + ''));

// template string
// let str = `this is 1 + 2 : ${1 + 2}`;
// console.log(str);

//1. if else
//2. loop (for, while, do while)
//3. ternary operator
//4. switch
//4. jumping statement


//**** function
/* 
let a=10, b=20;

//1. function Decleartion
function func(x, y){
    console.log(x,y);
}
func(a,b);

//2. function Expression
let func2 = function(){
    console.log(a, b);
}
func2();

//3. Arrow fucntion
let func3 = ()=>{
    console.log("this is arrow function");
}

func3();

// let func4 = (event)=>{

// }

// window.addEventListener('click', func4)

// function factoial(a){
//     let prevA = 1;
//     if(a > 1){
//         let y = prevA * a
//         factoial(a - 1);
//     }
// }

// let x = 5;

// console.log(factoial(x));
*/


// const container = document.querySelector('.container');

// let func = ()=>{
//     console.log(window.scrollY)
// }

// container.addEventListener("scroll", func)

// window.addEventListener("scroll", func)

//Array Methods
// let arr1 = [5,9,7,1,6]
// //*** forEach method *** //forEach return undefined
// arr1.forEach((ele,index)=>{
//     console.log(index + " : " + ele);
// }) //it will take callback fucntion

// //*** map method *** //same as forEach but it can return
// let value = arr1.map((ele)=>{
//     return ele * ele;
// })
// console.log(value);

// //*** sort method ***
// let arr1 = [5,9,7,1,6]

// // arr1.sort((a,b)=> b - a)
// arr1.sort(()=> 0.5 - Math.random()); //for random

// console.log(arr1);

// let arr2 = ['a', 'x', 'n', 'p'];
// // let arr2 = [5,9,7,1,6]
// // arr2.sort();
// // arr2.reverse();

// arr2.sort(()=> 0.5 - Math.random()); //for random

// console.log(arr2);




//******** New Element add **********

// const container = document.querySelector('.container');

// //innerHTML
// // container.innerHTML += '<div class="ele">1</div>';

// for(let i = 1; i < 5; i++){
//     container.innerHTML += `<div class="ele">${i}</div>`;
// }


/*****************************/
/*
//Primitive Type
let x = 5;
let y = x;

console.log("Before");
console.log("x :",x);
console.log("y :",y);

x = 20;

console.log("After");
console.log("x :",x);
console.log("y :",y);
*/

/*
//Referance Type
let arr1 = [1,2,5];
let arr2 = arr1; //address 

console.log("Before");
console.log("arr1 :",arr1);
console.log("arr2 :",arr2);

arr1.push(99);

console.log("After");
console.log("arr1 :",arr1);
console.log("arr2 :",arr2);
*/


// function addTwoNumber(a,b){
//     return a + b;
// }

// console.log(addTwoNumber(12,63));
// console.log(addTwoNumber);

// let x = function(a,b){
//     return a + b;
// }


// // console.log(addTwoNumber2(12,63));

// const arr1 = [1,2,9]

// arr1.forEach((ele, index)=>{
//     console.log(index + " : " + ele);
// })


// function eventFunc(){

// }

// // window.addEventListener("click",eventFunc)

// let age = 12;
// let variable = `my age is ${age}`;

// console.log(variable);


// let a = 500;
// let count = 0;

// while(a){
//     a = Math.floor(a / 10);
//     count++;
// }

// console.log(count);

// window.addEventListener('keydown',(e)=>{
//     switch(e.key){
//         case 'w':
//             console.log("Hi there this is me!!!")
//             break;
//     }
// })

