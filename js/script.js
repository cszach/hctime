function sed(tInput) {
    if (tInput < 10) {
        tInput = "0" + tInput;
    }
    return tInput;
}

function clock() {
    var getTime = new Date();
    var agent = "#" + sed(getTime.getHours()) + sed(getTime.getMinutes()) + sed(getTime.getSeconds());
    var item = document.getElementById("hex-time");

    item.innerHTML = agent;
    item.style.backgroundColor = agent;
}

// Start app
  setInterval(clock, 100);

// Load particle.js
  particlesJS.load("particles-js", "particles.json", function() {});
