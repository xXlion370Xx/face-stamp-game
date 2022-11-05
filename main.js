import { handleBet, randomFaceCoin, showProgress, getResult, showStatisticsPlayer, handleGameStatistics, doBet, selectFaceCoin, newGame } from "./game/Game.js";
import Player from "./game/Player.js";


const player = new Player();


const inputBet = document.getElementById('bet');
inputBet.addEventListener("change", () => {
    doBet(player);
})

const inputFace = document.getElementById('optionCoin');
inputFace.addEventListener("change", () => {
    selectFaceCoin(player);
})

const board = document.getElementById('board');
const play = () => {
    newGame(board);

    let games = player.games;
    player.setGames(games + 1);

    /**
     * get random face coin
     */
    let coin = randomFaceCoin();

    /** 
     * Show the progress game
     */
    let resultGame = getResult(coin.face, player.coin);
    let resultHandleBet = handleBet(resultGame, player);

    showProgress(board, player, coin, resultGame);
    handleGameStatistics(resultGame, player);
    showStatisticsPlayer(player, resultHandleBet);
}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)