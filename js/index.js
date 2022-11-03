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
$(window).scroll(function(){
  var scrollPos = $(document).scrollTop();
  //console.log(scrollPos);
});

//Waypoint Library jQuery include
$(document).ready(function() {
  var waypoint0 = new Waypoint({
    element: $('#p1s0'),
    handler: function() {
      console.log("Section 0");
    }
  })
  var waypoint1 = new Waypoint({
    element: $('#p1s1'),
    handler: function() {
      console.log("Section 1");
    }
  })
  var waypoint2 = new Waypoint({
    element: $('#p1s2'),
    handler: function() {
      console.log("Section 2");
    }
  })
  var waypoint3 = new Waypoint({
    element: $('#p1s3'),
    handler: function() {
      console.log("Section 3");
    }
  })
  var waypoint4 = new Waypoint({
    element: $('#p1s4'),
    handler: function() {
      console.log("Section 4");
    }
  })
  var waypoint5 = new Waypoint({
    element: $('#p1s5'),
    handler: function() {
      console.log("Section 5");
    }
  })
  var waypoint6 = new Waypoint({
    element: $('#p1s6'),
    handler: function() {
      console.log("Section 6");
    }
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

//https://wowjs.uk/ Reveal animations on scroll

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

