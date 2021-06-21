var questionAnswered = false;
var stats = 
{
    score: 0, 
    highest: 0, 
    initial: ""
}; 

// start button to initiate program
var startQuiz = document.getElementById("start"); 
// class that contains all the buttons 
var answerButtons = document.getElementsByClassName("questionBlock"); 
// buttons that display potential answers for each question
var answer1 = document.getElementById('ans-1');
var answer2 = document.getElementById('ans-2');
var answer3 = document.getElementById('ans-3');
var answer4 = document.getElementById('ans-4'); 
// displays a border 
var displayBorder = document.getElementById('answerBorder'); 
// tracks user's choice from question 
var userAnswer = -1; 
// question index
var count = -1;
// number of questions 
var questionSize = 2; 
// CHECK if user has answered 
var userAnsweredAlready = false; 

// once the start button is clicked, loop through the quiz questions 
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
    // set the index of the question array to the random number generated and a number it cannot be 
    count = randomCount(questionSize, -1); 
    console.log("Count = ", count); 
    // prompt user with quiz questions 
    loopThruQuestions(); 
}); 

// Update userAnswer on click 
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

// go through the questions 
function loopThruQuestions() {
  
  console.log("In loopThruQuestions"); 
  // qArray:: array of questions 
  var qArray = ['Inside which HTML element do we put the JavaScript?','How does a "for" loop start?'];
  // q1_ansArray:: arrays of potential answers for question 1 
  var q1_ansArray = ['<javascript>', '<js>', '<script>', '<scripting>']; 
  var q2_ansArray = ['for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)', 'for i = 1 to 5', 'for (i <= 5; i++)']; 
  // update the html with the first question  
  console.log("loopThruQuestions count: ", count); 
  // TODO add timer condition 
  //while(count != -1){
    if(count == 0){
            console.log("In LOOP THRU, COUNT = 0"); 
            document.getElementById('question').innerHTML = qArray[count];
            // update the html with the potential answers 
            answer1.textContent = q1_ansArray[0]; 
            answer2.textContent = q1_ansArray[1]; 
            answer3.textContent = q1_ansArray[2]; 
            answer4.textContent = q1_ansArray[3];
            // display whether it is correct or incorrect 
        if(userAnsweredAlready){
            switch(userAnswer)
            {
                case 1: //console.log("incorrect"); 
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break; 
                case 2: console.log("incorrect");
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break;  
                case 3: console.log("correct");
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Correct!"; 
                    count = randomCount(questionSize, 0); 
                    userAnsweredAlready = false; 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                    
                break;  
                case 4: console.log("incorrect"); 
                    displayBorder.style.display = "block"; 
                    displayBorder.textContent = "Wrong!"; 
                    count = randomCount(questionSize, 0);
                    userAnsweredAlready = false; 
                    console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                    console.log("CALLING LOOP THU AGAIN"); 
                    loopThruQuestions(); 
                break; 
            }
            console.log("Setting userAnsweredAlready to: ", userAnsweredAlready); 
            // userAnsweredAlready = false; 
        }
    }
    else if(count == 1)
        {
            console.log("In LOOP THRU, COUNT = 1"); 
            // display question
            document.getElementById('question').innerHTML = qArray[count];
            // update the html with the potential answers 
            answer1.textContent = q2_ansArray[0]; 
            answer2.textContent = q2_ansArray[1]; 
            answer3.textContent = q2_ansArray[2]; 
            answer4.textContent = q2_ansArray[3];

            if(userAnsweredAlready){
                // display whether it is correct or incorrect 
                switch(userAnswer)
                {
                    case 1: console.log("incorrect"); 
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                         console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break; 
                    case 2: console.log("correct");
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Correct!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                         console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break;  
                    case 3: console.log("incorrect");
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                         console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break;  
                    case 4: console.log("incorrect"); 
                        displayBorder.style.display = "block"; 
                        displayBorder.textContent = "Wrong!"; 
                        count = randomCount(questionSize, 1);
                        userAnsweredAlready = false; 
                         console.log("Setting userAnsweredAlready to: ", userAnsweredAlready);
                        console.log("CALLING LOOP THU AGAIN"); 
                        loopThruQuestions(); 
                    break; 
                }
                // TODO: look into why this is disrupting the display
                // loopThruQuestions(); 
                console.log("Setting userAnsweredAlready to: ", userAnsweredAlready); 
                userAnsweredAlready = false; 
             }
        }
    //}    
}

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


// IDEA 
    // page array 
    // switch on each count 
    // counter that increments 
    // question array --> random var that randomize 

    // controls hide and show in css 

    // OR 
    // 3 pages 
    // intro.html, allDone.html, 
    //questions.html (throw questions into an array)
    // direct them to the html page 

    // document,getelementById(point1).innerHTML = 

    //}
  // while the question has been answered and is correct, display the next question
//   while (userAnswer != -1) {
//     if(checkAnswer){
//         count++;
//         document.getElementById('question').innerHTML = qArray[count];
//         questionAnswered = false; 
//     }
//     else 
//     {
//         // TODO: in css file, include a borderline above 
//         document.getElementById('incorrectAnswer').innerHTML = "Wrong!"; 
//     }
//   }



  // if they answered and have selected q1_ansArray 
  // then display correct 
  // move on to next question 
  // else 
  // display incorrect 
  // decrement -5 from timer 
  // move on to next question 
   
  

  
  // TODO: check if the answer is correct 
  // if correct, then go to the next question 
  // if incorrect, then display wrong 
  


  
  // while the question has been answered and is correct, display the next question
//   while (questionAnswered) {
//     if(checkAnswer){
//         count++;
//         document.getElementById('question').innerHTML = qArray[count];
//         questionAnswered = false; 
//     }
//     else 
//     {
//         // TODO: in css file, include a borderline above 
//         document.getElementById('incorrectAnswer').innerHTML = "Wrong!"; 
//     }
//   }


// function getAnswer() {
//     var answer = userAnsweronclick; 
//     questionAnswered = true; 
//     return answer; 
//   }
  
//   function checkAnswer() {
//       var userAnswer = getAnswer; 
       
//   }



/* 
saveButton.addEventListener("click", function(event) {
event.preventDefault();
// create object we want to store student grade  
var studentGrade = {
  student: student.value,
  grade: grade.value,
  // trim will delete white spaces for you 
  comment: comment.value.trim()
};
// local Storage can only hold string values 
// JSON,string... WILL CONVERT the item to a string 
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

});


*/ 