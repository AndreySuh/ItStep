$(document).ready(function() {
    $(window).scroll(function() {
       
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
$('#toTop').click(function() {
    $('top,html').animate({scrollTop:0},800);
});
});
