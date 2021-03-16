$(function(){

   $("#p1").on('click',function(){
      $('#p5').hide(1000, function(){
         $('#p4').hide(1000, function(){
            $('#p3').hide(1000, function(){
               $('#p2').hide(1000)
            })
         })
      })
   });
})
