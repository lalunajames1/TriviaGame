$(document).ready(function() { 
    
var numQuestion = 0;
var userPick;


var questions = [
"He was a pioneer of rock & roll and one of his songs was feature on the movie Back to the Future",
"Which American folk singer from the 60\’s recently won a Nobel prize?",
"Who is the god father of Punk rock?",
"Who created the song Rock the Casbah?",
"Name a popular band from the 1960s British invasion?",
]

var answers = [
    { 
        ans1: "Little Richards", 
        ans2: "Chuck Berry", 
        ans3: "Jerry Lee Lewis", 
        ans4: "Elvis Presley",
        correctAns: "Chuck Berry" 
    },
    {
        ans1: "Bob Dylan", 
        ans2: "Neil Young", 
        ans3: "Johnny Cash", 
        ans4: "Townes Van Zandt" 
    },
    {
        ans1: "Joey Ramone",
        ans2: "Iggy Pop",
        ans3: "Joe Strummer",
        ans4: "Chuck Berry"
    }
]

var clone = $("#gone-at-first").clone();
$("#gone-at-first").remove();
  
$("#firstButton").on("click", function(){
    $("#firstButton").remove();
    $("#main-content").append(clone);
    grabQuestion();
    correctFalse();
    
  
});

function sendAnswers(){
    for (let i = 1; i < 5; i++ ){
       $(".answer" + i).attr("data-value", answers[numQuestion]["ans" + i])
        $(".answer" + i).text(answers[numQuestion]["ans" + i])
// answers[0].ans1 This is the same as the code above
// answers[0].ans3
// answers[0].ans4
console.log("working") // This helps see if this function is working
    }
    numQuestion++
}


function grabQuestion(){
   $("#question").text(questions[0]);
   sendAnswers();
   
}

let correctAnswer = answers[numQuestion]["correctAns"];

function correctFalse(){
  $(".btn").on("click", function(){
     userPick = $(".btn").attr("data-value");
       console.log(userPick);
       console.log(correctAnswer);
       if (userPick === correctAnswer){
           console.log("correct");
       } 
     })

   }


});