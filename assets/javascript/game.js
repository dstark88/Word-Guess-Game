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
    var docLosses = document.getElementsByClassName("losses");
    // right letter from html
    var rightLetter = [];
    // wrong letter array
    var wrongLetter = [];
    var wins = 0;
    var losses = 0;
    var guesses = 9;

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
    document.onkeyup = function (event) {
        var keyPressed = event.key.toLowerCase();
        console.log(keyPressed);
        //if user guess is right
        if (computerPick.indexOf(keyPressed) > -1) {
            //add to right letters
            rightLetter.push(keyPressed);
            console.log(rightLetter);
            //when right replace an underscore in the array
            underscore[computerPick.indexOf(keyPressed)] = keyPressed;
            docUnderscore[0].innerHTML = underscore.join("");
            // if all underscores are replaced
            if (underscore.join("") == computerPick) {
                alert("You Won!")
                wins++;
                docWins[0].innerHTML = "Wins Count: " + wins;
                resetUnderscore();

                // computer picks a word from the array of computer options     
            }
            // when wrong letter is pushed and they run out of guesses and lose    
        } else {
            wrongLetter.push(keyPressed);
            docWrongLetter[0].innerHTML = wrongLetter.join("");
            guesses--;
            docGuesses[0].innerHTML = "Remaining Guesses: " + guesses;
            if (guesses == 0) {
                alert("You lost! Try again!");
                losses++;
                docLosses[0].innerHTML = "Loss Count: " + losses;
                resetUnderscore();
            }
        }
    }

    function resetUnderscore() {
        computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        console.log(computerPick);
        wrongLetter = [];
        docWrongLetter[0].innerHTML = wrongLetter;
        guesses = 9;
        docGuesses[0].innerHTML = "Remaining Guesses: " + guesses;
        startGame();
    }