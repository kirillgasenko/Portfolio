$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: false,
      infinite: false,
      nextArrow:'#first_next2_btn.nextSlide',
      prevArrow:'#first_prev2_btn.prevSlide',
      responsive: [
                 {
                    breakpoint: 991,
                    settings: {
                      arrows: false,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                    {
                    breakpoint: 767,
                    settings: {
                      arrows: false,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  },
          
                ]
    });
  
    $('.slider_prod_top').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow:'#first_next_btn.nextSlide',
      prevArrow:'#first_prev_btn.prevSlide',
      swipe: false,
      infinite: false,
      responsive: [
                  {
                        breakpoint: 1201,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      }
                  },
                 {
                    breakpoint: 991,
                    settings: {
                      arrows: false,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                    {
                        breakpoint: 541,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                  },
                  ]
    });
  
    $('.slider_prod_bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: false,
      infinite: false,
      nextArrow:'#first_next1_btn.nextSlide',
      prevArrow:'#first_prev1_btn.prevSlide',
      responsive: [
                  {
                    breakpoint: 1201,
                    settings: {
                      arrows: false,
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    }
                  },
                 {
                    breakpoint: 991,
                    settings: {
                      arrows: false,
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                    {
                        breakpoint: 541,
                        settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                  },
                ]
    });
 
    var isPending = false;
    $('#fav_icon1').click(function(){
        if(!isPending){
            isPending = true;
            $('#search_close').show();
            $('#fav_icon1').hide();
            $("#search1").fadeIn(400, function(){
                 isPending = false;
                 
             });
        }
       
    });
    $('#search_close').click(function(){
        if(!isPending){
            isPending = true;
             $('#search_close').hide();
             $('#fav_icon1').show();
             $("#search1").fadeOut(400, function(){
                 isPending = false;
             });
        }
    })
    
	jQuery( document ).ready(function() {
		$( '#slider' ).sliderPro({
            fade: true,
            arrows: true,
            autoplayDelay: 3500,
            autoplay: false
        })
	});
    
    $(document).ready(function(){
        
        $('#information').click(function(){
            
                $('#textBlockDesc').slideToggle();
           
        })
    })
    
    $('#menu-new').click(function(){
        $('.menu_top_wrap').toggleClass('open');
    })
    
      $(document).ready(function(){
          let accordeon_items = $('.accordeon-item');
          
          $('.accordeon-item__title').on('click',function(){
              var index = $(this).parent().attr('data-accordeon');
              accordeon_items.each(function(){
                  if($(this).attr('data-accordeon') != index) {
                      $(this).children('.accordeon-item__body').slideUp();
                  }else{
                      $(this).children('.accordeon-item__body').slideToggle();
                  }
                  
              });
          })
      })
   
    var isPending = false;
    $('#search_filed_button').click(function(){
        if(!isPending){
            isPending = true;
                $("#search_field").slideToggle(500, function(){
                    isPending = false;
            });
        }

    });
   
    var isPending = false;
    $('.person1').click(function(){
        if(!isPending){
            isPending = true;
                $(".last_menu_header").slideToggle(500, function(){
                    isPending = false;
            });
        }

    });
    
        var text = document.getElementById("text_cut");
        var text_text = text.textContent;
        text.textContent = text_text.substring(0,160) + '...';;
    
        var text = document.getElementById("text_cut1");
        var text_text = text.textContent
        text.textContent = text_text.substring(0,120) + '...';;
     });