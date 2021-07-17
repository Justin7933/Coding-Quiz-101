var totalScore = 0, 
 questionNumber = 0,
 i = 0;

 allQuestions = [{
     question: "What do you call a variable with multiple boolean values?",
     choices: ["variable", "object", "array", "let"],
     correctAnswer: "array"
 },
 {
     question: "A useful tool for debugging during development is_______.",
     choices: ["wrench", "Chrome dev tools", "Visual Studio Code", "keyboard"],
     correctAnswer: "Chrome dev tools"
 },
 {
     question: "Where will you find most of the answers to the questions you will have in your coding career?",
     choices: ["Teachers", "Coworkers", "User manual", "The Internet"],
     correctAnswer: "The Internet"
 },
 {
     question: "What should you do when using git before you push a project to the repository?",
     choices: ["pull", "bop it", "save it", "close it"],
     correctAnswer: "pull"
 }
];

var counterValue = 20;



var mainContent = $('#mainContent'); 

function correctGuess() { 
 totalScore ++; 
 questionNumber ++;

 var updatePage = question(questionNumber);

 localStorage.setItem("scoreCount", totalScore);

 $('#mainContent').html(updatePage); 

 if(questionNumber < 4){
     var updatePage = question(questionNumber);

     $('#mainContent').html(updatePage); 

 }


};

function incorrectGuess() {
 counterValue -= 5;
 totalScore = 0;
 questionNumber ++;

 var updatePage = question(questionNumber);

 $('#mainContent').html(updatePage);

 };


     function welcome() {
 mainContent.html('<h2>Welcome to Coding 101!</h2>' + '<br />' + 
 '<h5>Click Start to begin!</h5>' 
 + '<button type="button" class="btn btn-primary" id="startQuizBtn">Start Quiz!</button>');
 document.getElementById("startQuizBtn").addEventListener("click", function() {question(i)});

 document.getElementById("startQuizBtn").addEventListener("click", function() {timer()})
};

function timer() {
var timer = setInterval(function(){
 counterValue -= 1;
 $("#timer-value").html(counterValue)

 if (counterValue <= 0) {
     clearInterval(timer)
     displayScore()
 }
},1000)
}



window.onload = function () {
 this.welcome();
};

function question(i) {
 if (i < 4) {
 mainContent.html('<div id="questionDiv">' +
     '<h2>Question ' + (i + 1) + '<h2>' +
     '<h3>' + allQuestions[i].question + '</h3>' +
     '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[0] + '" checked="yes">' + allQuestions[i].choices[0] + '</input>' + '<br />' +
     '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + allQuestions[i].choices[1] + '</input>' + '<br />' +
     '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[2] + '">' + allQuestions[i].choices[2] + '</input>' + '<br />' +
     '<input type="radio" class="radiobtn" name="questionChoices" value="' + allQuestions[i].choices[3] + '">' + allQuestions[i].choices[3] + '</input>' + '<br />' +
     '<button type="button" class="btn btn-primary" id="submitButton">Submit</button>' + '</div>' );
 } else {
     chooseNextScreen();
 };


 $('#submitButton').on('click', function() {

     if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
         correctGuess();
     } else {
         incorrectGuess();
     } 

 });
};


function chooseNextScreen(){
 if (questionNumber < 4) {
     question();
 } else {
     displayScore();
 }
 };


function displayScore() {
 
 $('#mainContent').html('<h2>Well Done!</h2>' + '<h4> You scored ' + totalScore + '!</h4>' + '<h4>Please enter your name for the end screen</h4>' +
 '<hr />' + '<form>' + '<input class="form-control" id="initialsBox" type="text" placeholder="Your Name">' + '<button type="button" class="btn btn-primary" id="hiScoreSubmitBtn">Submit</button>' + '</form>');
 
 $('#hiScoreSubmitBtn').on('click', function(event) {
     localStorage.setItem(initialsBox[0].value, totalScore);
     mainContent.html('<h1>' + initialsBox[0].value + ' scored a ' + totalScore + '!' + '</h1>');
 });
 var initialsBox = $("#initialsBox");
};


question(questionNumber);