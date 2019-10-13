class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Deck {
    constructor(cards) {
        this.legth = 52
        this.cards = []
    }
    createDeck () {
        let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let score = 0
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                switch (ranks[j]) {
                   case 'J':
                       score = 11
                       break;
                   case 'Q':
                       score = 12
                       break;
                   case 'K':
                       score = 13
                       break;
                   case 'A':
                       score = 14
                       break;
                   default:
                       score = parseInt(ranks[j]);
                }
                this.cards.push( new Card (suits[i], ranks[j], score))
            }
        }
    }
    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    dealCards() {
        for (let i = 0; i < this.cards.length - 26; i++) {
            player1.cards = this.cards.slice(0,26)
            for (let j = 0; j < this.cards.length - 26; j++) {
                player2.cards = this.cards.slice(26,52)
            }
        }
    }

    play() {
        if (player1.cards[0].score > player2.cards[0].score) {
            player1.cards.push(player2.cards[0])
            player1.cards.push(player1.cards[0])
            player2.cards.shift()
            player1.cards.shift()
            console.log('Player 1 wins round!')

        }
        else if (player1.cards[0].score < player2.cards[0].score) {
            player2.cards.push(player1.cards[0])
            player2.cards.push(player2.cards[0])
            player2.cards.shift()
            player1.cards.shift()
            console.log('Player 2 wins round!')
        }
        else if (player1.cards[0].score === player2.cards[0].score) {
            spoilsOfWar.cards.push(player1.cards[0], player1.cards[1], player1.cards[2], player1.cards[3])
            spoilsOfWar.cards.push(player2.cards[0], player2.cards[1], player2.cards[2], player2.cards[3])
            player2.cards.splice(0, 4)
            player1.cards.splice(0, 4)
            console.log('War!')
            this.playWar()
        }
    }

    playWar() {
        if (player1.cards[0].score > player2.cards[0].score) {
            player1.cards.push(player2.cards[0])
            player1.cards.push(player1.cards[0])
            player1.cards.push(...spoilsOfWar.cards)
            player2.cards.shift()
            player1.cards.shift()
            spoilsOfWar = []
            console.log('Player 1 wins the war!')

        }
        else if (player1.cards[0].score < player2.cards[0].score) {
            player2.cards.push(player1.cards[0])
            player2.cards.push(player2.cards[0])
            player2.cards.push(...spoilsOfWar.cards)
            player2.cards.shift()
            player1.cards.shift()
            spoilsOfWar.cards = []
            console.log('Player 2 wins the war!')
        }
        else if (player1.cards[0].score === player2.cards[0].score) {
            spoilsOfWar.cards.push(player1.cards[0], player1.cards[1], player1.cards[2], player1.cards[3])
            spoilsOfWar.cards.push(player2.cards[0], player2.cards[1], player2.cards[2], player2.cards[3])
            player2.cards.splice(0, 4)
            player1.cards.splice(0, 4)
            console.log('War continues!')
            this.playWar()
        }
    }
}

const deck = new Deck ()
deck.createDeck()
console.log(deck) //Used to test that a deck of cards has indeed been created.//

class Pile {
    constructor(cards) {
        this.cards = []
    }
}

const player1 = new Pile
const player2 = new Pile
const spoilsOfWar = new Pile

