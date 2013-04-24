function onPhotoDataSuccess() {
	//
}

function onFail() {
	//
}

function testCam() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 50,
		destinationType: Camera.DestinationType.DATA_URL 
	});
	
}

function img1click() 
{document.IMG.src="oppervlaktecirkel.jpg" onclick="rekenen.html";}

function rekenen() {
	var straal = parseInt($('#straal').val());
	var pi = Math.PI;
	var antwoord = straal * straal * pi;
	
	$('#uitkomst').text("De oppervlakte is " + antwoord);
}

function rekenen2() {
	var lengte = parseInt($('#lengte').val());
	var breedte = parseInt($('#breedte').val());
	var antwoord = lengte * breedte;
	
	$('#uitkomst').text("De oppervlakte is " + antwoord);
}

function rekenen3() {
	var straal = parseInt($('#straal').val());
	var pi = Math.PI;
	var antwoord = 2 * straal * pi;
	
	$('#uitkomst').text("De omtrek is " + antwoord);
}
var app = {
    // Application Constructor
    initialize: function() {
    	console.log('initializing...');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        navigator.notification.alert(
		        'Cordova is ready!',       // message
		        function() {},  // callback
		        'Congratulations',            // title
		        'Done'                      // buttonName
		       );
    }
};