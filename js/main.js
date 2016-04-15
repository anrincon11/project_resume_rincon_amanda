// ANIMATE SCROLL PLUGIN //

$( '#one' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#education' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

$( '#two' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#experience' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

$( '#three' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#skills' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

$( '#four' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#interests' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

$( '#five' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#achievements' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

$( '#six' ).click( function() { //LISTEN FOR CLICK EVENT ON NAV LINK
	$( '#contact' ).animatescroll(); //SCROLL WITH ANIMATION TO SECTION
} );

// SCROLL UP PLUGIN //

$( function() {
	$.scrollUp( {
		scrollName: 'scrollUp', // Element ID
		topDistance: '200', // Distance from top before showing element (px)
		topSpeed: 800, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 500, // Animation in speed (ms)
		animationOutSpeed: 100, // Animation out speed (ms)
		scrollText: 'Scroll to top', // Text for element
		activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	} );
} );
