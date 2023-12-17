// Search For Universities By Country by updating query strings
let url1="http://universities.hipolabs.com/search?country=";

async function universities(country){
    try{
        let res= await axios.get(url1+country);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}

let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",async () =>{
    let country=document.querySelector(".input1").value;
    let cllgs = await universities(country);
    showCllg(cllgs);
});

function showCllg(cllgs){
    let ul=document.querySelector(".list1");
    ul.innerText="";
    for(let cllg of cllgs){
        let li=document.createElement("li");
        li.innerText=cllg.name;
        ul.append(li);
    }
}

// Search For Indian Universities By State
let url2="http://universities.hipolabs.com/search?country=india";

async function universities(){
    try{
        let res= await axios.get(url2);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}

//To display all States
let p=document.querySelector("p");
async function displayStates(){
    let cllgs = await universities();
    let states=[];
    for(let cllg of cllgs){
        let state=cllg["state-province"];
        if(states.indexOf(state)==-1){
            states.push(cllg["state-province"]);
        }
    }
    p.innerText=`${p.innerText} ${states}`;
}
displayStates();

let btn2=document.querySelector(".btn2");
btn2.addEventListener("click",async () =>{
    let cllgs = await universities();
    let ul=document.querySelector(".list2");
    ul.innerText="";
    for(let cllg of cllgs){
        let li=document.createElement("li");
        let state=document.querySelector(".input2").value;
        if(cllg["state-province"]==state){
            li.innerText=cllg.name;
            ul.append(li);
        }
    }
});