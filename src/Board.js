import Component from './Component.js';
import './Board.css';
export default class Board extends Component{
    constructor(element){
        super(element);
        this.colorRGB = this.element.querySelector('#ColorRGB');
        this.messageNote = this.element.querySelector('#MessageNote');
    }
    reset(pickColor) {
        this.colorRGB.textContent = pickColor.toUpperCase();
        this.messageNote.textContent = `WHAT'S THE COLOR?`
    }
    static getEventClassOrId(){
        return '.Board';
    }
}