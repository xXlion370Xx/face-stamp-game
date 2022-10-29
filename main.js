import { gamePlayer, randomFaceCoin, showProgress, showResult } from "./game/Game.js";

/**
 * Write the statistics player on a ul list
 * @param {Object} Player 
 */
function showStatisticsPlayer(Player) {
    const statistics = document.getElementById('playerStatistics');

    statistics.innerHTML = `
            <h2>Tus estadisticas</h2>
            <ul>
                <li>Juegos: ${Player.games}</li>
                <li>Victorias: ${Player.wins}</li>
                <li>Derrotas: ${Player.loses}</li>
                <li>Tu dinero: ${Player.bet}</li>
                <li>Cara del moneda: ${Player.coin}</li>
            </ul>`
}

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
    showProgress(board, player, coin, resultGame);
    showStatisticsPlayer(player);

}
const btnPLay = document.getElementById('btn-play');
btnPLay.addEventListener("click", play)
