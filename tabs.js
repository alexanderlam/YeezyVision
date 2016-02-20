// Press extension icon
// Open a new tab
tabs = {};
tabIds = [];
website = [];
counter = 0;
found = [];
found[0] = 0;
chrome.browserAction.onClicked.addListener(function(activeTab){
	chrome.tabs.create({url:chrome.extension.getURL("popup.html")}, function(tab){
	chrome.windows.getCurrent(function(currentWindow) {
	    currentWindowId = currentWindow.id;
	    saveURL();
    chrome.windows.getLastFocused(function(focusedWindow) {
	      focusedWindowId = focusedWindow.id;
	      

	      loadWindowList();
	    });
	  });
	
	});

});
function saveURL() {
		chrome.windows.getAll({populate:true},function(windows){
		  windows.forEach(function(window){
		    window.tabs.forEach(function(tab){
		      //collect all of the urls here, I will just log them instead
		    // var temp = tab.url.split(".");
		     website[counter] = tab.url
		     var temp = website[counter].split("e");
		      website[counter] = temp[0];
		      //console.log(website[0]);
		      if(website[counter]=="https://www.googl") {
		      		found[counter]= 1;
		      	    //alert(website[counter]);
		      	    counter++;

		      } else {
		      	found[counter] =0;
		      	counter++;
		      }

		      
		    });

		  });
		});
}
function loadWindowList() {
	  // document.getElementById('myResults').innerHTML = 'Hello World';
	  chrome.windows.getAll({ populate: true }, function(windowList) {
	    tabs = {};
	    tabIds = [];
	    var website = [];
	    var counter = 0;
	    for (var i = 0; i < windowList.length; i++) {
	      windowList[i].current = (windowList[i].id == currentWindowId);
	      windowList[i].focused = (windowList[i].id == focusedWindowId);
	
	      for (var j = 0; j < windowList[i].tabs.length; j++) {

	        tabIds[tabIds.length] = windowList[i].tabs[j].id;
	        tabs[windowList[i].tabs[j].id] = windowList[i].tabs[j];
	        if(found[j]==1) {
	  	        removeTab(tabIds[j]);
	        } else { 
	        	//console.log("eee");
	        }

	       // alert(tabIds[j]);
	       // removeTab(tabIds[j]);
	      }
	    }

		
		    
	
		
	    // var input = new JsExprContext(windowList);
	    // var output = document.getElementById('windowList');
	    // jstProcess(input, output);
	  });
}

function removeTab(tabId) {
	 // try {
	    chrome.tabs.remove(tabId, function() {
	      appendToLog('tab: ' + tabId + ' removed.');
	    });
	//  } catch (e) {
	 //   alert(e);
	//  }
	}

// Display list of all tab url's


/*

function getCurrentTaburl(callback){
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs){
		var tabs = tabs[0];
		var url = tab.url;
		console.asseret(type of url = 'string', 'tab.url should be a string');
		callback(url);
	});
}




function getImageUrl(searchTerm, callback, errorCallback){
	var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
    '?v=1.0&q=' + encodeURIComponent(searchTerm);
    var x = new XMLHttpRequest();
    x.open('GET', searchUrl);
    
}
*/