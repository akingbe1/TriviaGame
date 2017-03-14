var timer = 60;
var intervalId;



// This function checks if the selected answers are correct/incorrect/unchecked, tallies the score, and reveals the results

function sixtySeconds() {

var answer1 = $('input[name="Tiger"]');
var score1 = 0; 
for (var i =0; i < answer1.length; i++) {
	if (answer1[i].checked) {
		score1 = parseInt(answer1[i].value);
	}
}

var answer2 = $('input[name="MLB"]');
var score2 = 0; 
for (var i =0; i < answer2.length; i++) {
	if (answer2[i].checked) {
		score2 = parseInt(answer2[i].value);
	} 
}

var answer3 = $('input[name="NFL"]');
var score3 = 0; 
for (var i =0; i < answer3.length; i++) {
	if (answer3[i].checked) {
		score3 = parseInt(answer3[i].value);
	} 
}

var answer4 = $('input[name="grand-slam"]');
var score4 = 0;
for (var i =0; i < answer4.length; i++) {
	if (answer4[i].checked) {
		score4 = parseInt(answer4[i].value);
	}
}

var answer5 = $('input[name="NCAA"]');
var score5 = 0; 
for (var i =0; i < answer5.length; i++) {
	if (answer5[i].checked) {
		score5 = parseInt(answer5[i].value);
	} 
}

var answer6 = $('input[name="NBA"]');
var score6 = 0; 
for (var i =0; i < answer6.length; i++) {
	if (answer6[i].checked) {
		score6 = parseInt(answer6[i].value);
	} 
}


var result = score1 + score2 + score3 + score4 + score5 + score6;
$("#results").html("Questions Answered Correctly: " + result + "/6");

}




//When the "submit" button is cliekd, this function stops the timer and runs the sixtySeconds function to reveal the results 

$("#submit").click(function() {
	stop();
	sixtySeconds();
	
});


//This function counts the timer down from 60 seconds and stops once the time hits zero


function decrement() {
	timer--;
	$("#time").html("<h2>" + timer + "</h2>");
	if (timer === 0) {
        stop();
    }
 }


//This hides the trivia questions until the "start" button is clicked

 $('#quiz').hide();


 //This on-click function begins the quiz by showing the questions, clearing the previous answers,
 //clearing the previosu results, setting the timer to 60 seconds an counts down, and runs the 
 //sixtySeconds function when the time runs out

 $("#start").click(function() {
 	$('input[name=Tiger]').attr('checked',false);
 	$('input[name=MLB]').attr('checked',false);
 	$('input[name=NFL]').attr('checked',false);
 	$('input[name=grand-slam]').attr('checked',false);
 	$('input[name=NCAA]').attr('checked',false);
 	$('input[name=NBA]').attr('checked',false);
    $('#quiz').show();
    $("#results").empty();
    timer = 60;
    run();
	decrement();
	setTimeout(sixtySeconds, 1000 * 60);

});

 //This run function begins the timer and counts down in one second intervals

 function run() {
    intervalId = setInterval(decrement, 1000);
 }


//This function stops the timer

function stop() {
     clearInterval(intervalId);
 }

