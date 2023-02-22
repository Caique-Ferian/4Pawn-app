"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Pet {
    constructor(props, id, adopted) {
        this.props = Object.assign(Object.assign({}, props), { adopted: adopted !== null && adopted !== void 0 ? adopted : false });
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
    get age() {
        return this.props.age;
    }
    set age(age) {
        this.props.age = age;
    }
    get image() {
        return this.props.image;
    }
    set image(image) {
        this.props.image = image;
    }
    get weight() {
        return this.props.weight;
    }
    set weight(weight) {
        this.props.weight = weight;
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