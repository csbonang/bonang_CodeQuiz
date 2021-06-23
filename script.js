/*=========Variables==============================================================*/ 
// submit button:         used when user submits initials 
var submitButton = document.getElementById('submit'); 
// currentScore:          user's current score 
var currentScore = 0; 
// displayQuestion:       variable will be used to display current question 
var displayQuestion = document.getElementById('question'); 
// startQuiz:             start button to initiate program
var startQuiz = document.getElementById("start"); 
// highscoresLink:        hyperlink to highscores 
var highscoresLink = document.getElementById('scoresLink'); 
// answer#:               buttons that display potential answers for each question
var answer1 = document.getElementById('ans-1');
var answer2 = document.getElementById('ans-2');
var answer3 = document.getElementById('ans-3');
var answer4 = document.getElementById('ans-4'); 
// displayTime:           used to displays timer 
var displayTimer = document.getElementById('timer'); 
// displatBorder:         displays a border 
var displayBorder = document.getElementById('answerBorder'); 
// userAnswer:            tracks user's choice from question 
var userAnswer = -1; 
// count:                 int that holds question index
var count = -1;
// questionSize:          int that holds number of questions 
var questionSize = 2; 
// userAnsweredAlready:   boolean that checks if user has answered 
var userAnsweredAlready = false; 
// numQuestionsAnswered:  Number of questions answered 
var numQuestionsAnswered = 0; 
// userTimer:             set the timer 
var userTimer = 21; 
// questionAnswered:      boolean that checks if the questions has already been answered
var questionAnswered = false;

/*===========Start of Code======================================================*/ 
/*startQuiz:: once the start button is clicked, loop through the quiz questions*/ 
startQuiz.addEventListener('click', function(event)
{
    console.log("start quiz is being called"); 
    event.preventDefault(); 
    // clear out start screen before the first question is displayed 
    document.getElementById("startHeader").innerHTML = ""; 
    document.getElementById("startInstructions").innerHTML = ""; 
    startQuiz.style.display = "none"; 
    // display the buttons when start is clicked 
    answer1.style.display = "block"; 
    answer2.style.display = "block"; 
    answer3.style.display = "block"; 
    answer4.style.display = "block"; 
    // display link to high scores 
    highscoresLink.style.display = "block"; 
    // call set time function to start timer 
    setTime(); 
    // set the index of the question array to the random number generated and a number it cannot be 
    count = randomCount(questionSize, -1); 
    console.log("Count = ", count); 
    // prompt user with quiz questions 
    loopThruQuestions(); 
}); 

// answer#:: Update userAnswer on click 
answer1.onclick = function(){
    console.log("selected answer1"); 
    userAnswer = 1; 
    console.log("userAnswer: " + userAnswer); 
    userAnsweredAlready = true; 
    loopThruQuestions(); 
}; 
answer2.onclick = function(){
    console.log("selected answer2"); 
    userAnswer = 2; 
    console.log("userAnswer: " + userAnswer); 
    userAnsweredAlready = true; 
    loopThruQuestions(); 
}; 
answer3.onclick = function(){
    console.log("selected answer3"); 
    userAnswer = 3; 
    console.log("userAnswer: " + userAnswer); 
    userAnsweredAlready = true; 
    loopThruQuestions(); 
}; 
answer4.onclick = function(){
    console.log("selected answer4"); 
    userAnswer = 4; 
    console.log("userAnswer: " + userAnswer);
    userAnsweredAlready = true; 
    loopThruQuestions();  
}; 

/* loopThruQuestions:: displays the questions and answers */ 
function loopThruQuestions() {
  
  console.log("In loopThruQuestions"); 
  // qArray: array of questions 
  var qArray = ['Inside which HTML element do we put the JavaScript?','How does a "for" loop start?'];
  // q1_ansArray:arrays of potential answers for question 1 
  var q1_ansArray = ['<javascript>', '<js>', '<script>', '<scripting>']; 
  var q2_ansArray = ['for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)', 'for i = 1 to 5', 'for (i <= 5; i++)']; 
  // update the html with the first question  
  console.log("loopThruQuestions count: ", count); 
  
  // if the timer is greater than 0, then keep displaying questions and answers
  if( userTimer > 0 ){
    if(count == 0 && numQuestionsAnswered != questionSize){
            console.log("In LOOP THRU, COUNT = 0"); 
            // TODO: document.getElementById('question').innerHTML = qArray[count];
            displayQuestion.innerHTML = qArray[count];
            // update the html with the potential answers 
            answer1.textContent = q1_ansArray[0]; 
            answer2.textContent = q1_ansArray[1]; 
            answer3.textContent = q1_ansArray[2]; 
            answer4.textContent = q1_ansArray[3];
        // if the question has already been answered, then display a correct/incorrect message
        if(userAnsweredAlready){
            // question was answered already, increment questions answered 
            numQuestionsAnswered++; 
            console.log("QUESTIONS ASKED: " , numQuestionsAnswered);
            // the switch statement below executes a series of tasks based on the user's answer 
            switch(userAnswer)
            {
                case 1: console.log("incorrect"); 
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    // if incorrect, then decrement timer by 5. 
                    userTimer = userTimer - 5; 
                    console.log("Timer in case 1 has been decremented: ", userTimer); 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break; 
                case 2: console.log("incorrect");
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    userTimer = userTimer - 5; 
                    console.log("Timer in case 2 has been decremented: ", userTimer); 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break;  
                case 3: console.log("correct");
                    // user entered correct score, increase current score 
                    currentScore++;
                    console.log("CORRECT, CURRENT SCORE: ", currentScore); 
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Correct!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    //TODO: if correct, leave timer as is  
                    console.log("Timer in case 3 has not been changed", userTimer); 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                    
                break;  
                case 4: console.log("incorrect"); 
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0);
                    userAnsweredAlready = false; 
                    userTimer = userTimer - 5; 
                    console.log("Timer in case 4 has been decremented", userTimer); 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break; 
            }
            console.log("Setting userAnsweredAlready to: ", userAnsweredAlready); 
            // userAnsweredAlready = false; 
        }
    }
    /* if it is the next question in that array[1], and all the numbers have not been answered
       display the question and potential answers
    */ 
    else if(count == 1 && numQuestionsAnswered != questionSize)
        {
            console.log("In LOOP THRU, COUNT = 1"); 
            // display question
            // TODO: document.getElementById('question').innerHTML = qArray[count];
            displayQuestion.innerHTML = qArray[count];
            // update the html with the potential answers 
            answer1.textContent = q2_ansArray[0]; 
            answer2.textContent = q2_ansArray[1]; 
            answer3.textContent = q2_ansArray[2]; 
            answer4.textContent = q2_ansArray[3];

            if(userAnsweredAlready){
                // question has been answered already, increment questions answered 
                numQuestionsAnswered++; 
                console.log("QUESTIONS ASKED: " , numQuestionsAnswered); 
                // display whether it is correct or incorrect 
                switch(userAnswer)
                {
                    case 1: console.log("incorrect"); 
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                        userTimer = userTimer - 5; 
                        console.log("Timer in case 4 has been decremented", userTimer); 
                        console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break; 
                    case 2: console.log("correct");
                        currentScore++; 
                        console.log("CORRECT, CURRENT SCORE: ", currentScore); 
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Correct!";
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                        console.log("Timer in case2 has not been changed"); 
                        console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break;  
                    case 3: console.log("incorrect");
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                        userTimer = userTimer - 5; 
                        console.log("Timer in case 4 has been decremented", userTimer); 
                         console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break;  
                    case 4: console.log("incorrect"); 
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                        userTimer = userTimer - 5; 
                        console.log("Timer in case 4 has been decremented", userTimer); 
                        console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break; 
                }
                console.log("Setting userAnsweredAlready to: ", userAnsweredAlready); 
                userAnsweredAlready = false; 
             }
        }
        //all questions have been answered 
        else 
        {
            // all questions have been answered --> stop the timer 
            console.log("ALL QUESTIONS ANSWERED, DONE");
            setTime(); 
        }
    }  
    //userTimer has reached time 0 
    else 
    {
        // all questions have been answered --> stop the timer 
        console.log("TIMER REACHED 0, DONE");  
        setTime(); 
    }  
}
/* randomCount:: provides a random number in order to display a random question 
                 from the array. It also safeguards against selecting a question 
                 already asked. Notice, the parameters inlclude numofQuestions 
                 and numCanNotBe. randomCOunt can only provide a random # within 
                 the array size and cannot assign the new question number to one 
                 that has been already used. 
*/ 
function randomCount(numOfQuestions, numCanNotBe) 
{
    var questionSelection = Math.floor(Math.random() * numOfQuestions);
    while(questionSelection == numCanNotBe)
    {
        // generate a new number 
        questionSelection = Math.floor(Math.random() * numOfQuestions);
    }
    console.log("in RANDOM COUNT, FINAL NUM: ",questionSelection); 
    return questionSelection; 
}

/*setTime:: starts the timer, stops the timer, and includes checkpoints 
            to ensure the timer stops when all questions have been 
            answered or time ran out. 
*/             
function setTime() {
    displayTimer.style.display = "block"; 
    // setInterval is a set timer that will execute a specific action or event 
    var timerInterval = setInterval(function() {
    //   displayTimer.textContent = userTimer + " seconds left";
        if(userTimer ===0)
        {
            clearInterval(timerInterval);
            //displayTimer.textContent = "Time Finished: " + userTimer;
        }
        else 
        {
            userTimer--;
            displayTimer.textContent = userTimer + " seconds left";
        }
    }, 1000);
     // quiz time ran out, quiz completed 
     if(userTimer === 0) {
        // stop the timer  
        clearInterval(timerInterval);
        //displayTimer.textContent = "Time Finished: " + userTimer;
        // change color to red 
        displayTimer.style.backgroundColor = "#ffcccb";
        // hide the quiz block, this includes question, all answers, timer, and correct/incorrect
        answer1.style.display = "none"; 
        answer2.style.display = "none"; 
        answer3.style.display = "none"; 
        answer4.style.display = "none"; 
        displayQuestion.style.display = "none"; 
        displayTimer.style.display = "none"; 
        displayBorder.style.display = "none"; 
        console.log("if :: DONE | TIMER | ADDING TIMER | FINAL SCORE: ", currentScore); 
        // display the form that prompts user for initials 
        document.querySelector('.initials').style.display = "block"; 
        submitButton.addEventListener('click', submitInitials);
      }
      // completed questions answered and timer does not = 0 
      else if(numQuestionsAnswered == questionSize && userTimer != 0)
      {
        // stop the timer 
        clearInterval(timerInterval);

        //displayTimer.textContent = "Time Finished: " + userTimer;
        // change the color to red 
        displayTimer.style.backgroundColor = "#ffcccb"; 
        // add the user's time to their points as bonus points for completing the quiz before the deadline
        console.log("==================================");  
        console.log("DONE | TIMER | CURRENT SCORE: ", currentScore); 
        console.log("TIME: ", userTimer); 
        currentScore += userTimer; 
        console.log("else if:: DONE | TIMER | ADDING TIMER | FINAL SCORE: ", currentScore);
        // hide the quiz block, this includes question, all answers, timer, and correct/incorrect
        answer1.style.display = "none"; 
        answer2.style.display = "none"; 
        answer3.style.display = "none"; 
        answer4.style.display = "none"; 
        displayQuestion.style.display = "none"; 
        // example displays the timer but I don't find it necessary because it will be displayed in highscores
        displayTimer.style.display = "none";
        // displayTimer.textContent = "Your Time: " + userTimer; 
        displayBorder.style.display = "none"; 
        console.log("FINAL SCORE: ", currentScore); 
        console.log("==================================");  
        // display the form that prompts user for initials 
        document.querySelector('.initials').style.display = "block"; 
        submitButton.addEventListener('click', submitInitials); 
      }
      // decrement the time 
  }

  /* submitInitials:: the submit button function that assigns the user's score 
     to a variable that is stored in local storage 
  */ 
   function submitInitials(event)
   {
        event.preventDefault(); 
        console.log("in initials!!!");
        var user = document.getElementById('userInitials').value; 
        var userScore = JSON.parse(localStorage.getItem('codeQuizScore')) || []; 
        userScore.push({
            score: currentScore, 
            initialsUser: user, 

        }); 
        console.log("user score: ", userScore); 
        localStorage.setItem('codeQuizScore', JSON.stringify(userScore)); 
        console.log("current Score, timer STOPPED: ", currentScore);
        // load the highscores page 
        window.location = "scores.html"; 
   }