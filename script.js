let score = 0;
let timeLeft = 30;
let gameActive = false;
let timer, moveInterval;

const box = document.getElementById("box");
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function moveBox() {
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;
}

box.addEventListener("click", () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = score;
        moveBox();
    }
});

function startGame() {
    if (gameActive) return; 

    gameActive = true;
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    box.style.display = "block";
    moveBox();

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            clearInterval(moveInterval);
            alert(`Время вышло! Ваш счёт: ${score}`);
            box.style.display = "none";
            gameActive = false;
        }
    }, 1000);

    moveInterval = setInterval(moveBox, 1000);
}

startButton.addEventListener("click", startGame);