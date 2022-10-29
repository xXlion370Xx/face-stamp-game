export default class Coin {
    constructor(state = undefined) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }
}