import { ShoppingList } from './services.js'
import { } from './view_modal.js'
let myList = new ShoppingList();
document.getElementById('myForm').addEventListener('submit', event => {
    event.preventDefault()
    addItemByUserController()

});
const userClick = document.getElementById("submitBtn").addEventListener("click", addItemByUserController);





function addItemByUserController() {

    const userItemInput = document.getElementById("userInput");
    const text = userItemInput.value.replace(/[0-9]/g, '');
    const number = userItemInput.value.replace(/\D/g, '')

    const item = {

        itemDescription: text,
        amounts: number,
        status: false

    }
    userItemInput.value = ""
    myList.setNewItem(item)




}
const item = {

    itemDescription: "item 1111111111111111111",
    amounts: "number",
    status: false

}
const item2 = {

    itemDescription: "item 222222222222222222",
    amounts: "nubmer",
    status: false

}
const item3 = {

    itemDescription: "item 33333333333333333333333",
    amounts: "nubmer",
    status: false

}

myList.setNewItem(item)
myList.setNewItem(item2)
myList.setNewItem(item3)
myList.deleteItemArry(2)


function deleteItemByUserController() {

}









