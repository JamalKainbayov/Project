var data={
    chatinit:{
        title: ["Hallo!","Heeft u misschien een vraag over de Open Dag?"],
        options: ["Ja","Nee"],
        url:{
            
        }
    },

    nee:{
        title: ["Dat is fijn om te horen! Laat mij maar weten als je nog verder hulp nodig hebt!"]
    },

    ja:{
        title: ["Jazeker, dat kan natuurlijk! Waarin kan ik u mee helpen?","Kies uit een van deze categorieën."],
        options: ["Locatie","Tijd","Activiteiten"],
        url:{

        }
    },

    locatie: {
        title: ["Tijdens de Open Dagen kan je gewoon binnenlopen in een van onze locaties in heel Rotterdam. Onze locaties zijn als volgt:"],
        options: ['Prins Alexanderlaan 55', 'Jan Ligthartstraat 250','RDM-kade 59','Scheepsbouwweg 1, 15 en 21', 'Schiedamseweg 245'],
        url:{
            link: ["https://www.techniekcollegerotterdam.nl/locaties/prins-alexanderlaan","https://www.techniekcollegerotterdam.nl/locaties/jan-ligthartstraat","https://www.techniekcollegerotterdam.nl/locaties/rdm-kade","https://www.techniekcollegerotterdam.nl/locaties/scheepsbouwweg-1","https://www.techniekcollegerotterdam.nl/locaties/schiedamseweg"]
        }
    },

    tijd:{
        title: ["De eerstvolgende Open Dagen van 2024 nemen zich plaats tijdens de volgende tijden:","Vrijdag 26 januari'24 | 15:00 - 20:00 uur","Zaterdag 27 januari'24 | 10:00 - 14:00 uur","Als je wilt aanmelden voor de open dag, kan het via de link onderaan."],
        options: ['Aanmelden'],
        url: {
            link: ["https://ikkiestechniek.nl/agenda?type=1"]
        }
    },

    activiteiten:{
        title: ["Voordat je daadwerkelijk de locatie komt bezoeken, moet je je nog aanmelden voor de activiteiten die je wilt bezichtigen. Dit kan je doen via de link onderaan.","Nadat je dat gedaan hebt, hoef je je alleen maar op te dagen tijdens de Open Dag zelf.","Let wel op dat je wel op de juiste locatie aanmeld!"],
        options: ['Aanmelden'],
        url: {
            link: ["https://ikkiestechniek.nl/agenda?type=1"]
        }
    }
}

document.getElementById("init").addEventListener("click",showChatbot)
var chatbot = document.getElementById("chatbox");

var len1 = data.chatinit.title.length;

// Zorgt ervoor dat de chatbot opstart wanneer de gebruiker op de START CHAT button klikt. Wanneer de gebruiker nog een keer op de button klikt, dan reset de chat. 
function showChatbot(){
    console.log(this.innerText);
    if (this.innerText == 'START CHAT'){
        document.getElementById('body').style.display = 'block';
        document.getElementById('init').innerText = 'RESET CHAT';
        document.getElementById('status').innerHTML = '<span style="color: lawngreen">online</span>';
        initChat();
    } else {
        location.reload();
    }
}

// Begint met de eerste reeks berichten wanneer de chatbot wordt opgestart door de gebruiker. 
function initChat(){
    j = 0;
    chatbot.innerHTML = '';
    for(var i = 0; i < len1; i++){
        setTimeout(handleChat,(i*500));
    }

    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

// Zorgt voor dat de berichten in de chatbox te zien zijn voor de gebruiker
var j = 0;
function handleChat(){
    console.log(j);
    var element = document.createElement("p");
    element.innerHTML = data.chatinit.title[j];
    element.setAttribute("class","message");
    chatbot.appendChild(element);
    j++;
    handleScroll();
}

// Zorgt ervoor dat de verschillende vragen die de gebruiker kan aankiezen op het scherm aangetoont wordt
function showOptions(options){
    for(var i = 0; i < options.length; i++){
        var option = document.createElement("span");
        var input = '<div>' + options[i] + '</div>';
        option.innerHTML = input;
        option.setAttribute("class","option");
        option.addEventListener("click",handleOption);
        chatbot.appendChild(option);
        handleScroll();
    }
}

// Zoekt de bijbehorende opties van elke categorie en zet het over naar klikbare links om voor de gebruiker te klikken
function handleOption(){
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll("option").forEach(el=>{
        el.remove();
    })

    var element = document.createElement("p");
    element.setAttribute("class","test");
    var span = '<span class ="reply">' + this.innerText + '</span>';
    element.innerHTML = span;
    chatbot.appendChild(element);

    console.log(findText.toLowerCase());
    var tempObject = data[findText.toLowerCase()];
    handleResults(tempObject.title,tempObject.options,tempObject.url);
}

// Zorgt ervoor dat er een beetje tijd zit tussen elk chatbericht, zodat alle berichten niet allemaal in een keer tevoorschijn komen
function handleDelay(title){
    var element = document.createElement("p");
    element.innerHTML = title;
    element.setAttribute("class","message");
    chatbot.appendChild(element);
}

// Zorgt ervoor dat de bijbehorende bericht van de gekozen optie in de chatbox aangemaakt worden
function handleResults(title,options,url){
    for(let i = 0; i < title.length; i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
    }

    const isObjectEmpty = (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url) == true){
        console.log("more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
    } 
    else {
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
    }
}

// Laat alle opties waaruit de gebruiker uit kan kiezen bij elk bijbehorende categorie zien en zet ze op in de chatbox. 
function handleOptions(options,url){
    for (var i = 0; i < options.length; i++){
        var option = document.createElement("span");
        var input = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        option.innerHTML = input;
        option.setAttribute("class","option");
        chatbot.appendChild(option);
    }

    const isObjectEmpty = (url)=>{
        return JSON.stringify(url) === "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    option.innerHTML = input;
    option.setAttribute("class","option","link");
    chatbot.appendChild(option);
    handleScroll();
}

function handleScroll(){
    var element = document.getElementById('chatbox');
    element.scrollTop = element.scrollHeight;
}

