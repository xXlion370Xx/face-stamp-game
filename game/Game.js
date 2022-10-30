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
 * Select the bet DOM element value and set property player.bet
 * @param {Object} player
 * @returns Value of bet player object
 */
export const doBet = (player) => {
    const bet = document.getElementById('bet');
    let betToInt = parseInt(bet.value);
    player.setBet(betToInt);

    return player.bet;
}

/**
 * Select the coin DOM element and set property player.coin
 * @param {Object} player 
 * @returns Value of coin face player selected
 */
export const selectFaceCoin = (player) => {
    const coin = document.getElementById('optionCoin');
    let valueCoin = coin.value;
    player.setCoin(valueCoin);

    return player.coin;
}

/**
 * Function to handle the bet depending the result of the game
 * @param {String} resultGame
 * @param {Object} player 
 * @returns A int bet param / 2 if the result game equals "Perdiste", else param bet * 2 
 */
export const handleBet = (resultGame, player) => {
    if (resultGame == "Perdiste") {
        player.setBet(player.bet / 2);
        return player.bet;
    }

    player.setBet(player.bet * 2);
    return player.bet;
}

/**
 * Function to validate face coin to convert to String  
 * @param {int} faceCoin 
 * @param {int} selectedCoin 
 * @returns String "Ganaste" if the params are the same else return "Perdiste" 
 */
export const getResult = (faceCoin, selectedCoin) => faceCoin == selectedCoin ? "Ganaste" : "Perdiste";

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
    let game = document.createElement("div");
    game.className = "game";

    board.appendChild(game);
    game.innerHTML =
        `   
        <ul>
            <li>Cara de la moneda: ${turnNumberToFace(coin.face)}</li>
            <li>Tu seleccion: ${turnNumberToFace(player.coin)}</li>
            <li>Tu apuesta: ${player.bet}</li>
            <li>${resultGame}</li>
        </ul>
    `;
}

/**
* Write the statistics player on a ul list
* @param {Object} Player 
* @param {String} handleBet 
*/
export function showStatisticsPlayer(Player, handleBet) {
    const statistics = document.getElementById('playerStatistics');

    statistics.innerHTML = `
           <h2>Tus estadisticas</h2>
           <ul>
               <li>Juegos: ${Player.games}</li>
               <li>Victorias: ${Player.wins}</li>
               <li>Derrotas: ${Player.loses}</li>
               <li>Tu dinero: ${handleBet}</li>
               <li>Seleccion lado de la moneda: ${turnNumberToFace(Player.coin)}</li>
           </ul>`
}

export const handleGameStatistics = (resultGame, player) => {
    let wins = player.wins;

    if (resultGame == "Ganaste") {
        player.setWins(wins + 1);
    } else {
        player.setLoses(wins - 1);
    }
}