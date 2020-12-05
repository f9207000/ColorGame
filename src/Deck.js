import Component from './Component.js';
import Card from './Card.js'
import './Deck.css';
export default class Deck extends Component{
    constructor(element){
        super(element);
        this.pickColor;
        this.gameOver = false;
        const cardElements = document.querySelectorAll(Card.getEventClassOrId())
        this.cards = [];
        for (let el of cardElements){
            let cardTemp = new Card(el);
            this.cards.push(cardTemp);
            cardTemp.setFuncFromParent('click', this.checkCorrectOrMistake.bind(this));
        }
    }
    checkCorrectOrMistake(caller){
        if(this.gameOver)
            return;
        console.log(this.pickColor);
        console.log(caller.element.style.backgroundColor);
        if(this.pickColor == caller.element.style.backgroundColor) {
            this.gameOver = true;
            this.handleCorrect();
            for(let card of this.cards){
                card.setColor('white');
            }
        }
        else {
            caller.setColor('black');
            this.handleMistake();
        }
    }
    handleCorrect() {
        this.execFuncByChild('correct');
    }
    handleMistake() {
        this.execFuncByChild('mistake');
    }
    reset() {
        let colorSet = [];
        for (let el of this.cards){
            colorSet.push(el.reset());
        }
        this.gameOver = false;
        this.pickColor = colorSet[Math.floor(Math.random() * colorSet.length)];
        return this.pickColor;
    }
    static getEventClassOrId(){
        return '.Deck';
    }
}