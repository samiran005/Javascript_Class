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

const container = document.querySelector('.container');

//innerHTML
// container.innerHTML += '<div class="ele">1</div>';

for(let i = 1; i < 5; i++){
    container.innerHTML += `<div class="ele">${i}</div>`;
}