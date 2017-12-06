// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function () {


    var options = {
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 225,
        variance: 1,
        x_colors: [
            '#ffffff',
            '#fefefe',
            '#eeeeee',
            '#ffffff',
            '#fefefe',
            '#eeeeee'],
        y_colors: 'match_x',
        palette: Trianglify.colorbrewer,
        color_space: 'lab',
        color_function: false,
        stroke_width: 1.51,
        seed: null
    };

    function makePoly(pattern) {
        $(".poly").each(function () {
            $(this).css({
                "background-image": "url(" + pattern.png() + ")",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
        });
    }

    setTimeout(makePoly(Trianglify(options)), 500);

// RESIZE TIMEOUT
    $(window).resize(function () {
        clearTimeout(this.id);
        this.id = setTimeout(doneResizing, 200);
    });

// GENERATE PATTERN WHEN RESIZING FINISHED
    function doneResizing() {
        var pattern = Trianglify(options);
        makePoly(pattern);
    }
});
