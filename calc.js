var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function sinh() {
    screen.value = Math.sinh(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function cosh() {
    screen.value = Math.cosh(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function tanh() {
    screen.value = Math.tanh(screen.value);
}

function sininverse() {
    screen.value = Math.asin(screen.value);
}

function sininverseh() {
    screen.value = Math.asinh(screen.value);
}

function cosinverse() {
    screen.value = Math.acos(screen.value);
}

function cosinverseh() {
    screen.value = Math.acosh(screen.value);
}


function taninverse() {
    screen.value = Math.atan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function evalx() {
    var a = prompt("Enter the power of e =>");
    screen.value = Math.pow(2.71828182846, a);
}

function powx() {
    var x = prompt("Enter the base =>");
    var y = prompt("Enter the power =>");
    screen.value = Math.pow(x, y);
}

