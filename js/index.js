$(document).ready(function() {   
  $('#proj1').hover(function(){
        console.log("Mouse Enter");
        $(this).addClass('highlight');
      }, function() {
        console.log("Mouse Enter");
        $(this).removeClass('highlight');
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

