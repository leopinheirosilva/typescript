// Type
type Order = {
  id: number;
  product: string;
  quantity: number;
};
type User = {
  name: string;
  age: number;
  email?: string; //propriedade opcional (pode ser string ou undefined)
  password: string | number; //pode ser string ou number
  orders: Order[]; //array de objetos do tipo Order
};
let user: User = {
  name: "Leonardo",
  age: 30,
  // email: "leonardo@example.com", - propriedade opcional
  password: "123456",
  orders: [
    { id: 1, product: "Notebook", quantity: 1 },
    { id: 2, product: "Mouse", quantity: 2 },
  ],
};
const log = (message: string) => {};
log(user.email!); //o "!" indica que a propriedade email não é nula ou undefined

//Unions
type Author = {
  books: string[];
};
const author: User & Author = {
  //interseção entre User e Author
  name: "Leonardo",
  age: 30,
  email: "leonardo@example.com",
  password: "123456",
  orders: [],
  books: ["Livro 1", "Livro 2"],
};

//Interfaces
interface Car {
  readonly brand: string; //propriedade somente leitura, nao pode ser alterada depois de criada
  model: string;
  year: number;
}
const car: Car = {
  brand: "Toyota", //readonly
  model: "Corolla",
  year: 2020,
};
