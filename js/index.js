$("#proj1").hover(function(){
        console.log("Mouse Enter");
    }, function() {
        console.log("Mouse Leave");
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

//jQuery does not have keyframes built in
$.keyframe.define([{
  name:'orbitPos',
  '0%': {
    'margin-left':'0px'
  },
  '50%': {
    'margin-left':'600px'
  },
  '100%': {
    'margin-left':'0px'
  }
}, {
  name:'orbitScale',
  from: {
    'transform':'rotate(90deg)'
  },
  to: {
    'transform':'rotate(450deg)'
  }
}]);
$('#orbit').playKeyframe({
  name:'orbitPos',
  duration:"3s",
  timingFunction:'ease',
  iterationCount:'infinite',
  direction:'normal',
  fillMode:'forwards',
  complete: increment
});
