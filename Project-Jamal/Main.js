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
            {option:"Nee", answer:true}
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



    }

]
restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click' , next);
submitBtn.addEventListener('click' , submit);

function beginQuiz(){
    currentQuestion=0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if (questions [currentQuestion].answers[ano].answer){
            if (score<3){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }        
    }
    prevBtn.classList.add('hide');
    }
}
beginQuiz();

function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
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
    if(currentQuestion>2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<5){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<4){
        next();
    }
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<5){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<4){
        next();
    }
 }
 prevBtn.classList.remove('hide');
}

function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
        if(score<5){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<4){
        next();
    }
}
nextBtn.classList.remove('hide');
}

 
 

function submit() {
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    if (score > 3) {
        questionText.textContent = "Gefeliciteerd je bent geschikt voor deze opleiding!";
    } else {
        questionText.textContent = "Dank je wel voor het maken van deze quiz. Mischien past een ander opleiding bij jou!";
    }
}
function hallo() {

}