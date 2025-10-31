const returnValue = <T>(value: T) => value;
//função genérica que retorna o valor passado como parâmetro
//T é um tipo genérico, que pode ser qualquer tipo (string, number, boolean, etc)
//ao chamar a função, é possível definir o tipo que será usado
//exemplo:
const messagem = returnValue<string>("Hello World"); //T é string
const count = returnValue<number>(5); //T é number
const isValid = returnValue<boolean>(true); //T é boolean

//Generics com arrays
const returnArray = <T>(items: T[]): T[] => {
  //função genérica que recebe um array de itens do tipo T e retorna um array do tipo T
  return new Array<T>().concat(items); //cria um novo array do tipo T e concatena os itens passados como parâmetro
};
const numberArray = returnArray<number>([1, 2, 3, 4, 5]); //T é number
const stringArray = returnArray<string>(["a", "b", "c"]); //T é string

//Promises com Generics
const returnPromise = async (): Promise<number> => {
  //função que retorna uma Promise que resolve para um number
  return 5;
};

//Classes com Generics
class Item<T> {
  //classe genérica que recebe um tipo T
  zeroValue: T;
  sum: (x: T, y: T) => T;
  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    //método construtor que recebe um valor do tipo T e uma função que recebe dois parâmetros do tipo T e retorna um valor do tipo T
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}
//cria um novo objeto da classe Item, onde T é number
let myItem = new Item<number>(0, (x: number, y: number) => {
  return x + y;
});
