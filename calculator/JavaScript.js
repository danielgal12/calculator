function reroll() {
    var num = parseInt(Math.random() * 10) + 1;
 
    document.getElementById("calc1").value = num;


    var num2 = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc2").value = num2;
    var num1b = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc1b").value = num1b;
    var num2b = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc2b").value = num2b;
    var num1c = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc1c").value = num1c;
    var num2c = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc2c").value = num2c;
    var num1d = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc1d").value = num1d;
    var num2d = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc2d").value = num2d;
    var num1e = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc1e").value = num1e;
    var num2e = parseInt(Math.random() * 10) + 1;
    document.getElementById("calc2e").value = num2e;
}
function add() {
    var num1 = parseInt(document.getElementById("calc1").value);
    var num2 = parseInt(document.getElementById("calc2").value);
    var num3 = parseInt(document.getElementById("calc3").value);
    if (num1 + num2 == num3) {
        document.getElementById("msgPlus1").innerHTML = "צדקת <img src='V green.jfif' width = '10' height='10'>";
    }
    else {
        document.getElementById("msgPlus1").innerHTML = "נסה שוב <img src='red X.png' width = '10' height='10'>";
    }
}
function minus() {
    var num1 = parseInt(document.getElementById("calc1b").value);
    var num2 = parseInt(document.getElementById("calc2b").value);
    var num3 = parseInt(document.getElementById("calc3b").value);
    if (num1 - num2 == num3) {
        document.getElementById("msgPlus2").innerHTML = "צדקת <img src='V green.jfif' width = '10' height='10'>";
    }
    else {
        document.getElementById("msgPlus2").innerHTML = "נסה שוב <img src='red X.png' width = '10' height='10'>";
    }
}
function multiplie() {
    var num1 = parseInt(document.getElementById("calc1c").value);
    var num2 = parseInt(document.getElementById("calc2c").value);
    var num3 = parseInt(document.getElementById("calc3c").value);
    if (num1 * num2 == num3) {
        document.getElementById("msgPlus3").innerHTML = "צדקת <img src='V green.jfif' width = '10' height='10'>";
    }
    else {
        document.getElementById("msgPlus3").innerHTML = "נסה שוב <img src='red X.png' width = '10' height='10'>";
    }
}
function divider() {
    var num1 = parseInt(document.getElementById("calc1d").value);
    var num2 = parseInt(document.getElementById("calc2d").value);
    var num3 = parseInt(document.getElementById("calc3d").value);
    if (num1 / num2 == num3) {
        document.getElementById("msgPlus4").innerHTML = "צדקת <img src='V green.jfif' width = '10' height='10'>";
    }
    else {
        document.getElementById("msgPlus4").innerHTML = "נסה שוב <img src='red X.png' width = '10' height='10'>";
    }
}
function modulo() {
    var num1 = parseInt(document.getElementById("calc1e").value);
    var num2 = parseInt(document.getElementById("calc2e").value);
    var num3 = parseInt(document.getElementById("calc3e").value);
    if (num1 % num2 == num3) {
        document.getElementById("msgPlus5").innerHTML = "יפה מאוד <img src='V green.jfif' width = '10' height='10'>";
        

    }
    else {
        document.getElementById("msgPlus5").innerHTML = "נסה שוב <img src='red X.png' width = '10' height='10'>";

    }
}
function checkAnswer() {
    add();
    minus();
    multiplie();
    divider();
    modulo();
}
// אני יודע שהוי הירוק זה תמונה של פחית זה היה בגלל התערבות בגלל התערבות