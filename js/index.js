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
      console.log(pageNumber);
    }
  })
});

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

