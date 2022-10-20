$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
       if(direction=="down")
           {
               $('nav').addClass('sticky');
           }
        else
           {
               $('nav').removeClass('sticky');
           }
    },{
        offset: '60px;'
       });

    // $(".plan-box.a").click(function(req,res){
    //   console.log(this.__dirname);
    // })

       //-----------------------------------------resize--------------------------

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('div.js--box-of-4-to-1').removeClass('col');
        $('div.js--box-of-4-to-1').addClass('column_1');

      }
      else if($(window).width() > 1090)
      {
        $('div.js--box-of-4-to-1').addClass('col');
        $('div.js--box-of-4-to-1').removeClass('column_1');
      }
    });

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('div.js--box-of-4-to-2').removeClass('col');
        $('div.js--box-of-4-to-2').addClass('column_2');
        $('div.js--wp-3').css({"display":"flex","flex-wrap":"wrap","justify-content":"center"});
      }
      else if($(window).width() > 1090)
      {
        $('div.js--box-of-4-to-2').addClass('col');
        $('div.js--box-of-4-to-2').removeClass('column_2');
      }
    });

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('div.js--box-of-4-to-3').removeClass('col');
        $('div.js--box-of-4-to-3').addClass('column_3');
        $('div.js--box-of-4-to-3').parent().css({"display":"flex","flex-direction":"column","justify-content":"center"});
      }
      else if($(window).width() > 1090)
      {
        $('div.js--box-of-4-to-3').addClass('col');
        $('div.js--box-of-4-to-3').removeClass('column_3');
        $('div.js--box-of-4-to-3').parent().css({"display":"","flex-direction":"","justify-content":""});
      }
    });

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('div.js--box-of-3-to-1').removeClass('col');
        $('div.js--box-of-3-to-1').addClass('column_4');
        $('div.js--box-of-3-to-1').parent().css({"display":"flex","flex-direction":"column","justify-content":"center"});
        $('.plan-box ul').css({"font-size":"2.3rem"});
      }
      else if($(window).width() > 1090)
      {
        $('div.js--box-of-3-to-1').addClass('col');
        $('div.js--box-of-3-to-1').removeClass('column_4');
        $('div.js--box-of-3-to-1').parent().css({"display":"","flex-direction":"","justify-content":""});
        $('.plan-box ul').css({"font-size":""});
      }
    });

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('div.span-1-of-2').parent().css({"display":"flex","flex-direction":"column","align-items":"center"});
      }
      else if($(window).width() > 1090)
      {
        $('div.span-1-of-2').parent().css({"display":"","flex-direction":"","align-items":""});
      }
    });

    $(window).resize(function(){
      if($(window).width() < 1090)
      {
        $('form').children().children().removeClass('span-1-of-3');
        $('form').children().children(2).removeClass('span-2-of-3');
        $('form').children().children().addClass('span-1-of-2');
        $('div.span-1-of-2').parent().css({"display":"","flex-direction":"","align-items":""});
      }
      else if($(window).width() > 1090)
      {
        $('form').children().children().addClass('span-1-of-3');
        $('form').children().children(2).addClass('span-2-of-3');
        $('form').children().children().removeClass('span-1-of-2');
      }
    });

    //-----------------------------------------resize ended--------------------------

    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn');
    },{
        offset :'50%;'
        });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    },{
        offset :'50%;'
        });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeIn');
    },{
        offset :'50%;'
        });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__pulse');
    },{
        offset :'50%;'
        });

});
