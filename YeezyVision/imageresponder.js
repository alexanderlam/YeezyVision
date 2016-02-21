//images of Kanye West loads here
// chrome extension
var tab = [];
var nameid= [];
var website = [];
var onSelectChange = function() {
    function1();
    function2();
};
$(document).ready(function(){
   replaceImages();
});

function replaceImages(){
 $('*').each(function(){
    var backImg,
        images;

    if ($(this).is('img')) {
       //replaces the picture with Kanye $(this).attr('src', 'path/tp/newImage.jpg');
    } else {
        backImg = $(this).css('background-image');
        if (backImg != 'none') {
            console.log(backImg.substring(4, backImg.length-1));
        }
    }
});
}

function imageCaller(){
    alert( $('img').attr('src') );
    $('#test').change(onSelectChange);
}



