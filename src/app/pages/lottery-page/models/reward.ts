import { Item } from "./item";

export class Reward {
    rewardRarity: number;
    item: Item;
    amount: number;

    constructor(rewardRarity: number, item: Item, amount: number){
        this.rewardRarity = rewardRarity;
        this.item = item;
        this.amount =amount;
    }
}
