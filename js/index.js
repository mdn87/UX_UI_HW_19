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
});

// Animate nav and load page on click
$(document).ready(function() {
  $('.nav').on('click', function(){
    var clickedPage = $(this);
    if(!$(this).hasClass('active')){
      $(this).addClass('click');
      $(this).addClass('active');
      loadPage(clickedPage);
    }
    function loadPage(){
      if($(this).is('#proj1')){
        console.log('Project 1 Clicked');
      }
      if($(this).parent().hasClass('#proj2')){
        console.log('Project 2 Clicked');
      }
      if($(this).hasClass('#proj3')){
        console.log('Project 3 Clicked');
      }
    }
  })
});

$(document).ready(function() {   
    function animateCloud1() {
        $('#cloud1').animate({
            'right':'400px'
        }
            ,16000, 'linear'
        )
        .animate(
            {'right':'1000px'}
            ,1
            ,animateCloud1
        ); 
    }

    animateCloud1();
}); 
$(document).ready(function() {   
    function animateCloud2() {
        $('#cloud2').animate({
            'right':'400px'
        }
            ,6000, 'linear'
        )
        .animate(
            {'right':'1000px'}
            ,1, 'linear'
            ,animateCloud2
        ); 
    }

    animateCloud2();
}); 

