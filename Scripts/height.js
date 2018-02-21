/*
    Funkcja utrzymuje jednakowa wysokosc obu kolumn
*/

$(window).on('load',function(){
    var divHeight = $('#buttons-img').height() + 'px';
    $('#white-column').css('height',divHeight);
});


  $(window).on('resize', function(event){
        divHeight = $('#buttons-img').height() + 'px';
        $('#white-column').css('height',divHeight);
    });


$(window).on('load', function(){
    var divFooter = $("#divFooter").outerHeight() + 'px';
    $('#googleMap').css('height', divFooter);
    $('#black-right').css('height', divFooter);
});



$(window).on('resize', function(event){
    var divFooter = $("#divFooter").outerHeight() + 'px';
    $('#googleMap').css('height', divFooter);
    $('#black-right').css('height', divFooter);
});
