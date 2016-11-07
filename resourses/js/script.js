$(document).ready(function () {
    // change class for NAV
    $('.menu').on('click', function () {
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('.menu p').css('color', 'white');
        $(this).children('p').css('color', 'black');
        if ($(this).hasClass('appointment')) {
            $('.appointmentWrapInner').show();
        }
    });
    // open-close arrow popup
    $('.userMenu').click(function (e) {
        e.preventDefault();
        $('.arrowPopUp').css('display', 'flex');
        $('.arrowPopUp').focus();
    });
    $('.arrowPopUp').on('blur', function () {
        $(this).fadeOut();
    });
    //close voucher
    $('#closeVoucher').click(function () {
        $('.boxVoucher').fadeOut(0);
    });
    // open small Menu NAV 
    $('.showMenu').click(function () {
        if ($(window).width() < 800) {
            $('nav .menu').css('display', 'flex');
        }
    });
    //change small menu NAV
    $('.menu').click(function () {
        var clicked = $(this).children('p').text();
        console.log(clicked);
        if ($(window).width() < 800) {
            $('.showMenuText').html(clicked);
            $('nav .menu').css('display', 'none');
        }
    });
    // preventdefault for arrow popup
    $('.arrowPopUp a').click(function (e) {
        e.preventDefault();
    })
});