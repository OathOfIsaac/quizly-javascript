var getButtonEl = document.querySelector("#start-button")

function startGame() {
    console.log("game has started")
}

var myfunc = setInterval(function() {
    //code goes here
}, 1000
)

getButtonEl.addEventListener("click", startGame)