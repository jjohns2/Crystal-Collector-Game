//start   
$(document).ready(function (){

    console.log("ready!")
    var randomNumber = 0;
    var purpleGemNumber = 0;
    var grayGemNumber = 0;
    var orangeGemNumber = 0;
    var blueGemNumber = 0;
    var Playscore = 0;
    var Win = 0;
    var Loss = 0;

    function randomNumberGenerator() {
    //Randomly generated number with a min/max  
    randomNumber = Math.floor(Math.random()*101+19);
    //displaying randomly generated number in DOM
    document.getElementById("goalNumber").innerHTML = randomNumber;
    }


//Crystals with assigned values
//value is randomized per game (1-12)


function randomGemgenerator() {
    //purple gem
    purpleGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Purple Gem's value is: " + purpleGemNumber); 

    //gray gem
    grayGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Gray Gem's value is: " + grayGemNumber);

    //orange gem
    orangeGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Orange Gem's value is: " + orangeGemNumber);

    //blue gem
     blueGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Blue Gem's value is: " + blueGemNumber);
}

//Call functions to start
randomNumberGenerator ()
randomGemgenerator ()


//Ensure Crystals can make it to randomly generated number -- opt

/
$("#purple-gem").on("click", function() {
    Playscore = Playscore + purpleGemNumber;
    $("#playerScore").html(Playscore);

    if (Playerscore == randomNumber){
        gameWin();
      }
      else if (Playerscore > randomNumber){
        gameLoss();
      } 
});


$("#gray-gem").on("click", function() {
    Playscore = Playscore + grayGemNumber;
    $("#playerScore").html(Playscore);

    if (Playscore == randomNumber){
        gameWin();
      }
      else if (Playscore > randomNumber){
        gameLoss();
      } 

});

$("#orange-gem").on("click", function() {
    Playscore = Playscore + orangeGemNumber;
    $("#playerScore").html(Playscore);

    if (Playscore == randomNumber){
        gameWin();
      }
      else if (Playscore > randomNumber){
        gameLoss();
      } 
});

$("#blue-gem").on("click", function() {
    Playscore = Playscore + blueGemNumber;
    $("#playerScore").html(Playscore);

    if (Playscore == randomNumber){
        gameWin();
      }
      else if (Playscore > randomNumber){
        gameLoss();
      } 
});

//Wins
	//storing wins
    //reseting game
    //setting variables to beginning
    function gameWin(){
        alert("You did it! You won!");
          Win++; 
          $("#Wins").html("Wins:" + Win);
        }


//Loses
	//storing loses
	//reseting game
//setting variables to beginning

function gameLoss(){
    alert("You lost. Try again?");
      Loss++; 
      $("#Losses").html("Losses: " + Loss);
    }

    //on-click functions for gems

});

