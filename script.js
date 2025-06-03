let timer = 60;
let Score = 0;
let hitrandom = 0;
let intervalId;
let pbtm = document.querySelector("#pbtm");

// Show Start button initially
function showStartScreen() {
    pbtm.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <button id="startBtn">Start Game</button>
        </div>
    `;

    document.querySelector("#startBtn").addEventListener("click", startGame);
}

// Score display
function updateScore() {
    document.querySelector("#scorevalue").textContent = Score;
}

function increaseScore() {
    Score += 10;
    updateScore();
}

function decreaseScore() {
    Score -= 5;
    updateScore();
}

function getNewHit() {
    hitrandom = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = hitrandom;
}

function makeBubble() {
    let Clutter = "";
    for (let i = 0; i <= 143; i++) {
        let random_num = Math.floor(Math.random() * 10);
        Clutter += `<div class="bubble">${random_num}</div>`;
    }
    pbtm.innerHTML = Clutter;
}

function updateTimer() {
    document.querySelector("#timervalue").textContent = timer;
}

function runtimer() {
    timer = 60;
    updateTimer();

    clearInterval(intervalId);
    intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            updateTimer();
        } else {
            clearInterval(intervalId);
            pbtm.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                    <h1 id="hello">Game Over : ${Score}</h1>
                    <button id="restartBtn">Restart</button>
                </div>
            `;
            document.querySelector("#restartBtn").addEventListener("click", startGame);
        }
    }, 1000);
}

function startGame() {
    Score = 0;
    timer = 60;
    updateScore();
    updateTimer();
    makeBubble();
    getNewHit();
    runtimer();

    // Remove old event listener and add new one
    let newPbtm = pbtm.cloneNode(true);
    pbtm.parentNode.replaceChild(newPbtm, pbtm);
    pbtm = newPbtm;

    pbtm.addEventListener("click", function (details) {
        let clickednum = Number(details.target.textContent);
        if (!isNaN(clickednum)) {
            if (clickednum === hitrandom) {
                increaseScore();
            } else {
                decreaseScore();
            }
            makeBubble();
            getNewHit();
        }
    });
}

// Show start button on page load
showStartScreen();










