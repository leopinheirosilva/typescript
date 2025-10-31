//Tipos básicos
let age: number = 5; //tipo number
let name: string = "Leonardo"; //tipo string
let isValid: boolean = true; //tipo boolean
let Anything: any = 5; //qualquer tipo (string, number, boolean...)

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5]; //array de numero
let booleans: boolean[] = [true, false, true, false]; //array de booleans
let names: string[] = ["Leonardo", "José", "Ana"]; //array de string

//Tuplas
let lista: [number, string] = [12, "José"]; //deve ser, respectivamente, um number e uma string
let listas: [number, string][] = [
  //lista de tuplas
  [15, "José"],
  [10, "Ana"],
  [45, "Jorge"],
];

//Intersections
let productId: number | string = 123; //pode ser number ou string
productId = "ABC123"; //agora é string

//Enum
enum Direction {
  Up = 1,
  Down = 2,
}
let direcao = Direction.Up; //a variavel direcao recebe o tipo Direction, que recebe o valor 1

//Type Assertions
let productName: any = "Notebook";
let itemId: string;
itemId = productName as string; //altera o tipo da variavel productName para string
itemId = <string>productName; //outra forma de alterar o tipo da variavel productName para string
