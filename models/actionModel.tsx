import { Category } from "./category";
import { Product } from "./products";

export class Action{
    type:string;
    payload:Product

    constructor(type:string,  payload:Product){
        this.type = type;
        this.payload =payload
    }
}

