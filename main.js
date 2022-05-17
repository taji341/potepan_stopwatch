/*global $*/
$(function(){
    var $1 = $('#1').text(),
        $2 = $('#2').text(),
        $3 = $('#3').text(),
        $4 = $('#4').text(),
        timer = 0; 
    
    
    $('#start').click(function(){
        $('#start').addClass('disabled');
        $('#stop').removeClass('disabled');
        timer = setInterval(function(){
            $1++;
            if($1 == 10) {
                $1 = 0;
                $2++;
                $("#2").text($2);
            }
            if($2 == 10) {
                $2 = 0;
                $3++;
                $("#3").text($3);
            }
            if($3 == 10) {
                $3 = 0;
                $4++;
                $("#4").text($4);
            }
            $("#1").text($1);
     },1000);
    });
    
    $('#stop').click(function(){
        $('#stop').addClass('disabled');
        $('#start').removeClass('disabled');
        clearInterval(timer);
    });
    
    $('#reset').click(function(){
        $('#stop').addClass('disabled');
        $('#start').removeClass('disabled');
        clearInterval(timer);
        $1 = $2 = $3 = $4 = 0;
        $('#1').text(0);
        $('#2').text(0);
        $('#3').text(0);
        $('#4').text(0);
    });
})