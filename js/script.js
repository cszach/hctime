// @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0-1.0

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
  particlesJS.load("particles-js", "particlesjs-config.json", function() {});

// @license-end
