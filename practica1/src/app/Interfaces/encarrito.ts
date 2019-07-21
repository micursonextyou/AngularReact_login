import { ProductoInterface } from './producto';

export interface EncarritoInterface {
    producto:ProductoInterface;
    cantidad:number;
    precio:number;
}
