import { shuffle } from "../tools/arrays";

export class Deck<T> {

    constructor(
        public cards: T[],
        shuffleAtInit = true,
        public discard: T[] = []
    ){
        if(shuffleAtInit){
            this.cards = shuffle(cards)
        }
    }

    reset(thenShuffle = true){
        const allCards = [...this.cards, ...this.discard]
        this.cards = thenShuffle ? shuffle(allCards) : allCards
        this.discard = []
    }

    getTopOnes(nb: number){
        return this.cards.slice(0, 3)
    }
}