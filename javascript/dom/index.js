const title= document.getElementById('title');
console.log(title);
console.log(title.textContent);
title.textContent = 'Hello, DOM!';

const changeTitleButton = document.getElementById('changeTitleButton');
console.log(changeTitleButton);
changeTitleButton.addEventListener('click',  ()=> {
    console.log("Button clicked");
    title.textContent = 'Title Changed!';
});
const items = document.querySelectorAll(".paragraph");
console.log(items,"All paragraphs:");

const content = document.getElementById("content");
console.log(content,"Content div:");
content.innerHTML = "<p>This is new content added to the div.</p>";