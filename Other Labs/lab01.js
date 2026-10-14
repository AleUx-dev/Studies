let name = "Ice cream";
let shopInfo = {
    owner: "Jane",
    adress: "24 Wall street",
    open: true
};
let flavors = ["Vanilla", "Strawberry", "Mango", "Peach", "Bubblegum" ];
let playerScore = 0;



//Iterator function that closes the shope when it hits 10
for (let i = 0; i <= 10; i++ ){
   console.log("Shop on", shopInfo.adress, "is open now!");
   if (i==10){
    console.log("Shop on", shopInfo.adress, "is closed!");
}
}


//Second and third call from an array
console.log ("Second flavor", flavors[1], "Third flavor", flavors[2]);


//Player score add function that returns even scores and "Missed!" at odds
function displayScore(){
    playerScore++;
    if (playerScore % 2 == 0) {
    console.log("Score", playerScore);
    }
    else(
        console.log("Missed!")
    )
    
}

// display player score result
displayScore();
displayScore();
displayScore();
displayScore();
displayScore();
displayScore();
displayScore();
displayScore();