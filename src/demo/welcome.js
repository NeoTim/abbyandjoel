import {EventAggregator} from 'aurelia-event-aggregator';

export class Welcome{

    static inject(){

        return [EventAggregator];

    }

    constructor(eventAggregator){
        this.events = eventAggregator
        this.heading = 'Aurelia Interface ';
    }

    activate(params, queryString, routeConfig){

        if(routeConfig){
            this.toolbar = routeConfig.toolbar
            this.toolbar
                .configure({ size      : 'xl'
                           , fixed     : true
                           , bgColor   : 'bg-purple'
                           , textColor : 'text-white'
                           })
        }

          var GammaSettings = {
                  // order is important!
                  viewport : [ {
                      width : 1200,
                      columns : 5
                  }, {
                      width : 900,
                      columns : 4
                  }, {
                      width : 500,
                      columns : 3
                  }, {
                      width : 320,
                      columns : 2
                  }, {
                      width : 0,
                      columns : 2
                  } ]
          };

          Gamma.init( GammaSettings);

    }
}

