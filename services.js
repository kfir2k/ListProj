export class ShoppingList {

    constructor() {
        this.itemArry = [];
        this.index
        // this.arrayObeject = {}

    }

    setNewItem(item) {
        this.itemArry.push(item)
        this.index = this.itemArry.length

        console.log("Item from service", this.itemArry);
        console.log("index", this.index);
        // this.arrayObeject = Object.assign({}, this.itemArry);
        // this.arrayObeject.status = false;
        // console.log(this.arrayObeject);
    }

    displayItem(number) {

        console.log("=========================", number);



        // let obj = this.itemArry[this.index]
        // thisrender = `

        //  ${this.index} , ${obj.text} , ${obj.amount}





        // `
        // console.log(render);


    }


    // getItemArray() {
    //     return this.itemArray;
    // }

    deleteItemArry() {

    }

    // importedList(jsonFile) { }







}