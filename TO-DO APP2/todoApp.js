//TODO APP

//add
let task=document.querySelector("#task");
let add=document.querySelector("#add");

add.addEventListener("click",function(event){
    let str=task.value; //Entered Task
    if(str==""){
        console.log("Please Enter A Task")
        return;
    }
    let li=document.createElement("li");
    li.innerHTML=`<span>${str}</span> &nbsp;&nbsp;&nbsp;&nbsp;`; 
    let addHere=document.querySelector("#addHere");
    addHere.insertAdjacentElement("beforeend",li);
    task.value="";
    // delete button
    let delBtn=document.createElement("button");
    delBtn.innerText="Del";
    li.append(delBtn);
    // delBtn.classList.add("delete");              //both not working since we are
    // //delBtn.setAttribute("class","delete");     //giving class to new button created
});

// //delete: works for only default tasks, not working for new button elements added
// let dels=document.querySelectorAll(".delete");
// for(let i=0;i<dels.length;i++){
//     dels[i].addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }

//delete: using Event Delegation Method
let ul=document.querySelector("#addHere");
ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.dir(event.target);
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
});

//remove
let rTask=document.querySelector("#removeTask");
let remove=document.querySelector("#remove");

remove.addEventListener("click",function(event){
    let str1=rTask.value; //Entered Task to Remove
    if(str1=="")    return;
    let lis=document.querySelectorAll("li");
    let found=false;
    for(li of lis){
        let str2=li.firstChild.innerText;
        if(str1==str2){
            li.remove();
            found=true;
        }
    }
    if(found==true){
        console.log("Task found and successfully deleted!");
    }
    else{
        console.log("Task not found!");
    }
    rTask.value="";
});