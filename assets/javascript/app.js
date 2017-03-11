var correct = 0;
var incorrect = 0;
var unamswered = 0;
var timer = 60;
var intervalId;

function checkAnswers() {

}

//create timer that counts down 60 seconds
function decrement() {
	timer--;
	$("#time").html("<h2>" + timer + "</h2>");
	if (timer === 0) {
        stop();
    }
 }


 function run() {
    intervalId = setInterval(decrement, 1000);
 }

function stop() {
     clearInterval(intervalId);
    }


decrement();
run();