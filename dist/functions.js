//função com retorno
const sum = (x, y) => {
    //define que a função retorna um number
    return x + y;
};
const value = sum(1, 2);
//função sem retorno
const log = (message) => {
    console.log(message);
};
const subtract = (x, y) => x - y; //função que implementa a interface MathFunction
const multiply = (x, y) => x * y; //função que implementa a interface MathFunction
const divide = (x, y) => x / y; //função que implementa a interface MathFunction
export {};
