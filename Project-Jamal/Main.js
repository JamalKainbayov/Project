const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions =[
    {
        question:"Werkt Techniek College samen met andere grote bedrijven aan projecten?",
        answers: [
            {option:"Jazekers", answer:true},
            {option:"Nope", answer:false}
        ]



    },
    {
        question:"",
        answers: [
            {option:"", answer:true},
            {option:"", answer:false}
        ]



    },
    {
        question:"",
        answers: [
            {option:"", answer:true},
            {option:"", answer:false}
        ]



    }

]