fetch("https://jsonplaceholder.typicode.com/posts")
.then (response => response.json())
.then (post => {
    document.getElementById("loading").remove();
    const list = document.getElementById("posts-list");
    post.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${post.title}</b><p>${post.body}</p>`;
        list.appendChild(li);
    });
})
.catch(() => {
    document.getElementById("loading").textContent = "failed to load data";
});
