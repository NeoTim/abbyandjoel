/* global jQuery:false, TimelineLite:false, TweenMax:false, Cubic:false */

(function () {
        "use strict";

    /*global $, jQuery, Gamma */

    jQuery(document).ready(function(){
        var
            $title= $('#title')


        $('.intro-header').parallax({
            imageSrc: 'images/sunrise.jpg',
            naturalWidth: '10px',
            // position: 'bottom right',
        });

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


        var intro = new TimelineLite()

        intro
            .to($title, 1, {y:'-200px'})

    });

}());