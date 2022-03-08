function view(num) {
    document.getElementById("result").value += num;
}

function compute() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value ="";
}

function backspace(params) {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length-1);
}

function sqrRoot(num) {
    let s = document.getElementById("result").value;
    var squareRoot = Math.sqrt(s);
    document.getElementById("result").value = squareRoot;
}

function sqr(num) {
    let s = document.getElementById("result").value;
    var square = s**2;
    document.getElementById("result").value = square;
}

function cube(num) {
    let c = document.getElementById("result").value;
    var cube = c**3;
    document.getElementById("result").value = cube;
}