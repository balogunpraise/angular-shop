import CartItem from "../cart-item/cart-item-model";

export class CartList{
    items : Array<CartItem>;

    constructor(){
        this.items = new Array<CartItem>();
    }
}