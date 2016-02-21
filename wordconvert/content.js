$("body").wrapInner("<div id='#innerBody' style='background-color:#fff;'></div>", function () {
    $("#innerbody").before("<div id='#loadingGif' style='position: fixed;left: 0px;top: 0px;width: 100%;height: 100%;z-index: 9999;	background: url(loading.gif) center no-repeat #fff;'></div>", function () {
        $("#innerBody").fadeOut("fast", function () {
            $("#loadingGif").fadeIn("fast", function () {

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
                        var imgElements = document.querySelectorAll('img');

                        asyncLoop(imgElements.length, function (loop) {

                                var element = imgElements[loop.iteration()];
                                asyncLoop(element.childNodes.length, function (loop2) {
                                            var node = element.childNodes[loop2.iteration()];

                                            if (node.nodeType === 2 && ) {
                                                var source = node.src;
                                                //alter image here
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
                                $("#loadingGif").fadeOut("fast", function () {
                                    $("#innerBody").fadeIn("fast", function () {});
                                });
                            }
                        );
                                });
                            }
                        );

                    }
                );



            });
        });
    });
});


