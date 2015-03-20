import {Behavior} from 'aurelia-framework';

export class SiteRegistry {

    static metadata(){

        return Behavior
            .customElement('site-registry')

    }

    static inject (){

        return [Element]

    }


    constructor(element){

        this.element   = element

    }



}
