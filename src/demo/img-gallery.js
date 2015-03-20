import {Behavior} from 'aurelia-framework';

export class ImgGallery {

    static metadata(){

        return Behavior
            .customElement('img-gallery')

    }

    static inject (){

        return [Element]

    }


    constructor(element){

        this.element   = element
        this.element.classList.add('img-gallery')
        this.images =   [ {name: 'ja-1'}
                        , {name: 'ja-2'}
                        , {name: 'ja-3'}
                        , {name: 'ja-4'}
                        , {name: 'ja-5'}
                        , {name: 'ja-6'}
                        , {name: 'ja-7'}
                        , {name: 'ja-8'}
                        , {name: 'joel-abby-rocks-2'}
                        , {name: 'joel-abby-on-back'}
                        , {name: 'joel-abby-rocks-1'}
                        , {name: 'abby-yard'}
                        , {name: 'joel-abby-emotion-1'}
                        , {name: 'proposal-close'}
                        , {name: 'joel-abby-emotion-2'}
                        ]
    }

    attached(){
        this.title = this.element.children[0]
        var time = new TimelineLite()
        time
            .from(this.title, 1, {y:200})

    }

}
