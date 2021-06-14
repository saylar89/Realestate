"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User(_firstName, _lastName, _age, _email, _phone) {
        this.id = uuid_1.v4();
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.email = _email;
        this.phone = _phone;
    }
    return User;
}());
exports.User = User;
