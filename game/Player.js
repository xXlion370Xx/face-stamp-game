export default class Player {
    constructor(games = 0, wins = 0, loses = 0, bet = 0) {
        this.games = games;
        this.wins = wins;
        this.loses = loses;
        this.bet = bet;
    }

    setName(name) {
        this.name = name;
    }

    setGames(game) {
        this.games = game;
    }

    setWins(wins) {
        this.wins = wins;
    }

    setLoses(loses) {
        this.loses = loses;
    }

    setBet(bet) {
        this.bet = bet;
    }
}