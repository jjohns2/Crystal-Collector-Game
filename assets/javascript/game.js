



    
$(document).ready(function (){

    console.log("ready!")
    var randomNumber = 0;
    var purpleGemNumber = 0;
    var grayGemNumber = 0;
    var orangeGemNumber = 0;
    var blueGemNumber = 0;

    function randomNumberGenerator() {
    //Randomly generated number with a min/max  
    randomNumber = Math.floor(Math.random()*101+19);
    //displaying randomly generated number in DOM
    document.getElementById("goalNumber").innerHTML = randomNumber;
    }




//Crystals with assigned values
//value is randomized per game (1-12)


function randomGemgenerator() {
    purpleGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Purple Gem's value is: " + purpleGemNumber); 

    grayGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Gray Gem's value is: " + grayGemNumber);


    orangeGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Orange Gem's value is: " + orangeGemNumber);

     blueGemNumber = Math.floor(Math.random() * 12) + 1;
    console.log("Blue Gem's value is: " + blueGemNumber);
}

//Call functions to start
randomNumberGenerator ()
randomGemgenerator ()


//Ensure Crystals can make it to randomly generated number
//on click functions


//Keeping track of users score when clicking 
//displaying score in DOM

//Wins
	//storing wins
    //reseting game
    //setting variables to beginning

//Loses
	//storing loses
	//reseting game
//setting variables to beginning

//Game Start




});

