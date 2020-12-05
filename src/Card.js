import Component from './Component.js';
import './Card.css';
export default class Card extends Component{
    constructor(element){
        super(element);
        this.element.addEventListener('click', this.handleClick.bind(this));
    }
    setColor(color) {
        this.element.style.backgroundColor = color;
    }
    handleClick(){  //prevent handlers(set by setFuncFromParent) isn't created before calling addEventListener by constructor.(handlers don't have any method in the begin)
        this.execFuncByChild('click');
    }
    reset() {
        let color = this.changeColor(this.randomRGB());
        this.element.style.backgroundColor = color;
        return color;
    }
    changeColor([r, g, b]){
        return 'rgb(' + [r, g, b].join(', ') + ')';
    }
    randomRGB(){
        var r = this.random(0, 255);
        var g = this.random(0, 255);
        var b = this.random(0, 255);
        return [r, g, b];
    }
    random(min, max){
        return Math.floor(Math.random() * max) + min;
    }
    static getEventClassOrId(){
        return '.Card';
    }
}