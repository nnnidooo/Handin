//Hand-in - 1. What to wear
function whatToWear (temperature) {
    if (temperature>=20) {
        return 'Dress or shorts'
    }
    if (temperature<20 && temperature>10) {
        return 'Light jacket'
    }
    if (temperature<=10){
        return 'Sweater & warm jacket'
    }
}
console.log(whatToWear(20))
console.log('-------------------------------')

//Hand-in 2-Dice game
function diceGame (rollTheDice) {
    amountOfSixes = 0
    for (let i = 0; i < rollTheDice; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        if (randomNumber===6) {
            console.log('You just hit 6!')
        } else {
            console.log('You hit '+randomNumber+' Good luck next time')
        }
        if (randomNumber===6){
            amountOfSixes++
            if (amountOfSixes===rollTheDice)
                console.log('Jackpot🥳')

        }
    }
}
diceGame(2);
console.log('-------------------------------')




