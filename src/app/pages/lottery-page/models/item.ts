export class Item {
    itemId : number;
    slots : number;
    isTradable: boolean;

    constructor (itemId: number, slots: number, isTradable: boolean) {
        this.itemId = itemId;
        this.slots = slots;
        this.isTradable = isTradable;
    }
    
}
