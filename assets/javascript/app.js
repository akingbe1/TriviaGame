var correct = 0;
var incorrect = 0;
var unamswered = 0;
var timer = 10;
var intervalId;
var score = 0;

function checkAnswers() {

}


function sixtySeconds() {

var answer1 = $('input[name="Tiger"]');
for (var i =0; i < answer1.length; i++) {
	if (answer1[i].checked) {
		score1 = parseInt(answer1[i].value);
	}
}

var answer2 = $('input[name="MLB"]');
for (var i =0; i < answer2.length; i++) {
	if (answer2[i].checked) {
		score2 = parseInt(answer2[i].value);
	}
}

var answer3 = $('input[name="NFL"]');
for (var i =0; i < answer3.length; i++) {
	if (answer3[i].checked) {
		score3 = parseInt(answer3[i].value);
	}
}

var answer4 = $('input[name="grand-slam"]');
for (var i =0; i < answer4.length; i++) {
	if (answer4[i].checked) {
		score4 = parseInt(answer4[i].value);
	}
}

var answer5 = $('input[name="NCAA"]');
for (var i =0; i < answer5.length; i++) {
	if (answer5[i].checked) {
		score5 = parseInt(answer5[i].value);
	}
}

var answer6 = $('input[name="NBA"]');
for (var i =0; i < answer6.length; i++) {
	if (answer6[i].checked) {
		score6 = parseInt(answer6[i].value);
	}
}

console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);
console.log(score5);
console.log(score6);

var result = score1 + score2 + score3 + score4 + score5 + score6;
$("#results").html(result + "/6");






	//var Tiger = checked;
	//for(var i = 0; i < Tiger.length; i++) {
	//	if (Tiger[i].checked) {
	//		score = parseInt(Tiger[i].value);
	//	}
	//}

	//	result = Tiger

	//var answer1 = $('[name=Tiger]').checked;
//	var answer2 = $('[name=MLB]').checked;
//	var answer3 = $('[name=NFL]').checked;
//	var answer4 = $('[name=grand-slam]').checked;
//	var answer5 = $('[name=NCAA]').checked;
//	var answer6 = $('[name=NBA]').checked;

//	var score = answer1 + answer2 + answer3 + answer4 + answer5 + answer6;
//	 $("#results").html(score);
//	 console.log(score);

	// var answer = $('[name=Tiger]');
	// for (var i = 0; i < answer.length; i++) {
	 	//if (answer[i].checked) {
	 	//	console.log(answer[i.value])
	 //	}
	// }


}


setTimeout(sixtySeconds, 1000 * 10);


//create timer that counts down 60 seconds
function decrement() {
	timer--;
	$("#time").html("<h2>" + timer + "</h2>");
	if (timer === 0) {
        stop();
    }
 }


//$("#start").click(function() {
//	decrememt();
//}

 function run() {
    intervalId = setInterval(decrement, 1000);
 }

function stop() {
     clearInterval(intervalId);
 }


decrement();
run();