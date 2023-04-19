/*
1. string --> "samiran"
2. number --> 12.2, 25, -96
3. booleans --> true / false
4. undefined
5. null
6. BigInt --> 15n or BigInt(15)
7. symbol
*/

/*
truthy value and falsy value
truthy value :
x = "s";

falsy value :
a. undefined
b. null
c. false
d. ""
e. 0
*/

//--------------------------------------------------
/*
//string methods :

let str = "      Samiran      ";
console.log(str);
let str2 = str.trim(); // before and after spaces remove
console.log(str2);

let str3 = str2.toUpperCase();
console.log(str3);

let str4 = str3.toLowerCase();
console.log(str4);

let somePortion = str2.slice(1,5); //to cutout some portion
console.log(somePortion);
*/
//-----------------------------------------------------

//------------------------------------------------
/*
// differance between let and var;
var somthing = 12;
var somthing = 23;
console.log(somthing)

//another way to declear var
b = 25;
console.log(b);

let a = 20;
a = 12;

const pi = 3.14;


//major differance
for(let i = 0; i<5; i++){
    console.log(i);
}

console.log("this is value of i in let: ",i);

for(var i = 0; i<5; i++){
    console.log(i);
}

console.log("this is value of i in var: ",i);
*/
//----------------------------------------------------------



//-------------------------------------------------------
// let name = "samiran";
// console.log(name);

// let secondName = name;
// console.log(secondName);

// let x = null

// if (x) {
//     console.log("inside")
// } else {
//     console.log("nothing")
// }

// x = 12;

// if (x) {
//     console.log("inside")
// } else {
//     console.log("nothing")
// }

// let arr = [];

// console.log(arr);

// arr.push("samiran");
// console.log(arr)
//---------------------------------------------------
//---------------------------------------------------


const body = document.body;
const btn = document.getElementById('btn');

//innerText or textContent
const colorInfo = document.querySelector('.color--info');


//Math.random() --> random number between 0 to 1;
//Math.floor() --> float to int
//console.log(Math.floor(Math.random() * 11));

btn.addEventListener('click', ()=>{
    // let R = Math.floor(Math.random() * 126);
    // let G = Math.floor(Math.random() * 126);
    // let B = Math.floor(Math.random() * 126);

    // body.style.backgroundColor = `rgb(${R},${G},${B})`;

    let h = Math.floor(Math.random() * 361);

    let changeColor = `hsl(${h}, 50%, 50%)`;
    body.style.backgroundColor = changeColor;

    colorInfo.textContent = changeColor;
})




//-------------------------------------------
// const op = document.getElementById('op')
// const apply = document.querySelector("#btn2");

// apply.addEventListener("click", ()=>{
//     console.log(op.value)
// })