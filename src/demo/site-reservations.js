import {Behavior} from 'aurelia-framework';

export class SiteReservations {

    static metadata(){

        return Behavior
            .customElement('site-reservations')

    }

    static inject (){

        return [Element]

    }


    constructor(element){

        this.element   = element

    }



}
