export default class Coin {
    constructor(face = undefined) {
        this.face = face;
    }

    setFace(face) {
        this.face = face;
    }
}