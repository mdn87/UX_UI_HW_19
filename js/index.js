// Hover projects in navigation
$(document).ready(function() {
  $('.nav').hover(function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('highlight');
    }
  }, function() {
    if(!$(this).hasClass('active')){
      $(this).removeClass('highlight');
    }
  });

// Animate nav and load project page on click
  var currentPage = 0;
  $('.nav').on('click', function(){
    var clickedPage = $(this);
    if(!$(this).hasClass('active')){
      $(this).addClass('click');
      $(this).addClass('active');
      if($(this).is('#home')){
        loadPage(0);
      }
      if($(this).is('#proj1')){
        loadPage(1);
      }
      if($(this).is('#proj2')){
        loadPage(2);
      }
      if($(this).is('#proj3')){
        loadPage(3);
      }
    }
    function loadPage(pageNumber){
      if(pageNumber == currentPage){
        //do nothing
      } else if(pageNumber == 0){
        clearPage();
        currentPage = 0;
        $('#mainContent').removeClass('hide');
      } else if(pageNumber == 1){
        clearPage();
        currentPage = 1;
        $('#p1Content').removeClass('hide');
      } else if(pageNumber == 2){
        clearPage();
        currentPage = 2;
        $('#p2Content').removeClass('hide');
      } else if(pageNumber == 3){
        clearPage();
        currentPage = 3;
        $('#p3Content').removeClass('hide');
      }
      function clearPage(){
        if(currentPage == 0){
          $('#mainContent').addClass('hide');
          $('#home').removeClass('highlight');
          $('#home').removeClass('click');
          $('#home').removeClass('active');
        }
        if(currentPage == 1){
          $('#p1Content').addClass('hide');
          $('#proj1').removeClass('highlight');
          $('#proj1').removeClass('click');
          $('#proj1').removeClass('active');
        }
        if(currentPage == 2){
          $('#p2Content').addClass('hide');
          $('#proj2').removeClass('highlight');
          $('#proj2').removeClass('click');
          $('#proj2').removeClass('active');
        }
        if(currentPage == 3){
          $('#p3Content').addClass('hide');
          $('#proj3').removeClass('highlight');
          $('#proj3').removeClass('click');
          $('#proj3').removeClass('active');
        }
      }
    }
  })
});

// Sidebar scroller
$(document).ready(function() {
  $(window).scroll(function(event){
    var scrollPos = $(window).scrollTop();
    //console.log(scrollPos);
    $('#mainDot').position.top = scrollPos;
    console.log($('#mainDot').position.top);
  });
});


// Draggable jQuery-UI
$(document).ready(function() {
  $(function() { 
    $('#mainDot').draggable({
      containment: '#dotContain',
    });
  });
  $("#mainDot").on("drag", function(event, ui) {
    var thisChanges = (ui.position.top * 7);
    $(window).scrollTop(thisChanges)
    //console.log(ui);
  } );
});

// Sidebar collapse on scroll
// Waypoint Library jQuery
// http://imakewebthings.com/waypoints/guides/jquery-zepto/
$(document).ready(function() {
  //const projectArray1 = [];
  //var dotsObject = '<span class="dot"></span>';
  var waypoint0 = new Waypoint({
    element: $('#p1s0'),
    handler: function() {
      // Do nothing
    }
  })
  var waypoint1 = new Waypoint({
    element: $('#p1s1'),
    handler: function() {
      if($('.dots1').hasClass('hide')){
        $('.dots1').removeClass('hide');
      } else {
        $('.dots1').addClass('hide');
      }
      if($('.btn1').hasClass('navFocus')){
        $('.btn1').removeClass('navFocus');
      } else {
        $('.btn1').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
  var waypoint2 = new Waypoint({
    element: $('#p1s2'),
    handler: function() {
      if($('.dots2').hasClass('hide')){
        $('.dots2').removeClass('hide');
      } else {
        $('.dots2').addClass('hide');
      }
      if($('.btn2').hasClass('navFocus')){
        $('.btn2').removeClass('navFocus');
      } else {
        $('.btn2').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
  var waypoint3 = new Waypoint({
    element: $('#p1s3'),
    handler: function() {
      if($('.dots3').hasClass('hide')){
        $('.dots3').removeClass('hide');
      } else {
        $('.dots3').addClass('hide');
      }
      if($('.btn3').hasClass('navFocus')){
        $('.btn3').removeClass('navFocus');
      } else {
        $('.btn3').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
  var waypoint4 = new Waypoint({
    element: $('#p1s4'),
    handler: function() {
      if($('.dots4').hasClass('hide')){
        $('.dots4').removeClass('hide');
      } else {
        $('.dots4').addClass('hide');
      }
      if($('.btn4').hasClass('navFocus')){
        $('.btn4').removeClass('navFocus');
      } else {
        $('.btn4').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
  var waypoint5 = new Waypoint({
    element: $('#p1s5'),
    handler: function() {
      if($('.dots5').hasClass('hide')){
        $('.dots5').removeClass('hide');
      } else {
        $('.dots5').addClass('hide');
      }
      if($('.btn5').hasClass('navFocus')){
        $('.btn5').removeClass('navFocus');
      } else {
        $('.btn5').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
  var waypoint6 = new Waypoint({
    element: $('#p1s6'),
    handler: function() {
      if($('.dots6').hasClass('hide')){
        $('.dots6').removeClass('hide');
      } else {
        $('.dots6').addClass('hide');
      }
      if($('.btn6').hasClass('navFocus')){
        $('.btn6').removeClass('navFocus');
      } else {
        $('.btn6').addClass('navFocus');
      }
    }, offset: 'bottom-in-view'
  })
});


// Sidebar buttons
$(document).ready(function() {
  $(".btn0").click(function() {
    $("html").animate({
        scrollTop: $("#p1s0").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn1").click(function() {
    $("html").animate({
        scrollTop: $("#p1s1").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn2").click(function() {
    $("html").animate({
        scrollTop: $("#p1s2").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn3").click(function() {
    $("html").animate({
        scrollTop: $("#p1s3").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn4").click(function() {
    $("html").animate({
        scrollTop: $("#p1s4").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn5").click(function() {
    console.log("Click to Section 2");
    $("html").animate({
        scrollTop: $("#p1s5").offset().top -220
      }, 800 //speed
    );
  });
  $(".btn6").click(function() {
    console.log("Click to Section 2");
    $("html").animate({
        scrollTop: $("#p1s6").offset().top -220
      }, 800 //speed
    );
  });
});

// Hero animation
$(document).ready(function() {   
    function animateCloud1() {
        $('#cloud1').animate({
            'right':'-200px'
        }
            ,26000, 'linear'
        )
        .animate(
            {'right':'1600px'}
            ,1
            ,animateCloud1
        ); 
    }
    animateCloud1();
}); 
$(document).ready(function() {   
    function animateCloud2() {
        $('#cloud2').animate({
            'left':'1000px'
        }
            ,36000, 'linear'
        )
        .animate(
            {'left':'100px'}
            ,1, 'linear'
            ,animateCloud2
        ); 
    }
    animateCloud2();
}); 

