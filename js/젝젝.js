// 메인 따라다니는 이미지
$(window).load(function(){
    var mensOffset = $('.item-wrap.mens').offset().top;
    var mens_monthly = $('.men.monthly');
    var womenOffset = $('.item-wrap.women').offset().top;
    var women_monthly = $('.women.monthly');
    var athOffset = $('.item-wrap.ath').offset().top;
    var ath_monthly = $('.ath.monthly');
    var golfOffset = $('.item-wrap.golf').offset().top;
    var golf_monthly = $('.golf.monthly');
    var kidsOffset = $('.item-wrap.kids').offset().top;
    var kids_monthly = $('.kids.monthly');
    var wearOffset = $('.item-wrap.wear').offset().top;
    var wear_monthly = $('.wear.monthly');
    var monthly_wrap = $('.monthly-wrap');
    
    var h_height = $('header').height() + $('.tab-fixed-wrap').height();
    
    
    
    $(window).scroll(function(){

        var w_scroll = $(window).scrollTop();
         
        //맨즈
        if ( w_scroll >= mensOffset  + 50  &&  $('.item-wrap.mens').height() + mensOffset - 945 > w_scroll) {
            mens_monthly.addClass( 'visible' );
          
//           mens_monthly.removeClass('top')
        } else if ( w_scroll <= mensOffset ) {
           mens_monthly.removeClass( 'visible' );
          
        } else if( w_scroll >= $('.item-wrap.mens').height() + h_height ) {
           mens_monthly.removeClass('top')
            
        }
        
        //우먼
        if ( w_scroll >= womenOffset - 50  &&  $('.item-wrap.women').height() + womenOffset - 945 > w_scroll) {

            women_monthly.addClass( 'visible' );
            
        } else if ( w_scroll <= womenOffset - 800) {
            women_monthly.removeClass( 'visible' );
        } else if( w_scroll >= $('.item-wrap.women').height() + h_height ) {
            
        }

        //애슬레져
        if ( w_scroll >= athOffset - 50 &&  $('.item-wrap.ath').height() + athOffset - 945 > w_scroll) {
           
            ath_monthly.addClass( 'visible' );
        } else if ( w_scroll <= athOffset - 800 ) {
            ath_monthly.removeClass( 'visible' );
         
        } else if( w_scroll >= $('.item-wrap.ath').height() + h_height ) {
            
        }
        
        //골프
        if ( w_scroll >= golfOffset - 50 &&  $('.item-wrap.golf').height() + golfOffset - 945 > w_scroll) {
         
            golf_monthly.addClass( 'visible' );
        } else if ( w_scroll <= golfOffset - 800 ) {
            
            golf_monthly.removeClass( 'visible' );
        } else if( w_scroll >= $('.item-wrap.golf').height() + h_height ) {
           
        }
        
        //키즈
        if ( w_scroll >= kidsOffset - 50 &&  $('.item-wrap.kids').height() + kidsOffset - 945 > w_scroll) {
           
            kids_monthly.addClass( 'visible' );
        } else if ( w_scroll <= kidsOffset - 800 ) {
            kids_monthly.removeClass( 'visible' );
         
        } else if( w_scroll >= $('.item-wrap.kids').height() + h_height ) {
            
        }
        
        //스트릿캐주얼
        if ( w_scroll >= wearOffset - 50 &&  $('.item-wrap.wear').height() + wearOffset - 945 > w_scroll) {
            monthly_wrap.removeClass( 'absolute' );
            wear_monthly.removeClass( 'absolute' );
            wear_monthly.addClass( 'visible' );
            
        } else if ( w_scroll <= wearOffset - 800 ) {
            wear_monthly.removeClass( 'visible' );
            monthly_wrap.removeClass( 'absolute' );
            wear_monthly.removeClass( 'absolute' );
  
        } else if( w_scroll >= wearOffset + 800  ) {
            monthly_wrap.addClass( 'absolute' );
            wear_monthly.addClass( 'absolute' );
        }
        
        
    });
});
jQuery(document).ready(function(){

    //메인배너
    var swiper = new Swiper('.main-slide', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 12,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
     },
    });


    //브랜드
    var swiper = new Swiper('.store-list-slide', {


        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 150,
        loop:true,
        speed: 2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
      },
    });
    
    //컬렉션 배너
    var swiper = new Swiper(".collection-swiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    //실시간
    var swiper = new Swiper('.slide-season', {
        slidesPerView: 5,
        speed: 3000,
        spaceBetween: 15,
        loop:true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: '.season-scroll',
            draggable: true,
        },
    });
    
    //이너웨어 코스메틱
    var swiper = new Swiper('.hd-banner', {
        loop: true,
        slidesPerView: '1',
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.inner-next',
            prevEl: '.inner-prev',
        },
    });
    
    //악세사리
    var swiper = new Swiper('.slide-acc', {
        slidesPerView: 'auto',
        //spaceBetween: 25,
        freeMode: true,
        navigation: {
            nextEl: '.slideacc-next',
            prevEl: '.slideacc-prev',
        },
        scrollbar: {
            el: '.acc-scroll',
            draggable: true,
        },
    });

    //엠디픽
    var swiper = new Swiper('.mdpick-slide', {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 500,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.mdpick-next',
            prevEl: '.mdpick-prev',
        },

    });
    
    //베스트 슬라이드
    var swiper = new Swiper('.slide-best', {
        slidesPerView: '5',
        speed: 1000,
        spaceBetween: 15,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        scrollbar: {
            el: '.best-scroll',
            draggable: true,
        },
    });

    //베스트 탭 슬라이드
    var bestSlider = jQuery('#best_slider .slider');
    var bestSliderTab = jQuery('#best_slider .tab_best > li');
    bestSlider.slick({
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 7000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 150,
        infinite: true,
    });
    bestSlider.on('afterChange', function(event, slick, currentSlide){
        bestSliderTab.removeClass('active').eq(currentSlide).addClass('active');
    });
    bestSliderTab.on('click', function(e){
        e.preventDefault();
        slideIndex = $(this).index();
        bestSlider.slick('slickGoTo', slideIndex);
    });
});

 $(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

});



//쿠폰다운
function clickcoupon(temp){
document.coupon.couponnum.value=temp;
document.coupon.submit();
}



