var getButtonEl = document.querySelector("#start-button")
var getTimerEl = document.querySelector("#count-down")

let i = 30
let q = 0

var startGame=function() {
    console.log("game has started")
    countDown()
}

function endGame() {
    console.log("game has ended")
    clearInterval(countDown)
}

nextQ.onClick = () => {
    if (q < questionArray.length - 1) {
        questionArray 
    }
}


const questionArray= [
    {question:"How would one declare a string variable?",
     answers:["A. Var name = 'John'", "B. Var names = '7'" , "C. Var firstname = new String('John')" , "D. Any of these" ], 
     correct: [3] 
    },
    {question:"Given the following, what is the value of x? var x = typeof 'abc';" , 
     answers:["Abc", "String" , "Undefined" , "Error" ],
     correct: [1] 
    },
    {question:"How do you check what the type of a value in variable x is?",
     answers:["Gettype(x)", "Typeof(x)" , "Object.type(x)" , "X.type" ], 
     correct: [2] 
    },
    {question:"How do you round the number 11.25, to the nearest whole number?",
     answers:["Math.round", "Math.rnd" , "Round" , "Rnd" ],
     correct: [0] 
    },
    {question:"What is the value of x? var x = '1'+2+3;",
     answers:["6", "15" , "'123'" , "The statement generates an error" ],
     correct: [2] 
    },
    {question:"Where do we start a javascript code ?",
     answers:["In the < javascript > tag", "In the < code > tag" , "In the < script > tag" , "None of the above" ],
     correct: [2] 
    },
    {question:"What does JSON stand for?",
     answers:["JavaScript Oriented Notation", "JavaScript Object Notation" , "JavaScript Online Notation" , "jasonDerulo Super Object Notation " ],
     correct: [1] 
    },
    {question:"Which of these is not a logical operator?",
     answers:["!", "&" , "&&" , "||" ],
     correct: [1] 
    },
    {question:"What is the value of variable a: var a = 3; var b = 2; var c = a; var a = b = c = 1;",
     answers:["3", "2" , "1" , "Error"],
     correct: [2]
    },
    {question:"To get value from user input we use which box?",
     answers:["Confirm", "Prompt" , "Alert" , "None of the above"],
     correct: [1] 
    },

 ]

var countDown = setInterval(function() {
    if (i > 0) {
    i--;
    getTimerEl.textContent="Timer:" + i;
    } else { 
        endGame();
    } 
}, 1000
    
)

getButtonEl.addEventListener("click", startGame())