interface IPerson {
  //Interface que define a estrutura de um objeto pessoa
  id: number;
  //as propriedades name e age nao sao definidas na interface, pois sao protegidas e privadas na classe Person
  sayMyName(): string; //método que retorna uma string
}

//Classes
class Person implements IPerson {
  //classe que implementa a interface IPerson
  readonly id: number;
  protected name: string; //propriedade protegida, só pode ser acessada dentro da classe e por classes que a estendem
  private age: number; //propriedade privada, só pode ser acessada dentro da classe
  constructor(id: number, name: string, age: number) {
    //método construtor
    this.id = id; //atribui o valor do parâmetro id à propriedade id da classe Person
    this.name = name; //atribui o valor do parâmetro name à propriedade name da classe Person
    this.age = age; //atribui o valor do parâmetro age à propriedade age da classe Person
  }
  sayMyName(): string {
    //método que retorna uma string
    return this.name; //retorna o nome da pessoa
  }
}

//Shorthand de classes
class PersonRefact{
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  //classe que estende a classe Person
  constructor(id: number, name: string, age: number) {
    super(id, name, age); //chama o construtor da classe Person
  }
  whoAmI() {
    return this.name; //propriedade definida como protected, podendo ser acessada aqui
  }
}
let person = new Person(1, "Leonardo", 30); //cria um novo objeto da classe Person
console.log(person.sayMyName()); //chama o método sayMyName da classe Person
