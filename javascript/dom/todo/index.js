


const add_fruit = document.getElementById('fruitbutton');
console.log(add_fruit);
add_fruit.addEventListener('click', () => {
    console.log("fruit clicked");
    const fruitList = document.getElementById('fruitlist');
    const newFruit = document.createElement('li');
    newFruit.textContent = 'Grape';
    fruitList.appendChild(newFruit);
});