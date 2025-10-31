//função com retorno
const sum = (x: number, y: number): number => {
  //define que a função retorna um number
  return x + y;
};
const value = sum(1, 2);

//função sem retorno
const log = (message: string): void => {
  console.log(message);
};

//Interface para função
interface MathFunction {
  (x: number, y: number): number; //define que a função recebe dois números e retorna um número
}
const subtract: MathFunction = (x, y) => x - y; //função que implementa a interface MathFunction
const multiply: MathFunction = (x, y) => x * y; //função que implementa a interface MathFunction
const divide: MathFunction = (x, y) => x / y; //função que implementa a interface MathFunction