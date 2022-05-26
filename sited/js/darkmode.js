var classList = document.documentElement.classList;
function toggleDarkMode() {
    if (classList.contains("light")) {
        classList.remove("light")
        classList.add("dark")
        invertSVG(1);
    } else if (classList.contains("dark")) {
        classList.remove("dark")
        classList.add("light")
        invertSVG(0);
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            classList.add("dark")
            invertSVG(1);
        } else {
            classList.add("light")
            invertSVG(0);
        }
    }
}

function invertSVG(x) {
    inverts = document.getElementsByClassName("btnsvg");
    for (var i = 0; i < inverts.length; i++) {
        inverts[i].style.filter = "invert(" + x + ")";
    }
}

index = 0;
var slides = document.getElementsByClassName("slide");
var btns = document.getElementsByClassName("pagibtn");
load();
function load() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slides[index].style.opacity = "1";
    checkForPagination()
}
function slide(n) {
    if ((slides.length - 1 < (index + n)) || (index + n < 0)) {
        return;
    }
    index += n;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slides[index].style.opacity = "1";
    checkForPagination()
}
function checkForPagination() {
    if (index == 0) {
        btns[1].classList.remove("btn-disabled");
        btns[1].classList.add("btn-secondary");
        btns[0].classList.add("btn-disabled");
        btns[0].classList.remove("btn-secondary");
    }
    else if (index == slides.length - 1) {
        btns[0].classList.remove("btn-disabled");
        btns[0].classList.add("btn-secondary");
        btns[1].classList.add("btn-disabled");
        btns[1].classList.remove("btn-secondary");
    } else {
        btns[0].classList.remove("btn-disabled");
        btns[1].classList.remove("btn-disabled");
        btns[0].classList.add("btn-secondary");
        btns[1].classList.add("btn-secondary");
    }
}

function toggleColorMenu() {
    if (document.getElementById("color-menu").style.visibility == "visible") {
        document.getElementById("color-menu").style.visibility = "hidden";
        document.getElementById("color-menu").style.opacity = "0";
    } else {
        document.getElementById("color-menu").style.visibility = "visible";
        document.getElementById("color-menu").style.opacity = "1";
    }
}

// cssRules property throws a DOMException **
// getComputedStyle(document.body).getPropertyValue('--color-font-general'); - create base for theme engine
document.addEventListener("DOMContentLoaded", function () {
    var variables = ['--bg-color', '--block-color', '--primary-color', '--primary-color-rgb', '--primary-hover', '--secondary-color', '--secondary-hover', '--info-color', '--info-hover', '--alert-color', '--alert-hover', '--disabled-color', '--font-color', '--font-color-invert', '--link', '--input-color', '--shadow', '--placeholder', '--footer-color'];
    var values = [];
    console.log(getComputedStyle(document.body).getPropertyValue('--primary-color'));
    for(var color of variables) {
        values.push(getComputedStyle(document.body).getPropertyValue(color));
    }
    for(var value of values) {
        var text = document.createTextNode(value);
        document.getElementById("color-menu").appendChild(text);
    }
    console.log(values);
});