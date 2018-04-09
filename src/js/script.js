$('.main__check').on('click', function(){
    $('.highlighting__num').text($('.main__checkbox:checked').length) 
})

$('.main__highlighting-right').on('click', function(){
    $('.main__checkbox').prop('checked', false);
    $('.highlighting__num').text($('.main__checkbox:checked').length) 
})