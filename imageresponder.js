//images of Kanye West loads here
// chrome extension
var tab = [];
var nameid= [];
var website = [];

$(document).ready(function(){
   imagecaller();
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
    alert( $('img')[0].src );
};



