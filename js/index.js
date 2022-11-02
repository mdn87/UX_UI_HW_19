// Hover projects in navigation
$(document).ready(function() {   
  $('.nav').hover(function(){
    if($(this).hasClass('active')){
      //do nothing
    } else {
      $(this).addClass('highlight');
      console.log('hover');
    }
  }, function() {
    if(!$(this).hasClass('active')){
      $(this).removeClass('highlight');
    }
  });


});
$("#proj2").click(function(){
    $(this).animate({
      opacity: '0.5'
    },500
    );
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

