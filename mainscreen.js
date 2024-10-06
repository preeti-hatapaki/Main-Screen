
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("help");
const closeBtn = document.querySelector(".close");
const joinBtn = document.getElementById("join");
const scheduleBtn = document.getElementById("schedule");
const helpBtn = document.getElementById("help");
const settings = document.getElementById("settings");
const whitescreen = document.getElementById("whitescreen");
const login = document.getElementById("login");

window.onload = function() {
    setTimeout(() => {
      whitescreen.style.opacity = "0";
      whitescreen.style.transition = "all 0.3s ease";
      whitescreen.style.pointerEvents = "none";
      setTimeout(() => {
        whitescreen.style.zIndex = "200";
      }, 300)
    }, 700)
};

openModalBtn.onclick = function() {
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }, 10);
};

closeBtn.onclick = function() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hide");
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
};

joinBtn.onclick = function() { // On clicking the Join button
    window.location.replace('joinmeet.html');
};

scheduleBtn.onclick = function() { // On clicking the Schedule button
    window.location.replace('schedule.html');
};

settings.onclick = function() {
    whitescreen.style.pointerEvents = "auto";
    whitescreen.style.opacity = "1";
    whitescreen.style.transition = "opacity 0.3s ease"; // Transition for opacity
    setTimeout(() => {
        settings.style.opacity = "0";
        settings.style.transition = "opacity 0.3s ease";
    }, 700);

    settings.classList.add('expand');
    settings.classList.add('rotating');

    // Transition delay for whitescreen
    setTimeout(() => {
        window.location.replace('settings.html');
    }, 1000); // Match transition time for smooth effect
};

login.onclick = function() {
    whitescreen.style.pointerEvents = "auto";
    whitescreen.style.opacity = "1";
    whitescreen.style.transition = "opacity 0.3s ease"; // Transition for opacity
    setTimeout(() => {
        login.style.opacity = "0";
        login.style.transition = "opacity 0.3s ease";
    }, 700);
    
    // Add class for login icon transition
    login.classList.add('expand');

    // Transition delay for whitescreen
    setTimeout(() => {
        window.location.replace('loginSignup.html');
    }, 1000); // Match transition time for smooth effect
};
