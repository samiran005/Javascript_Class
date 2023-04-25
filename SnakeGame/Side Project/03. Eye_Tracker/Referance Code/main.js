const container = document.querySelector(".container");

const eyeLeft = document.querySelector('.eyeLeft')
const eyeRight = document.querySelector('.eyeRight')

container.addEventListener("mousemove", (e)=>{

    console.log(e)

    let x = e.clientX;
    let y = e.clientY;

    eyeLeft.style.top = `${y / 10}%`;
    eyeLeft.style.left = `${(x / 10)- 30}%`;

    eyeRight.style.top = `${y / 10}%`;
    eyeRight.style.left = `${(x / 10)- 30}%`;

})

