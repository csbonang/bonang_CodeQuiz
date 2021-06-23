var scores = JSON.parse(localStorage.getItem('codeQuizScore')) || [];
scores.sort((a, b) => b.score - a.score); 
var initials = document.getElementById('highScoresOutput'); 
var htmlContent = ""; 
// get score information and assign it to htmlContent   
for(var i = 0; i < scores.length; i++)
{
    htmlContent += `<p>User: ${scores[i].initialsUser} Score: ${scores[i].score}</p>`

}
// assign scores' content to display 
initials.innerHTML = htmlContent;
// get button element 
var clearScore = document.getElementById('clearScores'); 
// if user clicks on clear button then execute cleaUserScores()
clearScore.addEventListener('click', clearUserScores); 
// clearUserScores:: removes the scores 
function clearUserScores(event)
{
    event.preventDefault(); 
    // remove the scores from local storage
    localStorage.removeItem('codeQuizScore');
    // clear out score ouput on html page
    initials.innerHTML = ""; 
}