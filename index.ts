import { Coche } from "./coche";
import { Motor } from "./motor";
const motor = new Motor ("A12343","hola");
const cocheToyota = new Coche (1,"Toyota","Yaris",motor );
console.log(cocheToyota.imprimir());

const cocheChevrolet = new Coche (2,"chevrolet","Sedan",motor);
console.log(cocheChevrolet.imprimir());

