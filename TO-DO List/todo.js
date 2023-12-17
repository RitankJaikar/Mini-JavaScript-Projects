// TO-DO list
let todo=[];
while(true){
    let input=prompt("Enter your choice: 'list' 'add' 'delete' 'quit' ");
    if(input=="list"){
        console.log("--------------------");
        if(todo.length==0){
            console.log("No task added! Please add a task.");
        }
        else{
            i=1;
            for(task of todo){
                console.log(i,task);
                i++;
            }
        }
        console.log("--------------------");
    }
    else if(input=="add"){
        while(true){
            let add=prompt("Enter tasks you want to add or type 'done' to exit:");
            if(add=="done"){
                break;
            }
            todo.push(add);
            console.log(`${add} is added in your todo list!`);
        }
    }
    else if(input=="delete"){
        if(todo.length==0){
            console.log("No task added! Please add a task.");
        }
        else{
            console.log("--------------------");
            let i=1;
            console.log("Your current todo list:");
            for(task of todo){
                console.log(i,task);
                i++;
            }
            console.log("--------------------");
            let idx=prompt(`Please enter task (1 to ${todo.length}) number you want to delete`);
            todo.splice(idx-1,1);
            console.log("--------------------");
            console.log("Your todo list after delete:");
            i=1;
            for(task of todo){
                console.log(i,task);
                i++;
            }
            console.log("--------------------");
        }
    }
    else if(input=="quit"){
        console.log("Thanks for using TO-DO app.");
        break;
    }
    else{
        console.log("Wrong input!!");
    }
}