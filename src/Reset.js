import Component from './Component.js';
import './Reset.css';
export default class Reset extends Component{
    constructor(element){
        super(element);
        this.element.addEventListener('click', this.handleClick.bind(this));
    }
    handleClick(){  //prevent handlers(set by setFuncFromParent) isn't created before calling addEventListener by constructor.(handlers don't have any method in the begin)
        this.execFuncByChild('click');
    }
    static getEventClassOrId(){
        return '#Reset';
    }
}