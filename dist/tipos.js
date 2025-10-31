//Tipos básicos
let age = 5; //tipo number
let name = "Leonardo"; //tipo string
let isValid = true; //tipo boolean
let Anything = 5; //qualquer tipo (string, number, boolean...)
//Arrays
let numbers = [1, 2, 3, 4, 5]; //array de numero
let booleans = [true, false, true, false]; //array de booleans
let names = ["Leonardo", "José", "Ana"]; //array de string
//Tuplas
let lista = [12, "José"]; //deve ser, respectivamente, um number e uma string
let listas = [
    //lista de tuplas
    [15, "José"],
    [10, "Ana"],
    [45, "Jorge"],
];
//Intersections
let productId = 123; //pode ser number ou string
productId = "ABC123"; //agora é string
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
let direcao = Direction.Up; //a variavel direcao recebe o tipo Direction, que recebe o valor 1
//Type Assertions
let productName = "Notebook";
let itemId;
itemId = productName; //altera o tipo da variavel productName para string
itemId = productName; //outra forma de alterar o tipo da variavel productName para string
export {};
