const restartBtn = document.getElementById('restart');
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
        question:"Werkt Techniek College Rotterdam samen met andere grote bedrijven aan projecten?",
        answers: [
            {option:"Jazekers", answer:true},
            {option:"Nope", answer:false}
        ]



    },
    {
        question:"Leer je coderen in SQL en Javascript?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:false}
        ]



    },
    {
        question:"Heb je ervaring met software?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:true}
        ]



    },
    {
        question:"De opmaak van een site maak je in:",
        answers: [
            {option:"Html/css", answer:true},
            {option:"Javascript", answer:false}
        ]



    },
    {
        question:"Kun je je diploma voor software developement halen binnen 3 jaar?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:false}
        ]



    },
    {
        question:"hoeveel locaties heeft TCR die software developement geven?",
        answers: [
            {option:"4", answer:true},
            {option:"2", answer:false}
        ]



    },
    {
        question:"valt project communicatie onder ICT?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:false}
        ]



    },
    {
        question:"heb je ervaring met coderen?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:true}
        ]



    },
    {
        question:"hoeveel codeer talen geven wij?",
        answers: [
            {option:"6", answer:true},
            {option:"5", answer:false}
        ]



    },
    {
        question:"wat is een basis codeer taal?",
        answers: [
            {option:"HTML/CSS", answer:true},
            {option:"PHP", answer:false}
        ]



    }
]
restartBtn.addEventListener('click', restart);

nextBtn.addEventListener('click' , next);
submitBtn.addEventListener('click' , submit);

function beginQuiz(){
    currentQuestion=0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if (questions [currentQuestion].answers[ano].answer){
            if (score<8){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<8){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<7){
                score++;
            }        
    }
    }
}
beginQuiz();

function restart(){
    currentQuestion = 0;
   
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next(){
    currentQuestion++;
    if(currentQuestion>8){
        nextBtn.classList.add('hide');

    }
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<6){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<9){
        next();
    }
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<10){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<9){
        next();
    }
 }
}


    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<10){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
        if(score<10){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<4){
        next();
    }
}
nextBtn.classList.remove('hide');


 
 

function submit() {
    
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    if (score > 9) {
        questionText.textContent = "Gefeliciteerd je bent geschikt voor deze opleiding!";
    } else {
        questionText.textContent = "Dank je wel voor het maken van deze quiz. Mischien past een ander opleiding bij jou!";
    }
}
function hallo() {
    score--
}