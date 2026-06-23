const users = [
    { id: 1, name: "Evan", active: true },
    { id: 2, name: "Yujin", active: false },
    { id: 3, name: "Bishad", active: true }
];
const newusers = users.map(newusers);
function newusers(user) {
    return {
        id: user.id,
        name: user.name,
        active: user.active    };
}
console.log(newusers);
