//Gussing the number
alert("WELCOME TO GUESS THE NUMBER GAME")
let min=parseInt(prompt("Enter min of the Range:"));
let max=parseInt(prompt("Enter max of the Range:"));
let rNum=Math.floor(Math.random()*(max-min+1))+min;
while(true){
    let guess=prompt(`Guess the Number from ${min} to ${max}:\nType "quit" to quit the game.`);
    if(guess=="quit"){
        alert(`You Quit.    [Ans-${rNum}]\nThanks for Playing :)`);
        break;
    }
    else if(guess==rNum){
        alert(`Congrats! You guessed Right. [Ans-${rNum}]\nThanks for Playing :)`);
        break;
    }
    if(guess<rNum){
        alert("Hint: Higher :)");
    }
    else{
        alert("Hint: Lower :)");
    }
}




//best way/formula to generate random integers in range of min and max  [min,max]
// let rNum=Math.floor(Math.random()*(max-min+1))+min;