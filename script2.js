var scores = JSON.parse(localStorage.getItem('codeQuizScore')) || [];
var initials = document.getElementById('initials'); 
var htmlContent  
for(var i = 0; i < scores.length; i++)
{
    htmlContent += `<p>User: ${scores[i].initialsUser} Score: ${scores[i].score}</p>`

}
initials.innerHTML = htmlContent;
