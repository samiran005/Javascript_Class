
// Dom --> Document Object Model

/* 
//------------------------
//Single Element selector
const player = document.querySelector(".player");
// console.log("this is single seletor : ",player)
const idSelectorElement = document.getElementById('play');

//-----------------------
//multiSelector
const classElements = document.querySelectorAll('.player');
// console.log("this is muli seletor : ",classElements)
const classSelectorElement = document.getElementsByClassName('player');
*/

const player = document.querySelector(".player");

let positionX = 1
let positionY = 1


setInterval(()=>{
    player.style.gridArea = `${positionX++}/${positionY}`;
},300)

window.addEventListener("keydown", (e)=>{
    if(e.key === 'w'){
        positionY += 1
    }
})
