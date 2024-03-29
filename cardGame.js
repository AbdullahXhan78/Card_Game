#!/usr/bin/env node
import inquirer from 'inquirer';
function fillDeck(wDeck, wface, wsuit) {
    for (let i = 0; i <= 51; i++) {
        wDeck[i] = { face: wface[i % 13], suit: wsuit[Math.floor(i / 13)] };
    }
}
function shuffle(wDeck) {
    for (let i = 0; i <= 51; i++) {
        const j = Math.floor(Math.random() * 52);
        const temp = wDeck[i];
        wDeck[i] = wDeck[j];
        wDeck[j] = temp;
    }
}
function getRandomCard(wDeck) {
    const randomIndex = Math.floor(Math.random() * wDeck.length);
    return wDeck[randomIndex];
}
async function game() {
    const Deck = [];
    const face = ["Ace", "Duece", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    const suit = ["Hearts", "Diamonds", "Clubs", "Spades"];
    fillDeck(Deck, face, suit);
    shuffle(Deck);
    let remainingTurns = 6;
    while (remainingTurns > 0) {
        const userInput = await inquirer.prompt({
            type: 'input',
            message: 'Press Enter to get a random card (or type "exit" to end the game):',
            name: 'continue'
        });
        if (userInput.continue.trim().toLowerCase() === 'exit') {
            console.log('Exiting game...');
            break;
        }
        const randomCard = getRandomCard(Deck);
        console.log(`Your entered card is: ${userInput.continue}`);
        console.log(`Your random card is: ${randomCard.face} of ${randomCard.suit}`);
        remainingTurns--;
    }
    console.log('End of the game.');
}
game();
