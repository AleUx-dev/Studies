
console.log("Hello World");

let candy = [ 
    {
    "Type": "Chocolate",
    "Name": [
        "Chocolate sticks", 
        "Chocolate bars", 
        "Chocolate coins",
        "Chocolate truffles",
        ],
    "Message": [
        "You would like Willy Wonka",
        "Delicious and sweat. This day is a cheat!",
        "What is the best kind of chocolate and why its Milk Chocolate?"
    ]
    },
    {
        "Type": "Gummy",
        "Name": [
            "Gummy bears",
            "Gummy worms",
            "Gummy rings",
            "Gummy snakes",
        ],
        "Message": [
            "It goes boioioioioing",
            "U Jelly?",
            "Delicious but nothing nutritious",
        ]
    },
    {
        "Type": "Hard Candy",
        "Name": [
            "Candy canes",
            "Jawbreakers",  
            "Lollipops",
        ],
        "Message": [
            "Was that a crunch of candy or your teeth?",
            "Munch crunch munch crunch",
            "So many treats but so little time",
        ]
    }
];

function randomCandyGen() {
    let randomCandy = Math.floor(Math.random() * candy.length);
    let randomCandyName = Math.floor(Math.random() * candy[randomCandy].Name.length);
    let randomCandyMessage = Math.floor(Math.random() * candy[randomCandy].Message.length);
    
   
   // $("#candyResult").text(candy[randomCandy].Type + " " + candy[randomCandy].Name[randomCandyName] + " " +  candy[randomCandy].Message[randomCandyMessage])
return ("You Get" + " " + candy[randomCandy].Type + " " + candy[randomCandy].Name[randomCandyName] + " " +  candy[randomCandy].Message[randomCandyMessage])
};



document.getElementById('candyButton').addEventListener('click', function(e){ 
    e.preventDefault();
    document.getElementById("candyResult").innerHTML = randomCandyGen();
   
});





//console.log(candy[randomCandy].Type[randomCandyType], candy[randomCandy].Name[randomCandyName])
/*
console.log(candy[randomCandy]);
console.log(candy[randomCandy].Type);
console.log(candy[randomCandy].Type[randomCandyType]);
*/