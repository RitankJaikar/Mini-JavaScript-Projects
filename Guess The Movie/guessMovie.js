//Guess the movie
let movie="Avengers";
let i=1;
while(i<=10){
    let guess=prompt(`Hello User! Guess my favorite movie. Chance count ${i}/10.`);
    if(guess==movie){
        alert(`Congrats! ${movie} is my favorite movie. You Guessed in ${i}/10 chance.`);
        break;
    }
    if(guess=="quit"){
        alert(`Thanks for playing :)`); 
        break;
    }
    i++;
}