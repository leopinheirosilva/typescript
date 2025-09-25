"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up; //valor 1
console.log(direction);
