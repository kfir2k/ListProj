export class ShoppingList {

    constructor() {
        this.itemArry = [];
        this.index
        this.obj

    }

    setNewItem(item) {
        this.itemArry.push(item)
        this.index = this.itemArry.length - 1
        console.log(this.index);
        

    }

    getItemObj() {
        this.obj = this.itemArry.slice(-1);

        return this.obj[0]
    }

    deleteItemArry(id) {

        this.itemArry.splice(id, 1)
        // console.log("from delete", this.itemArry);

    }








}