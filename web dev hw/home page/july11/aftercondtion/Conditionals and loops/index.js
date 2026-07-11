let output = document.getElementById("output");

function clearOutput() {
    output.innerHTML = "";
}

function print(text) {
    output.innerHTML += text + "<br>";
}

// ----------------------
// Task 1 - Callback
// ----------------------

function getUser(id, callback) {
    setTimeout(function () {
        callback({
            id: id,
            name: "Ram"
        });
    }, 2000);
}

function task1() {

    clearOutput();

    getUser(1, function(user) {
        print("User Name: " + user.name);
    });

}

// ----------------------
// Task 2 - Callback Hell
// ----------------------

function getPosts(id, callback) {
    setTimeout(function () {
        print("Posts fetched");
        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(function () {
        print("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}

function task2() {

    clearOutput();

    getUser(1, function(user) {

        print("User fetched");

        getPosts(user.id, function(posts) {

            getComments(posts[0], function(comments) {

                print("User: " + JSON.stringify(user));
                print("Posts: " + posts);
                print("Comments: " + comments);

            });

        });

    });

}

// ----------------------
// Task 3 - Promises
// ----------------------

function getUserPromise(id) {
    return new Promise(function(resolve) {

        setTimeout(function() {

            print("User fetched");

            resolve({
                id: id,
                name: "Ram"
            });

        }, 1000);

    });
}

function getPostsPromise(id) {
    return new Promise(function(resolve) {

        setTimeout(function() {

            print("Posts fetched");

            resolve(["post1", "post2"]);

        }, 1000);

    });
}

function getCommentsPromise(post) {
    return new Promise(function(resolve) {

        setTimeout(function() {

            print("Comments fetched");

            resolve(["nice", "good"]);

        }, 1000);

    });
}

function task3() {

    clearOutput();

    getUserPromise(1)

    .then(function(user) {

        print("User: " + JSON.stringify(user));

        return getPostsPromise(user.id);

    })

    .then(function(posts) {

        print("Posts: " + posts);

        return getCommentsPromise(posts[0]);

    })

    .then(function(comments) {

        print("Comments: " + comments);

    })

    .catch(function(error) {

        print(error);

    });

}

// ----------------------
// Task 4 - Async/Await
// ----------------------

async function showData() {

    clearOutput();

    let user = await getUserPromise(1);
    print("User: " + JSON.stringify(user));

    let posts = await getPostsPromise(user.id);
    print("Posts: " + posts);

    let comments = await getCommentsPromise(posts[0]);
    print("Comments: " + comments);

}

function task4() {
    showData();
}