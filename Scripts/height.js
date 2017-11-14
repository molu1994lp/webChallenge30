/*
    Funkcja utrzymuje jednakowa wysokosc obu kolumn
*/

$(document).ready(function(){
  var divHeight = $('#buttons-img').height() + 'px';
    $('#white-column').css('height',divHeight);
});

  $(window).on('resize', function(event){
        divHeight = $('#buttons-img').height() + 'px';
        $('#white-column').css('height',divHeight);
    });



    var divFooter = $("#divFooter").outerHeight() + 'px';
    $('#googleMap').css('height', divFooter);
    $('#black-right').css('height', divFooter);


$(window).on('resize', function(event){
    var divFooter = $("#divFooter").outerHeight() + 'px';
    $('#googleMap').css('height', divFooter);
    $('#black-right').css('height', divFooter);
});

