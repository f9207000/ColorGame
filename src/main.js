import Component from './Component.js';
import Navbar from './Navbar.js';
import Board from './Board.js';
import Deck from './Deck.js';
import Reset from './Reset.js';

import './main.css';

class Main extends Component{
    constructor(element){
        super(element);
        this.pickColor;
        this.navbar = new Navbar(document.querySelector(Navbar.getEventClassOrId()));
        this.board = new Board(document.querySelector(Board.getEventClassOrId()));
        this.deck = new Deck(document.querySelector(Deck.getEventClassOrId()));
        this.reset = new Reset(document.querySelector(Reset.getEventClassOrId()));
        this.reset.setFuncFromParent('click', this.resetAll.bind(this));
        this.deck.setFuncFromParent('correct', this.clickCorrect.bind(this));
        this.deck.setFuncFromParent('mistake', this.clickMistake.bind(this));
        this.resetAll(this);
    }
    resetAll(caller) {
        this.element.style.backgroundColor = 'black';
        this.pickColor = this.deck.reset();
        this.board.reset(this.pickColor);
    }
    clickCorrect() {
        this.element.style.backgroundColor = this.pickColor;
    }
    clickMistake() {
        
    }


}
window.onload = function(){
    new Main(document.body);
};