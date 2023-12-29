export class ShoppingList {

    constructor() {
        this.itemArry = [];
        this.index
        this.obj
        // this.arrayObeject = {}

    }

    setNewItem(item) {
        this.itemArry.push(item)
        this.index = this.itemArry.length

        // console.log("Item from service", this.itemArry);
        // console.log("index", this.index);
        this.#displayItem(this.index)
    }

    #displayItem(id) {

        // console.log("=========================", id);
        this.obj = this.itemArry[id - 1];

        this.render = `
         ${this.index} | ${this.obj.itemDescription} | ${this.obj.amounts}  |





        `
        console.log(this.render);


    }


    // getItemArray() {
    //     return this.itemArray;
    // }

    deleteItemArry(id) {

        const filteredArry = this.itemArry.splice(id)


        // const result = this.itemArry.filter((id) => word === id);
        // console.log("result of delete item from arry", result);
        console.log("from delete", filteredArry);

    }

    // importedList(jsonFile) { }







}