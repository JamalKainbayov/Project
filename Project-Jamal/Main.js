// alles van de html document gepakt en in js gezet
const restartBtn = document.getElementById('restart');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;
// De 15 vragen van de quiz 
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
            {option:"2", answer:false},
            {option:"4", answer:true}
        ]



    },
    {
        question:"valt project communicatie onder ICT?",
        answers: [
            {option:"Nee", answer:false},
            {option:"Ja", answer:true}
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



    },
    {
        question:"Heb je hiervoor al ervaring met programmeertalen?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:false}
        ]



    },
    {
        question:"Zijn HTML-tags hoofdlettergevoelig?",
        answers: [
            {option:"Nee", answer:true},
            {option:"Ja", answer:false}
        ]



    },
    {
        question:"Kan JavaScript direct in HTML-documenten worden ingebed?",
        answers: [
            {option:"Nee", answer:false},
            {option:"Ja", answer:true}
        ]



    },
    {
        question:"Kun je met HTML een hyperlink maken naar een andere webpagina?",
        answers: [
            {option:"Ja", answer:true},
            {option:"Nee", answer:false}
        ]



    },
    {
        question:"Is JavaScript een client-side scriptingtaal?",
        answers: [
            {option:"Nee", answer:true},
            {option:"Ja", answer:false}
        ]



    } 
]
// events voor buttons en de punten telling
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
            if (score<13){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<13){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<12){
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
    if(currentQuestion>13){
        nextBtn.classList.add('hide');

    }
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
    let ano=0;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<11){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<14){
        next();
    }
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
    let ano=1;
    if(questions[currentQuestion].answers[ano].answer){
        if(score<15){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<14){
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
        if(currentQuestion<14){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
        if(score<15){
            score++;
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<9){
        next();
    }
}
nextBtn.classList.remove('hide');


 
 
// sumbit verstopt alle buttons behalve opnieuw starten
function submit() {
    
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
   //meer dan 60% goed dan ben je geschikt
    if (score >8) {
        questionText.textContent = "Gefeliciteerd je bent geschikt voor deze opleiding!";
    } else {
        questionText.textContent = "Dank je wel voor het maken van deze quiz. Mischien past een ander opleiding bij jou!";
    }
}
function hallo() {
    score--
}