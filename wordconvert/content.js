var pElements = document.querySelectorAll('p', 'tr', 'th', 'li', 'a');

asyncLoop(pElements.length, function (loop) {

        var element = pElements[loop.iteration()];
        asyncLoop(element.childNodes.length, function (loop2) {
                    var node = element.childNodes[loop2.iteration()];

                    if (node.nodeType === 3 && node.nodeValue.length >= 8) {
                        var text = node.nodeValue;
                        replaceKeyPhrases(text, function (replacedText) {
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }
                        });
                    }
                    // log the iteration
                    console.log(loop2.iteration());

                    // Okay, for cycle could continue
                    loop2.next();

                },
                function () {
                    console.log('mid-cycle ended')
                })
            // log the iteration
        console.log(loop.iteration());

        // Okay, for cycle could continue
        loop.next();


    },
    function () {
        console.log('cycle ended')
    }
);

var hElements = document.querySelectorAll('h1', 'h2', 'h3', 'h4', 'h5', 'h6');

asyncLoop(hElements.length, function (loop) {

        var element = hElements[loop.iteration()];
        asyncLoop(element.childNodes.length, function (loop2) {
                    var node = element.childNodes[loop2.iteration()];

                    if (node.nodeType === 3 && node.nodeValue.length >= 6) {
                        var text = node.nodeValue;
                        getQuote(function (quote) {
                            if (quote !== text) {
                                element.replaceChild(document.createTextNode(quote), node);
                            }
                        });
                    }
                    // log the iteration
                    console.log(loop2.iteration());

                    // Okay, for cycle could continue
                    loop2.next();

                },
                function () {
                    console.log('mid-cycle ended')
                })
            // log the iteration
        console.log(loop.iteration());

        // Okay, for cycle could continue
        loop.next();


    },
    function () {
        console.log('cycle ended')
    }
);


$('img').each(
    function () {
        $(this).css({
            'display': 'block',
            'position': 'absolute',
            'top': '0',
            'left': '0'
        });
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        if (imgWidth >= 150) {
            var wrapperDiv = "<div style='display: block; position: relative; height: " + imgHeight + "px; width: " + imgWidth + "px;'></div>";
            $(this).wrap(wrapperDiv);
            var curImg = this;
            getFaceLocation($(this)[0].src, function (jsonResponse) {
                var responseArray = $.map(jsonResponse, function(el) { return el });                    
                console.log("mapSuccess: "+responseArray);
                    asyncLoop(responseArray.length, function (loop3) {
                        console.log("loopSuccess");
                            var singleResponse = responseArray[loop3.iteration()];
                            var headTop = singleResponse['faceRectangle']['top'];
                            var headLeft = singleResponse['faceRectangle']['left'];
                            var headHeight = singleResponse['faceRectangle']['height'];
                            var headWidth = singleResponse['faceRectangle']['width'];
                            var min = 1;
                            var max = 11;
                            var randImg = "http://alexanderlam.ca/images/sqr_kanye-" + (Math.floor(Math.random() * (max - min + 1)) + min) + ".png";
                            
                            var yeezyHead = "<img style='display: block; position: absolute; top: " + headTop+"px; left: " +
                                headLeft+"px; height:" + headHeight + "px; width:" + headWidth + "px; z-index: 1;' alt='' src='"+randImg+"'>";
                        console.log(yeezyHead);
                            $(curImg).before(yeezyHead,loop3.next());
                            
                        },
                        function () {
                            console.log('cycle ended');
                        }

                    );
            });
        }

    });