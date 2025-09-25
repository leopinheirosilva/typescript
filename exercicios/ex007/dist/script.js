const user = {
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
user.password; //pode ser undefined
const log = (message) => { };
//função que não retorna nada
log(user.password); //o ! define que password não é nulo ou indefinido 
export {};
