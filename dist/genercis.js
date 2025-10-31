var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (value) => value;
//função genérica que retorna o valor passado como parâmetro
//T é um tipo genérico, que pode ser qualquer tipo (string, number, boolean, etc)
//ao chamar a função, é possível definir o tipo que será usado
//exemplo:
const messagem = returnValue("Hello World"); //T é string
const count = returnValue(5); //T é number
const isValid = returnValue(true); //T é boolean
//Generics com arrays
const returnArray = (items) => {
    //função genérica que recebe um array de itens do tipo T e retorna um array do tipo T
    return new Array().concat(items); //cria um novo array do tipo T e concatena os itens passados como parâmetro
};
const numberArray = returnArray([1, 2, 3, 4, 5]); //T é number
const stringArray = returnArray(["a", "b", "c"]); //T é string
//Promises com Generics
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    //função que retorna uma Promise que resolve para um number
    return 5;
});
//Classes com Generics
class Item {
    constructor(zeroValue, sum) {
        //método construtor que recebe um valor do tipo T e uma função que recebe dois parâmetros do tipo T e retorna um valor do tipo T
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
//cria um novo objeto da classe Item, onde T é number
let myItem = new Item(0, (x, y) => {
    return x + y;
});
export {};
