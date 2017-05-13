$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
}) // 轮播

$(document).on('click', 'a', function(event){
    event.preventDefault();

$('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
}) // 导航跳转

$('#gotoTop').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 500);
}) // 回到顶部
