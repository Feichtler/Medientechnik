const cards = { list: [] }

let ass = {
    'imgsrc': './img/A.com.png',
    'value': 1
}
let backside = {
    'imgsrc': './img/backside.com.png'
}
let firstCard = {
    'imgsrc': './img/2.com.png',
    'value': 2
}
let secondCard = {
    'imgsrc': './img/pngwing.com.png',
    'value': 3
}
let thirdCard = {
    'imgsrc': './img/4.com.png',
    'value': 4
}
let fourthCard = {
    'imgsrc': './img/5.com.png',
    'value': 5
}
let fithCard = {
    'imgsrc': './img/6.com.png',
    'value': 6
}
let sixthCard = {
    'imgsrc': './img/7.com.png',
    'value': 7
}
let seventhCard = {
    'imgsrc': './img/8.com.png',
    'value': 8
}
let eightCard = {
    'imgsrc': './img/9.com.png',
    'value': 9
}
let ninthCard = {
    'imgsrc': './img/10.png',
    'value': 10
}
let bube = {
    'imgsrc': './img/j.png',
    'value': 10
}
let king = {
    'imgsrc': './img/k.png',
    'value': 10
}
let dame = {
    'imgsrc': './img/q.png',
    'value': 10
}

cards.list.push(firstCard)
cards.list.push(secondCard)
cards.list.push(thirdCard)
cards.list.push(fourthCard)
cards.list.push(fithCard)
cards.list.push(sixthCard)
cards.list.push(seventhCard)
cards.list.push(eightCard)
cards.list.push(ninthCard)
cards.list.push(ass)
cards.list.push(bube)
cards.list.push(king)
cards.list.push(dame)

let isClicked = true
let checkIfLost = true
let randNumb
let randNumb2

let savePlayersCards = []
let saveDealersCards = []


class Konto {
    constructor() {
        this.ktoStd = 0
    }
    blackjack() {
        return this.ktoStd * 1.5;
    }
}

let konto = new Konto()

function startGame() {
    document.getElementById('won').innerHTML = ''
    if (isClicked) {

        randNumb = Math.floor(Math.random() * 13)
        //dealer
        document.getElementById('dealer').innerHTML = `
    <img src="${cards.list[randNumb].imgsrc}" alt="">
    `
        saveDealersCards.push(cards.list[randNumb].value)

        randNumb = Math.floor(Math.random() * 13)

        document.getElementById('player').innerHTML += `
    <img src="${cards.list[randNumb].imgsrc}" alt="">
    `

        isClicked = false;
        savePlayersCards.push(cards.list[randNumb].value)
    }




    checkIfWin()
}
let newCard


function card() {
    newCard = Math.floor(Math.random() * 13)
    savePlayersCards.push(cards.list[newCard].value)
    document.getElementById('player').innerHTML += `
       <img src="${cards.list[newCard].imgsrc}" alt="">
    `

    if (sum(saveDealersCards) <= 17) {
        console.log(sum(saveDealersCards));
        newCard = Math.floor(Math.random() * 13)
        saveDealersCards.push(cards.list[newCard].value)
        document.getElementById('dealer').innerHTML += `
    <img src="${cards.list[newCard].imgsrc}" alt="">
    `
    }

    checkIfWin()
}

function checkIfDealerLost() {
    if (sum(saveDealersCards) > 21) {
        endGame()
    } else if (sum(saveDealersCards) == 21) {

    }

}
function endGame() {
    let diffPlayer = 21 - sum(savePlayersCards)
    let diffDealer = 21 - sum(saveDealersCards)
    if (diffPlayer > diffDealer) {
        document.getElementById('won').innerHTML += 'player won'
        
    } else {
        document.getElementById('won').innerHTML += 'dealer won'
    }

    reset()
}



function checkIfWin(winner) {
    if (sum(savePlayersCards) == 21) {
        document.getElementById('won').innerHTML += winner + 'BLACKJACK'
        checkIfWin = false
        
    }

    if (sum(savePlayersCards) > 21) {
        document.getElementById('won').innerHTML = 'LOST GAME'
        checkIfLost = false

    }

}

function reset() {
    document.getElementById('won').innerHTML = ""
    document.getElementById('dealer').innerHTML = ""
    document.getElementById('player').innerHTML = ""
    saveDealersCards = []
    savePlayersCards = []
    randNumb = 0
    randNumb2 = 0
    newCard = 0
    isClicked = true
    checkIfLost = true
}


function sum(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
    }
    return sum;
}