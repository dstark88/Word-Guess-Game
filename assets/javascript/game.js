



//array of word options
var computerOptions = ["beta", "html", "cql", "python", "racket", "rust", "kotlin", "simula", "sather", "labview", "ruby", "perl", "swift", "falcon", "erlang"];

//pick a random word
var computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(computerPick);
// define docUnderscore print to html
var docUnderscore = document.getElementsByClassName("underscore");
// right letter from html
var rightLetter = [];
var docWrongLetter = document.getElementsByClassName("wrongLetter");
// wrong letter array
var wrongLetter = [];
//get users guess
var underscore = [];
// underscores on page at start
// var makeUnderscore = [];
var underscore = document.getElementsByClassName("underscore");
//make underscores for work length
function makeUnderscore () {
    underscore = [];
    for (var i = 0; i < computerPick.length; i++) {
    underscore.push("_");
    // document.getElementById("underscore").innerHTML = underscore.join("");
    }
    console.log(underscore);
    docMakeUnderscore.getElementsByClassName("underscore").innerHTML = underscore.join("_");
}

function startGame() {
    // makeUnderscore(); 
    // docMakeUnderscore[0].innerHTML = underscore.join("_");
}
// console.log(makeUnderscore());
startGame();

// I think I need a funtion for loop here instead of the doc.add

document.addEventListener("keypress", event); {
    // key gets logged
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

        docUnderscore[0].innerHTML = underscore.join(" ");
        //if all underscores are replaced
        if (underscore.join("") == computerPick) {
            alert("You Won!")
            //if won restart game after cleared alert

            //add one point to wins
        }
    } else {
        // add to wrong letters
        wrongLetter.push(keyPressed);
        console.log(wrongLetter);
        //print to doc
        docWrongLetter[0].innerHTML = wrongLetter;
        // only have 9 tries
        // if exceeds 9 tries alert you lost
        // add one point to losses
    }
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




    // document.getElementById("game").innerHTML = html;


//       // Hide the directions
    //   directionsText.textContent = "";
