const rnum=parseInt(Math.random()*100+1);
const submit =document.querySelector('#subt');
const input=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.loworhi');
const startOver=document.querySelector('resultParas');

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true;
if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(input.value)
        //console.log(guess);
        validateGuess(guess); 
    })
}

function validateGuess(guess){
  if(isNaN(guess))
  {
    alert("please enter  a valid number ");
  }
  else if(guess<1&&guess>100)
  {
    alert("please enetr number between 1 to 100 ${rnum} ");
  } 
  else{
    prevGuess.push(guess);
    if(numGuess===11||remaining<0)
    {
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${rnum} `);
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}
function checkGuess(guess)
{
    if(guess===rnum)
    {
        displayMessage("You guessed it right ")
        endGame()
    }
    else if(guess<rnum)
    {
        displayMessage('number is tooo low');
    }
    else if(guess>rnum)
    {
        displayMessage('number is tooo high');
    }

}
function displayGuess(guess){
     input.value=''
     guessSlot.innerHTML+=`${guess} `
     numGuess++;
     remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message)
{
    loworhi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
   input.value=''
   input.setAttribute('disabled','');
   p.classList.add('button')
   p.innerHTML=`<h2 id='newgame' > Start new game </h2>`;
   startOver.appendChild(p);
   playGame=false;
   newGame()
}
function newGame(){
    const newgameBUtton=document.querySelector('#newgame')
    newgameBUtton.addEventListener('click',function(e){
     rnum=parseInt(Math.random()*100+1);
     prevGuess=[];
     numGuess=1
     guessSlot.innerHTML=''
     remaining.innerHTML=`${11-numGuess}`
     input.removeAttribute('disabled');
     startOver.removeChild(p);
 
     playGame=true
    })
 }
