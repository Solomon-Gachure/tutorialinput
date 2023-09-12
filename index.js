const inputBox = document.getElementById("inp");
const listContainer = document.getElementById("listcont");

function addTask() {
    if (inputBox.value === "") {
        alert("Oops u never wrote anything")
    }
    else {
        const li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
    }
}