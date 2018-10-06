

    //array of word options
    var computerOptions = ["beta", "html", "cql", "python", "racket", "rust", "kotlin", "simula", "sather", "labview", "ruby", "perl", "swift", "falcon", "erlang"];

    //pick a random word
var computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerPick);
    // var computerPick = word[random];
    // define docUnderscore and wrong letter print to html
var docUnderscore = document.getElementsByClassName("underscore");
var docWrongLetter = document.getElementsByClassName("wrongLetter");
var docWins = document.getElementsByClassName("wins");
var docGuesses = document.getElementsByClassName("guesses");
    // right letter from html
var rightLetter = [];
    // wrong letter array
var wrongLetter = [];
var wins = 0;
var losses = 0;
var guesses = 9;
var wonGame = false;

    //make underscores for work length
function makeUnderscore() {
    underscore = [];
    for (var i = 0; i < computerPick.length; i++) {
        underscore.push("_ ");
        docUnderscore[0].innerHTML = underscore.join("")
    }
        console.log(underscore);
}

function startGame() {
    
    makeUnderscore();
    docGuesses.innerHTML = guesses.toString();
    
}
startGame();

//get users guess
// function 
document.onkeyup = function(event) {
    // console.log(event);
    // change to lower case
    var keyPressed = event.key.toLowerCase();
        console.log(keyPressed);

    //if user guess is right
    if(computerPick.indexOf(keyPressed) > -1) {
        console.log(true);
        //add to right letters
        rightLetter.push(keyPressed);
            console.log(rightLetter);
        //when right replace an underscore in the array
        underscore[computerPick.indexOf(keyPressed)] = keyPressed;
            console.log(underscore);
        docUnderscore[0].innerHTML = underscore.join("");
        // if all underscores are replaced
        if (underscore.join("") == computerPick) {
            wonGame = true;
            alert("You Won!")
            wins++;
        function wins() {
            wins = [];
            for (var i = 0; i == computerPick.lenght; i++) {
                wins.push("");
                docWins[0].innerHTML == wins.join("");
            }
      }
            // document.getElementsByClassName("wins").textContent = "Wins Count: " + wins;
            // docWins.innerHTML = wins.toString();
            // document.getElementsByClassName("myForm").reset();
            //if won restart game after cleared alert

            //add one point to wins
        }
    } else {
        function wrongGuesses() {
            guesses = [];
            for (var i = 0; i !== computerPick.length; i--) {
                guesses.push("");
                docGuesses[0].innerHTML == guesses.join("");
            if (guesses.join("") !== computerPick) {
                wonGame = false;
                alert("You lost. Try again!")
                losses++;
            }
            }
        }
        // add to wrong letters
        wrongLetter.push(keyPressed);
            console.log(wrongLetter);
        docWrongLetter[0].innerHTML = wrongLetter.join("");
        guesses--;
        docGuesses.innerHTML = guesses.toString(); 
        // only have 9 tries
        // if exceeds 9 tries alert you lost
        // add one point to losses
    }
}
function resetUnderscore() {
    guesses = 9;
    wins++;
    startGame();
}
//get it to write to document .innerHTML
// organize global var, then objects then calls
// var letterLocation = computerPick.search(userGuess)
//     //if statements for letter location
//     if (letterLocation === -1) {
//         //TODO:  Fill in logic for the case of no match
//     } else {
//         document.write (userGuess); 
//         // todo: fill in the current word
//     }
//     // for loop to put the dashes for the computer guess

//     for (i = 0; i < computerGuess.length; i++) {
//         document.write("_ ");
//     }

//       // Hide the directions
    //   directionsText.textContent = "";

//get it to write to document .innerHTML
// organize global var, then objects then calls
        //     for (var i =1; i< 10; i++) {
        //         var randomDigit = Math.floor(Math.random() *10);
        //         randomNum += randomDigit;
        //     }
        //     console.log(randomNum)
        // }
        // for (var i =1; i< 10; i++) {
        //     var randomDigit = Math.floor(Math.random() *10);
        //     randomNum += randomDigit;
        // }  