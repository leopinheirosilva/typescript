//funções
const sum = (x: number, y: number): string => { //função que retorna uma string
    return (x + y).toString();
}
sum(2, 3);
//função que não retorna nada
const log = (message: string): void => {
    console.log(message);
}
