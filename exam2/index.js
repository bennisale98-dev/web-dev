function invertedRightAligendTriangle(rows) {
    let output ="";
    for (let i = rows; i >= 1; i--) {
        output += " ".repeat(rows - i) + "*".repeat(i) + "\n";
    }
    console.log(output);
}
invertedRightAligendTriangle(5);
