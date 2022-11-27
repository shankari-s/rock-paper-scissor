/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {compScore : 0 , playerScore : 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rpsChoice = ['Rock','Paper','Scissors']
  const randomNumber = Math.floor(Math.random() * 3)

  return  rpsChoice[randomNumber]
  
}
console.log(getComputerChoice())

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, compChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score;
   
  
  // All situations where human draws, set `score` to 0
  if(playerChoice == compChoice){
    score = 0;
  }

  // All situations where human wins, set `score` to 1
   else if(playerChoice == 'Rock' && compChoice == 'Scissors' ){
    score  = 1;
  }
  else if(playerChoice == 'Paper' && compChoice == 'Rock' ){
    score  = 1;
  }
  else if(playerChoice == 'Scissors' && compChoice == 'Paper' ){
    score  = 1;
  }

  // make sure to use else ifs here
  
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }
  
  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, compChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv =document.getElementById('result')
  const handsDiv =document.getElementById('hands')
  const playerScoreDiv =document.getElementById('player-score')

   if(score == -1){
   resultDiv.innerText = 'you lose'
   }
   else if(score == 0){
    resultDiv.innerText ='It is a tie'

   }else{
    'you won'
   }   

   handsDiv.innerText = `${playerChoice} vs ${compChoice}`
   playerScoreDiv.innerText = totalScore['playerScore']
  
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const compChoice = getComputerChoice()
    console.log({compChoice})
    const score = getResult(playerChoice,compChoice)
    totalScore['playerScore'] += score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice,compChoice)
     


  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const allRpsButton = document.querySelectorAll('.rpsButton')

  // * Adds an on click event  listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  allRpsButton.forEach(btn =>{
    btn.onclick = () => onClickRPS(btn.value)
  })
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 const endGameButton = document.getElementById('endGameButton')
 endGameButton.onclick = () => endGame(totalScore)

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['compScore'] = 0;
  
  const resultDiv =document.getElementById('result')
  const handsDiv =document.getElementById('hands')
  const playerScoreDiv =document.getElementById('player-score')
   resultDiv.innerText = '';
   handsDiv.innerText = '';
   playerScoreDiv.innerText = '';
  
}

playGame()