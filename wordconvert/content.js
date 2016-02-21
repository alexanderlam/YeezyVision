var pElements = document.querySelectorAll('p','tr','th','li','a');

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

var hElements = document.querySelectorAll('h1','h2','h3','h4','h5','h6');

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
