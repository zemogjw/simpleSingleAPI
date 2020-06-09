"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, active, points) {
        this._id = id;
        this.name = name;
        this.email = email;
        this.active = active;
        this.points = points;
    }
}
exports.User = User;
