$(function() {

//상단 내비 바    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-down').addClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}

//내비 바 부드럽게 이동
$('.gnb-list li a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-70
    }, 500);
    
    return false;
    
  });
 $('.mo-gnb-list').click(function () {
   
    $('.header-menu').removeClass( 'open' );
   
     
  });
    
//모바일 내비 바   
 $('.mo-gnb-btn').click(function () {
    $(this).toggleClass( 'open' );
    $('.header-menu').toggleClass( 'open' );
  });   
    
//프로젝트 소개 마우스오버
$('.project-tit-wrap').hover(
      function () {
        $(this).find('.pr01').addClass('fx');
        $(this).find('.pr02').addClass('fx');
      },
      function () {
        $(this).find('.pr01').removeClass('fx');
        $(this).find('.pr02').removeClass('fx');
      }
    );
   

// 스크롤 텍스트
    var secOffset = $('.left-side').offset().top;
    var secWrap = $('.main-sec04');

    $(window).scroll(function(){

        var w_scroll = $(window).scrollTop();
         
        if(  w_scroll >= secOffset + 3500  ) {
            $('.left-side').addClass('relative');
        
        }else if ( w_scroll <= secOffset + 3500  ) {
           $('.left-side').removeClass('relative');
  
        } 

     });
 
//팀 슬라이드
    var teamSlide = new Swiper('.team-slide', {
        
      slidesPerView: 4.5,
      spaceBetween: 30,
//      loop: true,
//      autoplay: {
//          delay: 3000,
//          disableOnInteraction: false,
//     },
      pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
      },
        
         
        breakpoints: {
         780: {
          slidesPerView: 1.9,
         
        }
        },
        
    });
    
    teamSlide.on('slideChange', function () {
        if(this.activeIndex === 1) {
             $(".swiper-slide-active").addClass('dd');
        }
    });
    
//텍스트 슬라이드
$('.marquee-slide').marquee({  
        duration:28000,
       easing:'linear',
        delayBeforeStart:0,
            direction:'left',
      duplicated: true
    });
    
//하단으로 이동
// $('#go-down').click(function() {
//        $('html, body').animate({scrollTop: $(document).height()}, 400);
//        return false;
//    });
// 

//모바일 프로젝트 소개 팝업
$(".main-sec04 .right-side li").click(function() {
        $(this).find('.listing-img img').addClass('open');
    $('.listing-img img').removeClass('open');
        
        
});   
$(".right-side .btn-close").click(function() {
    $(this).find('.listing-img img').removeClass('open');


});
//개인정보 팝업
$('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                $('.popup-wrap').addClass('open');
            }
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox is unchecked.");
            }
        });

// $("#checkBtn").click(function() {
//        $('.popup-wrap').addClass('open');
//        
//    }); 
$(".popup-wrap .btn-close").click(function() {
        $('.popup-wrap').removeClass('open');
        
        
    });    
    
 });

    
console.clear();
var wrap = document.querySelector(".smooth-scroll").offsetWidth;
var box1 = document.querySelector(".box1").getBoundingClientRect();
//var box2 = document.querySelector(".box2").getBoundingClientRect();

console.log(box1);

var box1TL = gsap.timeline({ paused: true }).to(".box1", {
  x: 700
});
//var box2TL = gsap.timeline({ paused: true }).to(".box2", {
//  x: -500
//});

ScrollTrigger.create({
  trigger: ".smooth-scroll",
  pin: true,
  scrub: true,
  end: smooth-scroll,
  animation: gsap.to(".smooth-scroll", { xPercent: -100 })
});
