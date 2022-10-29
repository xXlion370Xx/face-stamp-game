import Coin from "./Coin.js";
import Player from "./Player.js";

/**
 * Select a random face coin and returns it
 * @returns Object Coin
 */
export const randomFaceCoin = () => {
    let faceCoin = Math.floor(Math.random() * 2);
    const C = new Coin(faceCoin);

    return C;
}

/**
 * Function to save statistics of the player
 * @returns player object
 */
export const gamePlayer = () => {
    const bet = document.getElementById('bet');
    const optionCoin = document.getElementById('optionCoin');

    const P = new Player();
    P.setBet(bet.value);
    P.setCoin(turnNumberToFace(optionCoin.value));

    return P;
}

/**
 * Function to validate face coin to convert to String  
 * @param {int} faceCoin 
 * @param {int} selectedCoin 
 * @returns String "Ganaste" if the params are the same else return "Perdiste" 
 */
export const showResult = (faceCoin, selectedCoin) => faceCoin == selectedCoin ? "Ganaste" : "Perdiste";

/**
 * Funtion to convert the property face coin to string
 * @param {int} num 
 * @returns String "Cara" if the param equals to 0, else return "Sello"
 */
const turnNumberToFace = (num) => num == 0 ? "Cara" : "Sello";


/**
 * Function write the progress of the player
 * @param {DOMObject} board 
 * @param {Object} player 
 * @param {Object} coin 
 * @param {String} resultGame
 */
export const showProgress = (board, player, coin, resultGame) => {
    board.innerHTML =
        `<h1>Tu juego</h1>
        Cara de la moneda: ${turnNumberToFace(coin.face)} <br>
        Tu seleccion: ${turnNumberToFace(player.coin)} <br>
        Tu apuesta: ${player.bet} <br>
        ${resultGame}
    `;
}
