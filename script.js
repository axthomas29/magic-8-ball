$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Definitely", "Yeppers", "Most likely", "Outlook good", "Signs point to yes", "Try again", "Ask again later", "Don't count on it", "No way", "It's looking bleak", "Very doubtful"];
$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");


var randomNumber = Math.random ();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
		 console.log(question);
        console.log(answer);
};

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
 setTimeout(function() {
    var question = prompt("Ask a yes or no question");
    magic8Ball.askQuestion(question); }, 1000);
};

$("#questionButton").click( onClick );

});
