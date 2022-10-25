export default class Player {
    constructor(name, games, wins, loses, bet) {
        this.name = name;
        this.games = games;
        this.wins = wins;
        this.loses = loses;
        this.bet = bet
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


    setGames(loses) {
        this.loses = loses;
    }

    setGames(bet) {
        this.bet = bet;
    }
}