// Hier kun je een datum met het jaartal en tijd invullen tot wanneer de timer het moet aftellen
var countDownDate = new Date("Jan 26, 2024").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();


  var distance = countDownDate - now;

 //hier is een berekening te zien van elke stuk van de timer
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //Als de timer onder de 0 is dan vertelt ie dat de open dag vandaag is 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Vandaag is de open dag";
  }
}, 1000);