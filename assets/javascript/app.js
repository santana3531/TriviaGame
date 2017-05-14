// Browser load game.
$(document).ready(function(){


//Start timer
		//create timer
		var time = 45;
		var timerInterval;

		function myTimer() {
			time--;
			console.log(time);
			$(".displayTime").html(time);
		 // if time equals zero do this 
				if (time === 0) {
					clearInterval(timerInterval);
					alert("Times-Up!");
					displayResults();

				}
		
		}

		$("#start-button").on("click", function(event){
			timerInterval = setInterval(myTimer, 1000);

		});


		function displayResults() {
  			var results = $('input[type=radio]:checked');
  			for (var i = 0; i < results.length; i++) {
  				results[i]
  				console.log(results[i].value);

  			if(results[i].value == 1) {
  				$(results[i]).addClass("correct")

  			} else {
  				$(results[i]).addClass("wrong")
  			}
  		}

  	}
 
 		$("#submit").on("click", function(event){
			clearInterval(timerInterval);
			displayResults();
 		})






//collect all the values of 1 as correct answer


//log answers selected



//count how many right answers


//calculate the score of right answers


//give score


}) // end of document.ready "load"
//reset game.