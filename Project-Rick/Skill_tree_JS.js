var countDownDate = new Date("Jan 26, 2024 15:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Timer").innerHTML = "EXPIRED";
    }
}, 1000);

function BasicH() {
    document.getElementById('BasicH'). style.border = '5px solid #013625';
}
function BasicH1() {
    document.getElementById('BasicH1'). style.border = '5px solid #013625';
}
function InstallH() {
    document.getElementById('InstallH'). style.border = '5px solid #013625';
}
function InstallH1() {
    document.getElementById('InstallH1').style.border = '5px solid #013625';
}