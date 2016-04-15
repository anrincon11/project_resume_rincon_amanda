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

// HOVER EFFECT - CUSTOM JQUERY CODE //

// ---------- DESIGN ICON ---------- //

$( '#design' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS DESIGN INTEREST
	$( '#design img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#design' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES DESIGN INTEREST
	$( '#design img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '35%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- MUSIC ICON ---------- //

$( '#music' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS MUSIC INTEREST
	$( '#music img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#music' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES MUSIC INTEREST
	$( '#music img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '35%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- EXERCISING ICON ---------- //

$( '#exercising' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS EXERCISING INTEREST
	$( '#exercising img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '100%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#exercising' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES EXERCISING INTEREST
	$( '#exercising img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- TRAVELING ICON ---------- //

$( '#traveling' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS TRAVELING INTEREST
	$( '#traveling img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#traveling' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES TRAVELING INTEREST
	$( '#traveling img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '45%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- PAINTING ICON ---------- //

$( '#painting' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS PAINTING INTEREST
	$( '#painting img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#painting' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES PAINTING INTEREST
	$( '#painting img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '45%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- OUTDOORS ICON ---------- //

$( '#outdoors' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS OUTDOORS INTEREST
	$( '#outdoors img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#outdoors' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES OUTDOORS INTEREST
	$( '#outdoors img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '40%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- SPORTS ICON ---------- //

$( '#sports' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS SPORTS INTEREST
	$( '#sports img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#sports' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES SPORTS INTEREST
	$( '#sports img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '45%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

// ---------- ANIMALS ICON ---------- //

$( '#animals' ).mouseenter( function() { //LISTEN FOR MOUSE ENTERS ANIMALS INTEREST
	$( '#animals img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '70%', //EXPAND THE WIDTH OF THE IMAGE TO 70% OF ITS SIZE
		opacity: 0.4 //ADD A 40% TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );

$( '#animals' ).mouseleave( function() { //LISTEN FOR WHEN MOUSE LEAVES ANIMALS INTEREST
	$( '#animals img' ).animate( { //TARGET AND ANIMATE THE IMAGE IN ARTICLE
		width: '40%', //SHRINK THE WIDTH BACK TO ITS ORIGINAL SIZE
		opacity: 1.0 //TAKE OUT THE TRANSPARENCY
	}, 1500 ); //DURATION OF EVENT
} );
