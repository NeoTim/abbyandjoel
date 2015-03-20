import {Behavior} from 'aurelia-templating'


export class NavBat{

    static metadata(){
        return Behavior
            .customElement('nav-btn')
            .withProperty('icon')
            .withProperty('next')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element    = element;
        this.element.classList.add('flex', 'md12', 'nav-btn')
    }

    bind(){
        this.activeIcon = this.icon;
        this.element.addEventListener('mouseenter', (event)=>{
            this.activeIcon = this.next;
            this.element.classList.add('next')
        })
        this.element.addEventListener('mouseleave', (event)=>{
            this.activeIcon = this.icon;
            this.element.classList.remove('next')
        })
    }


}
