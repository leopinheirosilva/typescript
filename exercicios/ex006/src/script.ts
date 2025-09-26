//funções
const sum = (x: number, y: number): string => { //função que retorna uma string
    return (x + y).toString();
}
sum(2, 3);
//função que retorna vazio
const log = (message: string): void => {
    console.log(message);
}
