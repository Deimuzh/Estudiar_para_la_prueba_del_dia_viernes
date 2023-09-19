import {Motor}  from "./motor";
export class Coche{

    private _numeroPasajeros: number;
    public get numeroPasajeros(): number {
        return this._numeroPasajeros;
    }
    public set numeroPasajeros(value: number) {
        this._numeroPasajeros = value;
    }
    private _marca: String;
    public get marca(): String {
        return this._marca;
    }
    public set marca(value: String) {
        this._marca = value;
    }
     private _modelo: string;
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }
    private _motor: Motor;
    public get motor(): Motor {
        return this._motor;
    }
    public set motor(value: Motor) {
        this._motor = value;
    }

    constructor(
        numeroPasajeros:number,
        marca:string,
        modelo:string,
        motor:Motor){
            this._numeroPasajeros=numeroPasajeros;
            this._marca=marca;
            this._modelo=modelo;
            this._motor=motor;
        } 
    
    
    imprimir():string{
        return "hola" + this._marca 
    }


} 

