import {Behavior} from 'aurelia-framework';

export class SiteHeader {

    static metadata(){

        return Behavior
            .customElement('site-header')

    }

    static inject (){

        return [Element]

    }


    constructor(element){

        this.element   = element
        this.heading   = 'Joel & Abby';
        this.element.classList.add('intro-header')
    }

    attached(){
        this.title = this.element.children[0]
        var time = new TimelineLite()
        time
            .from(this.title, 1, {y:200})

    }

}
