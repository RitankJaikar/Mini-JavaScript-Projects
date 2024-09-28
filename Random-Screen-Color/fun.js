//random body color using recursion
let body=document.querySelector("body");
let inc=document.querySelector(".increase");
let dec=document.querySelector(".decrease");
let speed=document.querySelector(".speed");

let delay=200;
speed.innerText=delay;

inc.addEventListener("click",()=>{
    delay=delay+100;
    speed.innerText=delay;
});
dec.addEventListener("click",()=>{
    delay=delay-100;
    speed.innerText=delay;
});

function changeColor(){
    setTimeout(()=>{
        let Rnum1=Math.floor(Math.random()*256);
        let Rnum2=Math.floor(Math.random()*256);
        let Rnum3=Math.floor(Math.random()*256);
        body.style.backgroundColor=`rgb(${Rnum1},${Rnum2},${Rnum3})`;
        console.log(`Color changed to rgb(${Rnum1},${Rnum2},${Rnum3})`);
        changeColor();
    },delay);
}

changeColor();