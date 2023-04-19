/*
"Javascipt" and "EcmaScript" is the same language.
    Ecma is a company who made javaScript globaly excaptable to all browser by stadariging it.

From ES5(EcmaScript version 5 / ES2016) it is called mordern Javascript.
*/

/*---------------------------------------------*/
//1. how to connect your javascript file with html and what is the best way.
//2. how to print on console.
//3. comments lines
//4. variable (let, var, const) and strict mode.
//5. Data types and 'typeof' operator.

const box = document.querySelector(".box1");

box.style.border = "5px solid black";

let x = 0;
let width = window.innerWidth;

window.addEventListener("keydown", (e)=>{
    console.log(e.key);



    if(e.key === 'w'){
        if (x + 110 > width) {return};

        box.style.marginLeft = `${x += 9}px`;
    }
    if(e.key === 'v'){
        box.style.marginLeft = `${x --}px`;
    }
})

console.log(window.innerWidth)
console.log(window);



