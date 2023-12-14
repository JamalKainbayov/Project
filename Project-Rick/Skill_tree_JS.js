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

let N2 = document.getElementById('niveau2')
let N3 = document.getElementById('niveau3')
let N4 = document.getElementById('niveau4')
function Show1() {
    N2.style.display = 'block';
    N3.style.display = 'none';
    N4.style.display = 'none';
}
function Show2() {
    N2.style.display = 'none';
    N3.style.display = 'block';
    N4.style.display = 'none';
}

function Show3() {
    N2.style.display = 'none';
    N3.style.display = 'none';
    N4.style.display = 'block';
}
