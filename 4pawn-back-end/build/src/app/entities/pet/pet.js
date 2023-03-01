"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Pet {
    constructor(props, id) {
        var _a;
        this.props = Object.assign(Object.assign({}, props), { adopted: (_a = props.adopted) !== null && _a !== void 0 ? _a : false });
        this._id = id !== null && id !== void 0 ? id : (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get ageInYears() {
        return this.props.ageInYears;
    }
    set ageInYears(ageInYears) {
        this.props.ageInYears = ageInYears;
    }
    get image() {
        return this.props.image;
    }
    set image(image) {
        this.props.image = image;
    }
    get weightInKg() {
        return this.props.weightInKg;
    }
    set weightInKg(weight) {
        this.props.weightInKg = weight;
    }
    get color() {
        return this.props.color;
    }
    set color(color) {
        this.props.color = color;
    }
    get adopted() {
        return this.props.adopted;
    }
}
exports.default = Pet;
//# sourceMappingURL=pet.js.map