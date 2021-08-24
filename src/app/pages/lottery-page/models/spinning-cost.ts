import { Item } from "./item";

export class SpinningCost {
    item: Item;
    amount: number;

    constructor (item: Item, amount: number) {
        this.item = item;
        this.amount = amount;
    }
}
