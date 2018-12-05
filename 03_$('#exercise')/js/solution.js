$( document ).ready(function() {
    console.log( "ready!" );



    // 1. Tile – make it black
    $("#tile_1").mouseover(function() {
      $(this).css({
          'background-color' : '#000',
          'color' : '#fff'
      });
    })
    $("#tile_1").mouseout(function(){
        $(this).css({
          'background-color' : '#fff',
          'color' : '#000'
      });
    });


    // 2.Tile - animate svg
    $("#mySVG").hover(function() {

      $("#line0").fadeOut(100);
      $("#line0").delay(200).fadeIn(50);

      $("#line1").delay(100).fadeOut(50);
      $("#line1").delay(300).fadeIn(50);

      $("#line2").delay(200).fadeOut(50);
      $("#line2").delay(400).fadeIn(50);

      $("#line3").delay(300).fadeOut(50);
      $("#line3").delay(500).fadeIn(50);      
    })

    // 3.Tile - change opacity
    $("#map").on({
        mouseenter: function(){
              $( ".rectangle" ).animate({
                opacity: 1
              }, 500, function() {
                // Animation complete.
              });
        },
        mouseleave: function(){
              $( ".rectangle" ).animate({
                opacity: 0
              }, 500, function() {
                // Animation complete.
              });
        },    
    });

    // 4.Tile - change background
    $("#picture").hover(function() {
        $(this).css('background-image', 'url(image/hiv_black.png)');
        }, function(){
        $(this).css('background-image', 'url(image/hiv.png)');
    });

    //5.Tile - add elemtns in html   
    for(var i = 0; i < 4; i++) {
        $('#add-html').append('<div id="div' + i + '"class=dots></div>'); // "  ''   "
        
    }

    $(".dots").click(function() { 
      $(this).toggleClass('black_dots');

      if (!$("#div0:not(.black_dots), #div1:not(.black_dots), #div2:not(.black_dots), #div3:not(.black_dots)").length) {
        
        $(".dots").animate({opacity:0},300,"linear",function(){
            $(this).animate({opacity:1},200);
            $(this).removeClass('black_dots');
        });
      } 

    });

    //6.Tile – gloryhole
    $( '#gloryhole' ).on( "mousemove", function( event ) {
      console.log(event.pageX +" ; " + event.pageY);

      $( ".gloryhole_back" ).css({'backgroundPosition': (event.pageX*30 -200) + "% " + (event.pageY/10) + "%"});


    });







});