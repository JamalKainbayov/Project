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

let count = 0
function logHelloOnClick() {
    const skillElements = document.querySelectorAll('.Skill');

    skillElements.forEach(skill => {
        skill.addEventListener('click', () => {
            // Toggle the 'clicked' class for the clicked element
            skill.classList.toggle('clicked');
            console.log(count)
            count++

            if (count === 27) {
                document.getElementById('achievement').style.display = 'block';
            }
        });
    });
}
logHelloOnClick();
