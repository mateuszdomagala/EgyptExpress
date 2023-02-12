export type dimensions = {
    width: number; 
    length: number, 
    height: number 
}
export interface Pyramid {
    name: string;
    dimensions: string | dimensions;
    price: number;
    imageUrl: string;
    available: boolean;
}
