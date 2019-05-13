
var questions = [{
            ask: "What is Hulk's favorite catchphrase?",
            answer: ["Hulk Crash", "Hulk Smash", "Hulk Punch", "Hulk Stomp"],
            name: "hulk",
            correct: "Hulk Smash",
            div: ".hulk"
        },
        {
            ask: "What is Peter Quill's nickname?",
            answer: ["Star Lord", "Star Quill", "Star Man", "Star Blaster"],
            name: "star",
            correct: "Star Lord",
            div: ".star"
        },
        {
            ask: "What Marvel charater owns the Mjolnir weapon?",
            answer: ["Captain America", "Drake", "Groot", "Thor"],
            name: "thor",
            correct: "Thor",
            div: ".thor"
        },
        {
            ask: "How many infinity stones are there in the Marvel Universe?",
            answer: ["6", "4", "5", "7"],
            name: "stones",
            correct: "6",
            div: ".stones"
        },
        {
            ask: "What is Captain America's name?",
            answer: ["Steve Robbins", "Steve Roberts", "Steve Rogers", "Steve Rovers"],
            name: "steve",
            correct: "Steve Rogers",
            div: ".steve"
        }
    ]

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-button").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(30);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#submit-button')").empty();

    for (var j = 0; j < questions.length; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].div).append('<div">' + questions[j].ask + '</div>');
       
        for (var i = 0; i < questions[i].answer.length; i++) {
         
            $(questions[j].div).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].answer[i] + '"/><label for="' + labels[i] + '">' + questions[j].answer[i] + '</label>');
        }
    
    }
}


var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut();
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

          
            for (var i = 0; i < questions.length; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                
                } else {
                    wrongAnswers++;
                
                };
            }
            $('#correct-timer').append(correctAnswers);
            $('#wrong-timer').append(wrongAnswers);
            $('#timer').fadeIn().show();
            clearInterval(timer);
            return;
        }
    }, 1000);

    
    $('#submit-button').on('click', function() {
        clearInterval(timer);
    })
};



var gradeQuiz = $('#submit-button').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

   
    for (var i = 0; i < questions.length; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    
    countdown();
   ;
    $('.container').fadeOut();
  
    $('#answer-screen').show();
  
    $('#correct-screen').append(correctAnswers);
  
    $('#wrong-screen').append(wrongAnswers);

});