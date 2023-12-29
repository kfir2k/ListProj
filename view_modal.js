
let displayArea = document.getElementById("display-area")

export function render(obj) {


    console.log(obj);

    console.log("from render", obj);
    displayArea.innerHTML += `<label>${obj.itemDescription} , ${obj.amounts }<label/><br/>`


}

