import { ShoppingList } from './services.js'
import { render } from './view_modal.js'

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
    let array = myList.getItemArray()
    console.log("from main", array);
    // render(array)






}



function deleteItemByUserController() {



}









