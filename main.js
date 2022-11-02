import { handleBet, randomFaceCoin, showProgress, getResult, showStatisticsPlayer, handleGameStatistics, doBet, selectFaceCoin, newGame } from "./game/Game.js";
import Player from "./game/Player.js";

const player = new Player();

const btnAccept = document.getElementById('btn-acept');
btnAccept.addEventListener("click", () => {
    /**
        * Set player.bet and player.coin property
        */
    doBet(player);
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