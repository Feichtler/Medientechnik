
let playMarks, winLines, nextPlayer;

let initGame = (reload, winner) => {playMarks = Array(9).fill(null), 
winLines = [[0, 1, 2],[2,5,8],[6,7,8],[0, 3, 6],[3, 4, 5],[1, 4, 7],[0, 4, 8],[2, 4, 6]], nextPlayer = 'X'; 
}

let getWinner = (playerLabel) => winLines.index  == playerLabel;

document.querySelectorAll('.grid').forEach((grid, index) => {
  grid.addEventListener('click', (e) => {
    if (!grid.innerText) { grid.innerText = nextPlayer; playMarks[grid.id] = nextPlayer;
    nextPlayer = nextPlayer == 'X' ? 'O' : 'X'; ('nextPlayer', nextPlayer);}});});

initGame();

