$(document).ready( function() {

//keeps accordian menu open if current page link is a sub-item			
function activeLink() {
    if ($('.accordion-menu .current').length) 
    $('.collapse').addClass('in');
    else $('.collapse').removeClass('in');
}
activeLink();

//helps keep lazy people from stealing photos
$('.carousel').on('contextmenu', 'img', function(e){ return false; })

});


