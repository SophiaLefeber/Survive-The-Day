$(document).ready(function() {


	
// // music

//     var audio1 = document.createElement('audio');
//         audio1.setAttribute('src', 'sound/Game Music.mp3')

//     $('.music').click(function() {
//         audio1.play();
//     });

//     $('.music').dblclick(function() {
//         audio1.pause();
//     });

// // bad sound

//     var audio2 = document.createElement('audio');
//         audio2.setAttribute('src', 'sound/Fail.mp3')

//     $('.badmusic').click(function() {
//         audio2.play();
//     });

// // good sounds


//     var audio3 = document.createElement('audio');
//         audio3.setAttribute('src', 'sound/Success.mp3')

//     $('.goodmusic').click(function() {
//         audio3.play();
//     });



// phone

$( "#phone" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Getting Ready.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#phone-link" ).click(function( event ) {
	$( "#phone" ).dialog( "open" );
	event.preventDefault();
});

// instructions

$( "#help" ).dialog({
	autoOpen: false,
	width: 400,

});

$( "#help-link" ).click(function( event ) {
	$( "#help" ).dialog( "open" );
	event.preventDefault();
});


// mirror

$( "#mirror" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Car.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#mirror-link" ).click(function( event ) {
	$( "#mirror" ).dialog( "open" );
	event.preventDefault();
});


// wheel 1

$( "#wheel" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'WGS.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#wheel-link" ).click(function( event ) {
	$( "#wheel" ).dialog( "open" );
	event.preventDefault();
});

// WGS door

$( "#WGSdoor" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Option 1",
			click: function() {
				window.location.href = 'LunchHW.html';
			}
		},
		{
			text: "Option 2",
			click: function() {
				window.location.href = 'In Progress.html';
			}
		}
	]
});

$( "#WGSdoor-link" ).click(function( event ) {
	$( "#WGSdoor" ).dialog( "open" );
	event.preventDefault();
});

// LunchHW Door

$( "#LHWdoor" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Interactive Start.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#LHWdoor-link" ).click(function( event ) {
	$( "#LHWdoor" ).dialog( "open" );
	event.preventDefault();
});

// Interactive Laptop

$( "#lapdis" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Distracted.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#lapdis-link" ).click(function( event ) {
	$( "#lapdis" ).dialog( "open" );
	event.preventDefault();
});


// Interactive Notebook

$( "#intbook" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'In Progress.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#intbook-link" ).click(function( event ) {
	$( "#intbook" ).dialog( "open" );
	event.preventDefault();
});

// Distracted X

$( "#X" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Interactive After Distraction.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#X-link" ).click(function( event ) {
	$( "#X" ).dialog( "open" );
	event.preventDefault();
});


// Dan

$( "#Dan" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Car to dinner.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#Dan-link" ).click(function( event ) {
	$( "#Dan" ).dialog( "open" );
	event.preventDefault();
});

// Keys Interactive

$( "#Keysint" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'In Progress.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#Keysint-link" ).click(function( event ) {
	$( "#Keysint" ).dialog( "open" );
	event.preventDefault();
});

// Wheel 2

$( "#wheel2" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Dinner after help.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#wheel2-link" ).click(function( event ) {
	$( "#wheel2" ).dialog( "open" );
	event.preventDefault();
});

// mom and dad

$( "#momdad" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'In Progress.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#momdad-link" ).click(function( event ) {
	$( "#momdad" ).dialog( "open" );
	event.preventDefault();
});


// table phone

$( "#tabphone" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'In Progress.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#tabphone-link" ).click(function( event ) {
	$( "#tabphone" ).dialog( "open" );
	event.preventDefault();
});


// homework at dinner

$( "#dinnerhw" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'hwcarceramics.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#dinnerhw-link" ).click(function( event ) {
	$( "#dinnerhw" ).dialog( "open" );
	event.preventDefault();
});

// Wheel 3

$( "#wheel3" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'hwceramics.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#wheel3-link" ).click(function( event ) {
	$( "#wheel3" ).dialog( "open" );
	event.preventDefault();
});

// Ceramics Keys

$( "#ceramickey" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'car night hw.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#ceramickey-link" ).click(function( event ) {
	$( "#ceramickey" ).dialog( "open" );
	event.preventDefault();
});

// wheel 4- night

$( "#wheel4" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'Night HW.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#wheel4-link" ).click(function( event ) {
	$( "#wheel4" ).dialog( "open" );
	event.preventDefault();
});

// bed

$( "#bed" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'good ending.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#bed-link" ).click(function( event ) {
	$( "#bed" ).dialog( "open" );
	event.preventDefault();
});

// tv

$( "#tv" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Yes",
			click: function() {
				window.location.href = 'bad ending.html';
			}
		},
		{
			text: "No",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

$( "#tv-link" ).click(function( event ) {
	$( "#tv" ).dialog( "open" );
	event.preventDefault();
});


});




