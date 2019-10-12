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

    draw() {
        return this.cards[Math.floor(Math.random()*52)]
    }
}

const deck = new Deck ()
deck.createDeck()
deck.draw()
console.log(deck) //Used to test that a deck of cards has indeed been created.//

class Player {
    constructor(cards) {
        this.legth = 26
        this.cards = []
    }
}

const player1 = new Player
const player2 = new Player

