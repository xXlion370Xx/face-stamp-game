import { gamePlayer, handleBet, randomFaceCoin, showProgress, showResult, showStatisticsPlayer } from "./game/Game.js";


const board = document.getElementById('board');
const play = () => {

    /**
     * get random face coin
     */
    const coin = randomFaceCoin();

    /**
     * Get object player
     */
    const player = gamePlayer();

    /** 
     * Show the progress game
     */
    let resultGame = showResult(coin.face, player.coin);
    let resultHandleBet = handleBet(resultGame, player.bet);
    showProgress(board, player, coin, resultGame);
    showStatisticsPlayer(player, resultHandleBet);

}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)
