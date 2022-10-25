import Player from "./Player.js";

const selectOptionCoin = () => {
    console.log(optionCoin.value);
}

const optionCoin = document.getElementById('optionCoin');
optionCoin.addEventListener('change', selectOptionCoin);


const bet = document.getElementById('bet');
const btnBet = document.getElementById('btnBet');

btnBet.addEventListener('click', () => {
    // console.log(bet.value);
    const p = new Player(bet.value);
    p.setBet(bet.value);

    const betElement = document.getElementById("playerBet");
    betElement.textContent = "Player: " + p.bet;
});