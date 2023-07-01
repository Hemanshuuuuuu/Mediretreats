$(".faq-plus").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-minus").css("display","inline")
    $(".faq-plus").css("display","none")
});
$(".faq-minus").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-plus").css("display","inline")
    $(".faq-minus").css("display","none")
});

$(".faq-plus1").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-minus1").css("display","inline")
    $(".faq-plus1").css("display","none")
});
$(".faq-minus1").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-plus1").css("display","inline")
    $(".faq-minus1").css("display","none")
});

$(".faq-plus2").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-minus2").css("display","inline")
    $(".faq-plus2").css("display","none")
});
$(".faq-minus2").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-plus2").css("display","inline")
    $(".faq-minus2").css("display","none")
});

$(".faq-plus3").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-minus3").css("display","inline")
    $(".faq-plus3").css("display","none")
});
$(".faq-minus3").on('click',function(){
    $(this).parent().parent().find('.faq-body p').slideToggle();
    $(".faq-plus3").css("display","inline")
    $(".faq-minus3").css("display","none")
});


$(document).ready(function () {
    var one=$("#one");
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      dots:true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        }
      },
    });
  });

  $(".ham").on('click',function(){
    $(this).parent().parent().find('#nav1 ul,.srch_btn').slideToggle();
    $(".cross").css("display","inline")
    $(".ham").css("display","none")
});
$(".cross").on('click',function(){
    $(this).parent().parent().find('#nav1 ul,.srch_btn').slideToggle();
    $(".ham").css("display","inline")
    $(".cross").css("display","none")
});

  $(".ham1").on('click',function(){
    $(this).parent().parent().find('#nav2 ul').slideToggle();
    $(".cross1").css("display","inline")
    $(".ham1").css("display","none")
});
$(".cross1").on('click',function(){
    $(this).parent().parent().find('#nav2 ul').slideToggle();
    $(".ham1").css("display","inline")
    $(".cross1").css("display","none")
});

// $("#head .logo,#icons .ic,.lang").hide();
// $("#head .c_logo").on('click',function(){
//     $(this).parent().parent().find('#head .logo,#icons .ic,.lang').slideToggle();
// });
