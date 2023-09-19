export class Motor{
    private _marca : string;
    private _modelo: string;

    constructor(modelo,marca){
        this._marca  = "Toyota"
        this._modelo = "2019" 
}
public get marca():string{
    return this._marca
}
public set marca(value: string){
    this._marca = value;
} 
public get modelo (): string {
    return this._modelo
}
public set modelo (value: string){
    this._modelo = value;
}
}