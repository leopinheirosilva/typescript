let user = {
    name: "Leonardo",
    age: 30,
    // email: "leonardo@example.com", - propriedade opcional
    password: "123456",
    orders: [
        { id: 1, product: "Notebook", quantity: 1 },
        { id: 2, product: "Mouse", quantity: 2 },
    ],
};
const log = (message) => { };
log(user.email); //o "!" indica que a propriedade email não é nula ou undefined
const author = {
    //interseção entre User e Author
    name: "Leonardo",
    age: 30,
    email: "leonardo@example.com",
    password: "123456",
    orders: [],
    books: ["Livro 1", "Livro 2"],
};
const car = {
    brand: "Toyota", //readonly
    model: "Corolla",
    year: 2020,
};
export {};
