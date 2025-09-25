//type assertions
let productName: any = "Camiseta";
let productId1 = productName as string;
//outra forma de definir type assertion:
let productId2 = <string>productName;
