export class ShoppingList {

    constructor() {
        this.itemArry = [];
        this.index
        this.obj

    }

    setNewItem(item) {
        this.itemArry.push(item)
        this.index = this.itemArry.length
        console.log("from set item", this.itemArry);
    }

    getItemArray() {
        console.log("from GET", this.itemArry);
        return this.itemArry;
    }

    deleteItemArry(id) {

        this.itemArry.splice(id, 1)
        console.log("from delete", this.itemArry);

    }








}