let player = {
    name : "Phina",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function randomcard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber >10){
        return 10
    }
    return randomNumber
}

function startGame (){
   
    let firstCard = randomcard()
    let secondCard = randomcard() 
    cards = [ firstCard, secondCard ]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: " 

    for (let i=0; i< cards.length; i++ ) {
        cardsEl.textContent += cards [i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }


    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }


    else  {
        message = "You're out of the game!"
        isAlive = false
  
    }
    messageEl.textContent = message

}

function newCard () {
    if (isAlive === true && hasBlackjack === false){
    let thirdCard = randomcard()
    sum  += thirdCard
    cards.push(thirdCard)
         
    renderGame ()
} }


    

