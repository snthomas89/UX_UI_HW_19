$('li').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.navigation img').click(function(){
    $('li').removeClass('active');
});