const startMin = 1;
let time = startMin * 60;

const countDown = document.getElementById('time');

setInterval(updateTime, 1000);

function updateTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDown.innerHTML = `${minutes} : ${seconds}`;
    if (!minutes == 0 && !seconds == 0) {
        time--;
    }

}