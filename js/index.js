$(document).ready(function() {
// Hover projects in navigation
  $('.nav').hover(function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('highlight');
    }
  }, function() {
    if(!$(this).hasClass('active')){
      $(this).removeClass('highlight');
    }
  });

// Animate nav and load page on click
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
      console.log(pageNumber);
      console.log(currentPage);

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
        }
        if(currentPage == 1){
          $('#p1Content').addClass('hide');
          $('#proj1').removeClass('highlight');
        }
        if(currentPage == 2){
          $('#p2Content').addClass('hide');
          $('#proj2').removeClass('highlight');
        }
        if(currentPage == 3){
          $('#p3Content').addClass('hide');
          $('#proj3').removeClass('highlight');
        }
      }
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

