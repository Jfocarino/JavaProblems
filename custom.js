$(document).ready(function(){
	var counter 		= 3;
	var dt 				= new Date();
	var h 				= dt.getHours();
	var m   			= dt.getMinutes();
	var s   			= dt.getSeconds();
	var timeOut;
	var timer;
	var cd; //COUNTDOWN INTERVAL
	var secondCounter 	= 0;

	$("#startGame").click(function(){
		startCountDown();
	});

	function startCountDown(){

		cd = setInterval(function(){
			console.log(counter);
			$("#startGame").html( counter );
			counter--;
		} , 1000);

		timeOut = setTimeout( function(){
			console.log("TIME's UP !");
			clearInterval( cd );
			updateClockView();
			hideStart();
			startTimer();
			showClock();
		}, 4000);

	}

	function showClock(){
		$("#clock").show();
	}

	function hideStart(){
		$("#startGame").hide()
	}

	function startTimer(){
		timer = setInterval( function(){
			giveMeTheTime();
			updateClockView();
			counterHandler();
			handleUIUX();
			}, 1000 );
	}

	function counterHandler(){

		if(secondCounter < 60 ){
			secondCounter++;
		}else{
			secondCounter = 0;
		}
	}

	function handleUIUX(){
		if( secondCounter % 2 === 0){
			$("body").css( 'background', 'green' );
			$("body").css( 'color', 'blue' );

			console.log( secondCounter + "it's even" );
		}else{
			$("body").css( 'background', 'blue' );
			$("body").css( 'color', 'green' );
			console.log( secondCounter + "it's odd" );
		}

	}

	function giveMeTheTime(){
		dt 	= new Date();
		h 	= dt.getHours();
		m   = dt.getMinutes();
		s   = dt.getSeconds();
	}

	function updateClockView(){
		$("#h").html( fixNumber( h ) );
		$("#m").html( fixNumber( m ) );
		$("#s").html( fixNumber( s ) );
	}

	function fixNumber( num ){
		if( num < 10 ){
			num = "0"+num;
		}
		return num;
	}
});
$(document).ready(function(){
	
	$("#closedbtn").click( function(){

		//alert("You Clicked Me!");

		$("#Lightbox").fadeOut( 300 );
	})   });

		$("#openLightbox").click(function(){

			$("#Lightbox").FadeIn(300);
		});

		$("#kitty").click(function(){

			//console.log; $(this) );

			$("#Lightbox").FadeIn( 300 )

			$("LightboxContentbox div").html("<img src='http://nerdreactor.com/wp-content/uploads/2014/08/hello-kitty-head1.gif' class='lb_img'/>")
		});


$(document).ready(function(){
	alert("Ready");
});
