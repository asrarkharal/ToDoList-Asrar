let addBtn = document.getElementById("button-add");
let savedTasks = document.getElementById("saved-items");

addBtn.addEventListener("click", addListItem);


//Adding in add Items from New Tasks
function addListItem(ev) {
    //ev.preventDefaul();
    let newItem = document.getElementById("newItem").value;

    //check newItem is empty or not
    newItem = newItem.trim();
    if (newItem.length == 0) {
        alert("String can not be empty");
    } else {


        //new List
        let newLi = document.createElement("li");
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.value = newItem;

        let newBtnEdit = document.createElement("button");
        newBtnEdit.className = "button-edit";
        newBtnEdit.appendChild(document.createTextNode("Edit"));


        let newBtnDone = document.createElement("button");
        newBtnDone.className = "button-done";
        newBtnDone.appendChild(document.createTextNode("Done"));

        let newBtnRemove = document.createElement("button");
        newBtnRemove.className = "button-remove";
        newBtnRemove.appendChild(document.createTextNode("Remove"));

        newLi.appendChild(newInput);
        newLi.appendChild(newBtnEdit);
        newLi.appendChild(newBtnDone);
        newLi.appendChild(newBtnRemove);
        savedTasks.appendChild(newLi);

        //empty input text in new task after adding task in Saved Task
        document.getElementById("newItem").value = "";
    }


}
//Adding in Done Tasks
let doneList = document.getElementById("saved-items");
doneList.addEventListener("click", moveToDoneListItem);

function moveToDoneListItem(e) {
    let mydoneTask;
    e.preventDefault();
    if (e.target.classList.contains("button-done")) {
        mydoneTask = document.getElementById("mydone-items");
        mydoneTask.appendChild(e.target.parentElement);
        //hide done button...
    }

    if (e.target.classList.contains("button-remove")) {
        e.target.parentElement.remove();
    }

}

//To Remove Items
let delList = document.getElementById("mydone-items");
//console.log(delList);

delList.addEventListener("click", removeListItem);

function removeListItem(e) {
    let mydoneTask;
    e.preventDefault();
    if (e.target.classList.contains("button-remove")) {
        e.target.parentElement.remove();
    }
}