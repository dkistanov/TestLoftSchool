
// Выделение

$('.main__check').on('click', function(){
    $('.highlighting__num').text($('.main__checkbox:checked').length) 
})

$('.main__highlighting-right').on('click', function(){
    $('.main__checkbox:checked').closest('.main__item').remove()
    $('.highlighting__num').text($('.main__checkbox:checked').length) 
    totalPrice();
})

// калькулятор 

$('.price').each(function() {
     $(this).parent().next().next().children('.final-price').text(parseInt($(this).text(), 10) * $(this).parent().next($('main__good-quantity')).val())
  });


$(document).on('keyup', function(){
    totalPrice();
    modalPrice();
    $('.price').each(function() {
        $(this).parent().next().next().children('.final-price').text(parseInt($(this).text(), 10) * $(this).parent().next($('main__good-quantity')).val())
     });   
})

// Только цифры 

var inp = document.querySelectorAll('.modal__quantity');

for (var i = 0; i<inp.length; i++) {
    inp[i].addEventListener('keydown', function (event) {
        var isDigit = false;
        var isControl = false;

        if (event.key >= 0 || event.key <= 9) {
            isDigit = true;
        };
    
        if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
            isControl = true;
        };
        
        if (isControl == false && isDigit == false) {
            event.preventDefault();
        };
    });
}

// modal 

$('.main__good-quantity').on('click', function(e){
    $(this).parent().next().css("display", "block")
})

$('.button.exit').on('click',function(){
    $(this).closest('.modal').css("display", "none")
})

$(document).mouseup(function (e) {
    modalPrice();
    totalPrice();
    var modal = $(".modal");
    if (modal.has(e.target).length === 0){
        modal.css("display", "none")
    }
});

// modal price

$('.modal__price').each(function() {
     $(this).children('.price_num_modal').text($(this).closest('.main__item').children('.main__good-price__wrap').children('.main__good-price').children('.price').text())
 });

 function modalPrice() {
    $('.modal__final-price').each(function() {
        $(this).children('.final-price_modal').text(parseInt($(this).prev().prev().prev().prev().children('.price_num_modal').text(), 10) * $(this).prev().prev().val())
    });
 }
 modalPrice();

 // modal buttons

 $('.minus').on('click', function(){
    var $input = $(this).next();
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    modalPrice();
 })

 $('.plus').on('click',function(){
    var $input = $(this).prev();
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    modalPrice();
 })

 // modal save 

 $('.button.save').on('click', function(){
    $(this).closest('.modal').prev().children('.main__good-quantity').val($(this).closest('.modal').children('.modal__calc').children('.main__good-quantity.modal__quantity').val());
    $(this).closest('.modal').prev().children('.main__good-final-price').children('.final-price').text($(this).closest('.modal').children('.modal__calc').children('.modal__final-price').children('.final-price_modal').text());
    totalPrice();
    $(this).closest('.modal').css("display", "none")
})

 // total price
function totalPrice() {
    var x = 0;
    $('.final-price').each(function(i, elem){
       x += parseInt($(elem).text(), 10)
    })
    $('.total_price').children('.total_price_num').text(x);
    var y = 0;
    y = Math.round(parseInt($('.total_price_num').text(), 10) / 100 * 18)
    $('.vat_num').text( y );
    $('.bold_total').text( x + y + " Р")
}
 
totalPrice();





