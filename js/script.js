function sed(tInput) {
    if (tInput < 10) {
        tInput = "0" + tInput;
    }
    return tInput;
}


function main() {
    var getTime = new Date();
    var agent = "#" + sed(getTime.getHours()) + sed(getTime.getMinutes()) + sed(getTime.getSeconds());
    var item = document.getElementById("hex-time");

    item.innerHTML = agent;
    item.style.backgroundColor = agent;
}

setInterval(main, 100);
