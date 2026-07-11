function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

getUser()
    .then((user) => {
        console.log("User:", user);
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.error("Error:", error);
    });