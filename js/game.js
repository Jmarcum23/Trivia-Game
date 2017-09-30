var myQuestions = [
	{
		question: "1. Steph Curry and Klay Thompson are known as what?",
		answers: ['The Smash Brothers','The Splash Brothers','The Spin Brothers'],
		correctAnswer: 1
	},
	{
		question: "2. Who was named Finals MVP for the Warriors during last year's championship run?",
		answers:['Draymond Green','Klay Thompson','Kevin Durrant'],
		correctAnswer: 2
	},
	{
		question: "3. Which current Warrior finished second in last year's Defensive Player of the Year voting?",
		answers: ['Draymond Green','Andrew Bogut','Klay Thompson'],
		correctAnswer: 0
	},
	{
		question: "4. Which Warriors head coach holds the team's all-time best winning percentage?",
		answers: ['Mark Jackson','Steve Kerr','P.J. Carlesimo'],
		correctAnswer: 1
	},
	{
		question: "5. Who is the Warriors' current majority owner?",
		answers: ['Joe Lacob','Ted Leonsis','Steve Ballmer'],
		correctAnswer: 0
	},
	{
		question: "6. Which Hall of Fame coach has twice been the head coach of the Warriors?",
		answers: ['Phil Jackson','Greg Popovich','Don Nelson'],
		correctAnswer: 2
	},
	{
		question: "7. Who set an NBA record with 100 points in a game for the Warriors?",
		answers: ['Stephen Curry','Wilt Chamberlain','Paul Arizin'],
		correctAnswer: 1
	},
	{
		question: "8. In what city did the Warriors franchise start?",
		answers:['Rochester','San Francisco','Philadelphia'],
		correctAnswer: 2
	},
	{
		question: "9. How many championships has the Warriors franchise won?",
		answers: ['2','7','4'],
		correctAnswer: 2
	},
	{
		question: "10. Which player did the Warriors trade for Chris Webber during the 1993 NBA Draft?",
		answers: ['Sam Cassell','Penny Hardaway','Vin Baker'],
		correctAnswer: 1
	},
];

//global variables
var questions = [];
var answers = [];
var correctAnswers = 0;
var value = $("input[type='radio']:checked");

//show the questions and answer choices on the screen
function showQuestions(){
    var questionClass = $(document).find("#quiz > .question");
    var choiceList = $(document).find("#quiz > .choice-list");

	for(var i = 0; i < myQuestions.length; i++){
		questions = myQuestions[i].question;
		questionClass.append('<div ><h3>' + questions + '</h3></div>');
		for(var j = 0; j < myQuestions[i].answers.length; j++){
			answers = myQuestions[i].answers[j];
			insertAnswers = $('<li class="answers"><input type="radio" value=' + j + ' name="radio' + i + '"/>' + answers + '</li>').appendTo(".question");
		}
	}
}

//keep track of correct answers and display once submit button has been clicked
function showResults() {
	var userAnswer = '';
	for(var i = 0; i < myQuestions.length; i++){	
		userAnswer =  $('input[name="radio' + i + '"]:checked').val();
		console.log(userAnswer, myQuestions[i].correctAnswer, correctAnswers);
		if(userAnswer == myQuestions[i].correctAnswer){
			correctAnswers++;
		}
	}
	$('#score').html(correctAnswers + ' out of ' + myQuestions.length + ' correct');
}




//buttons to click which start and end quiz
window.onload = function() {
  $("#start").click(quiz.start);
  $("#submit").click(quiz.stop);
  $("#submit").toggle();
};

var intervalId;
var clockRunning = false;

var quiz= {

	time: 60,

	start: function() {
    if (!clockRunning) {
        intervalId = setInterval(quiz.count, 1000);
        clockRunning = true;
        showQuestions();
        $('#start').remove();
        $("#submit").toggle(display);
    }
    },

    count: function() {
    quiz.time--;
    var converted = quiz.timeConverter(quiz.time);
    console.log(converted);
    $("#display").html(converted);
    },

    timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

  stop: function(){
    clearInterval(intervalId);
    clockRunning = false;
    showResults();
    $('#quiz').remove();
    $('#submit').remove();
    $('#start').remove();
    },
};



