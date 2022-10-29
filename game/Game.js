import Coin from "./Coin.js";
import Player from "./Player.js";

export const selectFaceCoin = () => {
    const C = new Coin();
    C.setFace(optionCoin.value);

    return C.face;
}
const optionCoin = document.getElementById('optionCoin');
optionCoin.addEventListener('change', selectFaceCoin);


const bet = document.getElementById('bet');

export const doBet = () => {
    const P = new Player();
    P.setBet(bet.value);

    return P;
}

export function compareResult(faceCoin, betCoin) {
    return (faceCoin == betCoin);
}