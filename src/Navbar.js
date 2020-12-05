import Component from './Component.js';
import './Navbar.css';
export default class Navbar extends Component{
    constructor(element){
        super(element);
    }
    static getEventClassOrId(){
        return '.Navbar';
    }
}