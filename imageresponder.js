//images of Kanye West loads here
// chrome extension
var tab = [];
var nameid= [];
var website = [];
var onSelectChange = function() {
    function1();
    function2();
$(document).ready(function(){
   thisismyfunction();
});

function thisismyfunction(){
 $('*').each(function(){
    var backImg;

    if ($(this).is('img')) {
        console.log($(this).attr('src'));
    } else {
        backImg = $(this).css('background-image');
        if (backImg != 'none') console.log(backImg.substring(4, backImg.length-1));
    }
});
}

function imagecaller(){
    alert( $('img').attr('src') );
    $('#test').change(onSelectChange);

};





