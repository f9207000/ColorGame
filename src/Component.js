export default class Component{
    static getEventClassOrId(){
        return '.component'
    }
    constructor(element){
        this.element = element;
        this.handlers = {};
    }
    setFuncFromParent(event, handler){
        this.handlers[event] = handler;
    }
    execFuncByChild(event, ...args){
        this.handlers[event](this, ...args);
    }
}