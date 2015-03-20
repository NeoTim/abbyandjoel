import {Behavior} from 'aurelia-framework';

export class SiteEvents {

    static metadata(){

        return Behavior
            .customElement('site-events')

    }

    static inject (){

        return [Element]

    }


    constructor(element){

        this.element   = element

    }



}
