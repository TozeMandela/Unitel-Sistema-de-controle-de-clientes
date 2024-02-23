import { Client } from "./class/client";

const clientList: Array<Client> = []; 



clientList.push(new Client('Tozé Mandela', 'M', '10/10/2000', 'dev@gmail.com'));
clientList.push(new Client('Sandra Mandela', 'F', '24/06/2005', 'sandra@gmail.com'));
clientList.push(new Client('Lígia Mandela', 'F', '09/01/1999', 'ligia@gmail.com'));
clientList.push(new Client('Nick Claus Mandela', 'M', '30/08/2010', 'nick@gmail.com'));


console.log('====================================');
console.log(clientList);
console.log('====================================');

clientList[0].registraNumeroDoClientes('AV. 21 de janeiro - gamek', '+244 - 999 666 333' );
clientList[1].registraNumeroDoClientes('AV. 21 de janeiro - gamek', '+244 - 922 666 333' );
clientList[2].registraNumeroDoClientes('AV. 21 de janeiro - gamek', '+244 - 999 444 333' );
clientList[3].registraNumeroDoClientes('AV. 21 de janeiro - gamek', '+244 - 999 666 111' );


console.log('====================================');
console.log(clientList);
console.log('====================================');

clientList[1].desativarTelefone();
clientList[3].desativarTelefone();


console.log('====================================');
console.log(clientList);
console.log('====================================');

Client.mostrarClientesActivos(clientList);