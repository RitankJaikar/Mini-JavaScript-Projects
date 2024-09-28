//API call using fetch() - using Promise chaining   //random cat facts
// let url="https://catfact.ninja/fact";
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         //console.log(res.json());
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//result on console

//API call using fetch() - using async and await    //random cat facts
// let url="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res1= await fetch(url);
//         let data1= await res1.json();
//         console.log(data1.fact);
//         let res2= await fetch(url);
//         let data2= await res2.json();
//         console.log(data2.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
//result on console


//API call using axios- using async and await   //random cat facts
let url1="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res= await axios.get(url1);
        return res.data.fact;
    }
    catch(err){
        console.log(err);
    }
}

let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",async () =>{
    let fact = await getFacts();
    let p=document.querySelector("p");
    p.innerText=fact;
});

//API call using axios      //random dog image
let ur2="https://dog.ceo/api/breeds/image/random";

async function randomDog(){
    try{
        let res= await axios.get(ur2);
        return res.data.message;
    }
    catch(err){
        console.log(err);
    }
}

let btn2=document.querySelector(".btn2");
btn2.addEventListener("click",async () =>{
    let link = await randomDog();
    let img=document.querySelector("img");
    img.setAttribute("src",`${link}`);
});