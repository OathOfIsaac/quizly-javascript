var getButtonEl = document.querySelector("#start-button")
var getTimerEl = document.querySelector("#count-down")
let i = 30 

function startGame() {
    console.log("game has started")
}

function endGame() {
    console.log("game has ended")
    clearInterval(countDown)
}

var countDown = setInterval(function() {
    if (i > 0) {
    i--;
    getTimerEl.textContent="Timer:" + i;
    } else { 
        endGame();
    } 
}, 1000
    
)

getButtonEl.addEventListener("click", startGame)