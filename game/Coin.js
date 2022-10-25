export default class Coin {
    constructor(stamp, face) {
        this.stamp = stamp;
        this.face = face;
    }

    setStamp(stamp) {
        this.stamp = stamp;
    }

    setFace(face) {
        this.face = face;
    }
}