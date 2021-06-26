var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["green","red","yellow","blue"];
var level = 0;
var started = false;
var buttonClicked; 
var currentLevel = 0;

function nextSequence(){
    if(!started){
        document.removeEventListener("keydown", nextSequence);
    }
    started = true;
    randomColor = buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomColor);
    showButton(randomColor);
    ++level;
    $("#level-title").html("Level: " + level);
    userClickedPattern = [];
    currentLevel = 0;
    
}

$(".btn").on("click", function(event){
    buttonPressed = event.currentTarget.id;
    userClickedPattern.push(buttonPressed);
    showButton(buttonPressed);
    checkAnswer(currentLevel++);
});

if (!started){
    document.addEventListener("keydown", nextSequence);
}

//will generate animation and produce a sound for the concerned button
function showButton(buttonColor){

    var chooseButton = $("." + buttonColor);
    chooseButton.addClass("pressed");
    var buttonSound = new Audio("sounds/" + buttonColor + ".mp3");
    buttonSound.play();
    setTimeout(function(){
        chooseButton.removeClass("pressed");
    },100);
}

// function takeInput(){
//     var buttonColor;
//     $("div").on("click", function(event){
//         buttonColor =  event.srcElement.id;
//         console.log(buttonColor);
//         switch(buttonColor){
//             case "green":
//                 showButton(0);
//                 return 0;
//             case "red":
//                 showButton(1);
//                 return 1;
//             case "yellow":
//                 showButton(2);
//                 return 2;
//             case "blue":
//                 showButton(3);
//                 return 3;
//             default :
//                 alert("defaultran");
//                 takeInput();
//         }
//     });
// }

// function increaseLevel(randomSequence){
//     var newNumber=getRandomNumber();
//     console.log(newNumber);
//     console.log(randomSequence);
//     showButton(newNumber);
//     return randomSequence.push(newNumber);
// }

//reset game pattern, again make a sequence, level = 0
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);
    var gameOverSound = new Audio("sounds/wrong.mp3");
    gameOverSound.play();
    $("#level-title").html("Not that easy bitches💀! Try again by pressing any key.")
    started = false;
    gamePattern = [];
    level= 0;
    if(!started){
        document.addEventListener("keydown", nextSequence);
    }
}



// function playy(randomSequence){
//     increaseLevel(randomSequence);
//     var level =randomSequence.length;
//     var buttonColor, buttonNumber;
//     var i=0;
//     $(".btn").on("click",function(event){
//         console.log(event);
//         buttonColor =  event.srcElement.id;
//         switch(buttonColor){
//             case "green":
//                 buttonNumber = 0;
//                 break;
//             case "red":
//                 buttonNumber = 1;
//                 break;
//             case "yellow":
//                 buttonNumber = 2;
//                 break;
//             case "blue":
//                 buttonNumber = 3;
//                 break;
//         }showButton(buttonNumber);

//         if(buttonNumber === randomSequence[i]){
//             ++i;
//         }
//         else{
//             gameOver();
//             return;
//         }
//         if(i===level){
//             playy(randomSequence);
//         }
        
//     });
    
//     console.log("ot");
// }
    



// function checkPattern(level){
//     console.log("checking pattern");
//     for (var i = 0; i< level; ++i){
//         console.log("inside loop");
//         console.log(gamePattern[i]);
//         console.log(userClickedPattern[i]);
//         if (gamePattern[i] == userClickedPattern[i]){
//             console.log("right answer");
//         }
//         else 
//         {
//             return;
//         }
//     }
//     nextSequence();
    
// }
function checkAnswer(currentLevel1){
    if (userClickedPattern[currentLevel1] === gamePattern[currentLevel1]){
        console.log("correct!" +currentLevel1+ userClickedPattern[currentLevel1]+gamePattern[currentLevel1]);
        ++currentLevel1;
    }
    else {
        console.log("incorrect" + userClickedPattern[currentLevel1]+gamePattern[currentLevel1]);
        gameOver();
        return;
    }
    if (currentLevel1 === level){
        setTimeout(nextSequence,1000);
    }
}
// function fetchButtonOnClick(){
//     var fetchedButton;
//     $(".btn").on("click", function(event) {
        
//         fetchedButton = event.currentTarget.id;
//         // clickoff();
//         return fetchedButton;
        
//         console.log(fetchedButton);
//     });
//     //console.log(fetchedButton);
    
// }
// function clickoff(){
//     $("btn").off("click");
// }
// console.log(fetchButtonOnClick());



