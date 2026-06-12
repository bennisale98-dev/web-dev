const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input",(event)=>{
    const searchtext = searchbar.value.toLowerCase();
    const items = document.querySelectorAll(".search-item");
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchtext)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
const add_fruit = document.getElementById('add-btn');

addButton.addEventListener("click", () => {
    const fruitName = searchBar.value.trim();

    if (fruitName === "") return;

    const newFruit = document.createElement("div");
    newFruit.textContent = fruitName;
    newFruit.classList.add("search-item");

    fruitList.appendChild(newFruit);

    searchBar.value = "";
});