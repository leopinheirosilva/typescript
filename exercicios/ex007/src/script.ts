//objetos / types
type Order = {
  // define Order como um objeto com propriedades específicas
  productId: string;
  price: number;
};
type User = {
  // define User como um objeto com propriedades específicas
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password?: string; //propriedade opcional, pode ser undefined
  orders: Order[]; //array de objetos do tipo Order
};
const user: User = {
  //objeto do tipo User
  firstName: "Leonardo",
  lastName: "Pinheiro",
  age: 25,
  email: "leonardo.pinheiro@example.com",
  orders: [
    //define os arrays do tipo Order
    { productId: "1", price: 200 },
    { productId: "2", price: 300 },
  ],
};
user.password //pode ser undefined
const log = (message: string) => { }
//função que não retorna nada
log(user.password!); //o ! define que password não é nulo ou indefinido 
