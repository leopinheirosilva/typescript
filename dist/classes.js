//Classes
class Person {
    constructor(id, name, age) {
        //método construtor
        this.id = id; //atribui o valor do parâmetro id à propriedade id da classe Person
        this.name = name; //atribui o valor do parâmetro name à propriedade name da classe Person
        this.age = age; //atribui o valor do parâmetro age à propriedade age da classe Person
    }
    sayMyName() {
        //método que retorna uma string
        return this.name; //retorna o nome da pessoa
    }
}
//Shorthand de classes
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    //classe que estende a classe Person
    constructor(id, name, age) {
        super(id, name, age); //chama o construtor da classe Person
    }
    whoAmI() {
        return this.name; //propriedade definida como protected, podendo ser acessada aqui
    }
}
let person = new Person(1, "Leonardo", 30); //cria um novo objeto da classe Person
console.log(person.sayMyName()); //chama o método sayMyName da classe Person
export {};
