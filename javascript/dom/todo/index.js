function addFruit() {
    const fruitName = document.getElementById("fruitInput").value;

    if (fruitName.trim() === "") {
        alert("Please enter a fruit name!");
        return;
    }

    createFruitItem(fruitName);

    document.getElementById("fruitInput").value = "";
}

function createFruitItem(fruitName) {
    const li = document.createElement("li");

    const fruitText = document.createElement("span");
    fruitText.textContent = fruitName;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {
        const newName = prompt("Enter new fruit name:", fruitText.textContent);

        if (newName && newName.trim() !== "") {
            fruitText.textContent = newName;
        }
    };


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(fruitText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("fruitList").appendChild(li);
}

document.querySelectorAll("#fruitList li").forEach(item => {
    const fruitName = item.textContent;
    item.remove();
    createFruitItem(fruitName);
});