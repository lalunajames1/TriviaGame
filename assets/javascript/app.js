$(document).ready(function() { 
    
var numQuestion = 0;
var userPick = " ";
var correctAnswer = " ";
var congrats = "Congratulations! The answer is ";
var wrong = "The right answer is ";


// Array of questions
var questions = [
"He was a pioneer of rock & roll and one of his songs was feature on the movie Back to the Future",
"Which American folk singer from the 60\’s recently won a Nobel prize?",
"Who is the god father of Punk rock?",
"Name a popular band from the 1960s British invasion?",
]

//Object with asnwers
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
        ans4: "Townes Van Zandt", 
        correctAns: "Bob Dylan" 
    },
    {
        ans1: "Joey Ramone",
        ans2: "Iggy Pop",
        ans3: "Joe Strummer",
        ans4: "Chuck Berry",
        correctAns: "Iggy Pop" 
    },
    {
    ans1: "The Doors",
    ans2: "The Beach Boys",
    ans3: "The Bealtes",
    ans4: "Credence Clearwater Revival",
    correctAns: "The Bealtes"
    }
]

//This starts the game 

//This clones the buttons for the ansewers and removes them
var clone = $("#gone-at-first").clone();
$("#gone-at-first").remove();
//This function removes the first button you see and adds back the answer buttons and the question


$("#firstButton").on("click", function(){
    $(this).remove();
    addButtons() //Adds answer buttons
    grabQuestion(); //  **** Why do I have to do this? ****
});

//Adds answer buttons
function addButtons() {
$("#main-content").append(clone);
correctFalse()
}

//This assigns a answer as a value to the button and an answer as text to the button and increases the numQuestion by 1
function sendAnswers(){
    for (let i = 1; i <= 4; i++ ){
       $("#answer" + i).attr("data-value", answers[numQuestion]["ans" + i]);
       $("#answer" + i).text(answers[numQuestion]["ans" + i]);
// answers[0].ans1 This is the same as the code above
// answers[0].ans3
// answers[0].ans4
console.log("working") // This helps see if this function is working
    }
    correctAnswer = answers[numQuestion]["correctAns"];
    numQuestion++
    console.log(numQuestion)
}

//This adds a question to the html document and executes the sendAnswers function
function grabQuestion(){
   $("#question").text(questions[numQuestion]);
   sendAnswers();
}

//This listens to the click event and grabs the balue form the button to compare it to the correct asnwer
function correctFalse(){ //Why do I have to create this wrapper function and call it?
  $(".btn").on("click", function(){
     userPick = $(this).attr("data-value");
       console.log(userPick);
       console.log(correctAnswer);
       if (userPick === correctAnswer){
       correctAnswerMsg();
       } else {
           wrongAnswerMsg();
       }
     })
   }

  function correctAnswerMsg(){
         $("#question").text(congrats + " " + correctAnswer);
         $("#gone-at-first").remove();
         setTimeout(function(){ addButtons(); grabQuestion();  }, 3000);
    
  }
 
  function wrongAnswerMsg(){
    $("#question").text(wrong +  " " + correctAnswer);
    $("#gone-at-first").remove();
    setTimeout(function(){ addButtons(); grabQuestion();  }, 3000);
  }

});