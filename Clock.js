var time = document.querySelector('.Clock-body')
var one = document.getElementById('1')

setInterval(CurrentTime, 1000)
function CurrentTime() {
    let D = new Date();
    let hour = D.getHours();
    let min = D.getMinutes();
    let sec = D.getSeconds();
    let session = "A.M.";

    if (hour == 0 ) {
        hour = 12
    }
    if (hour > 12) {
        session = "P.M";
        hour = hour - 12;
    }
    time.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}   ${session}`

    if (9 < hour < 12) {
        one.src = "./Resources/img2.jpg"
    }
    if (12 < hour < 2) {
        one.src = "./Resources/Img1.jpg"
    }
    if (2< hour <5) {
        one.src = "./Resources/Img4.jpg"
    }
    else {
        one.src = "./Resources/Img3.jpg"

    }


}

CurrentTime()
