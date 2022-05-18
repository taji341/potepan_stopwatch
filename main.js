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
            if($1 == 100) {
                $1 = 00;
                $2++;
                $("#2").text($2);
            }
            if($2 == 60) {
                $2 = 00;
                $3++;
                $("#3").text($3);
            }
            if($3 == 60) {
                $2 = 00;
                $3++;
                $("#4").text($4);
            }
            $("#1").text($1);
     },10);
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
        $1 = $2 = $3 = $4 = 00;
        $('#1').text('00');
        $('#2').text('00');
        $('#3').text('00');
        $('#4').text('00');
    });
})