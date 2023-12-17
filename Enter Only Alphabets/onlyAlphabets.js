//Enter Your Name (Only Alphabets)
let h3=document.createElement("h3");
h3.innerText="Enter Your Name (Only Alphabets)"
let input=document.createElement("input");
input.placeholder="Enter Your Name";

let div=document.querySelector("div");
div.insertAdjacentElement("afterend",h3);
div.insertAdjacentElement("afterend",input);

input.addEventListener("input", function(event){
    let str=this.value;
    if((str[str.length-1]>='a' && str[str.length-1]<='z') || (str[str.length-1]>='A' && str[str.length-1]<='Z')){
        console.log("Valid");
        h3.innerText=`${str}`;
    }
    else{
        console.log("InValid");
        this.value="";
        alert("Invalid Input! Please Try Again.");
        h3.innerText="Invalid Input! Please Try Again."
    }
});