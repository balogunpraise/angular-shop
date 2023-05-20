export default class CartItem{
    itemName: string;
    shortDesc: string;
    price: number;
    quantity: number;

    constructor(itemName: string, shortDesc: string, price: number, quantity: number){
        this.itemName = itemName;
        this.shortDesc = shortDesc;
        this.price = price,
        this.quantity = quantity;
    }
}