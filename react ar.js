let turn = "O";
let turn2 = "X";
let title = document.querySelector(".display")
let square = [];
function winner() {
    function check() {
        turn = turn2;
        title.textContent = " الفائز " + turn2 ;
        setInterval(() => {
            title.textContent += ".";
        },666);
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
    }
    for (let i = 1; i < 10;i++) {
        square[i] = document.getElementById("item"+i).textContent;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
        check();
        document.getElementById("item"+1).style.backgroundColor = "orange";
        document.getElementById("item"+2).style.backgroundColor = "orange";
        document.getElementById("item"+3).style.backgroundColor = "orange";
    } else if (square[4] == square[5] && square[5] == square[6] && square[4] != "") {
        check();
        document.getElementById("item"+4).style.backgroundColor = "orange";
        document.getElementById("item"+5).style.backgroundColor = "orange";
        document.getElementById("item"+6).style.backgroundColor = "orange";
    } else if (square[7] == square[8] && square[8] == square[9] && square[7] != "") {
        check();
        document.getElementById("item"+7).style.backgroundColor = "orange";
        document.getElementById("item"+8).style.backgroundColor = "orange";
        document.getElementById("item"+9).style.backgroundColor = "orange";
    } else if (square[1] == square[4] && square[4] == square[7] && square[1] != "") {
        check();
        document.getElementById("item"+1).style.backgroundColor = "orange";
        document.getElementById("item"+4).style.backgroundColor = "orange";
        document.getElementById("item"+7).style.backgroundColor = "orange";
    } else if (square[2] == square[5] && square[5] == square[8] && square[2] != "") {
        check();
        document.getElementById("item"+2).style.backgroundColor = "orange";
        document.getElementById("item"+5).style.backgroundColor = "orange";
        document.getElementById("item"+8).style.backgroundColor = "orange";
    } else if (square[3] == square[6] && square[6] == square[9] && square[3] != "") {
        check();
        document.getElementById("item"+3).style.backgroundColor = "orange";
        document.getElementById("item"+6).style.backgroundColor = "orange";
        document.getElementById("item"+9).style.backgroundColor = "orange";
    } else if (square[1] == square[5] && square[5] == square[9] && square[1] != "") {
        check();
        document.getElementById("item"+1).style.backgroundColor = "orange";
        document.getElementById("item"+5).style.backgroundColor = "orange";
        document.getElementById("item"+9).style.backgroundColor = "orange";
    } else if (square[3] == square[5] && square[5] == square[7] && square[3] != "") {
        check();
        document.getElementById("item"+3).style.backgroundColor = "orange";
        document.getElementById("item"+5).style.backgroundColor = "orange";
        document.getElementById("item"+7).style.backgroundColor = "orange";
    } else if (square[1] != "" && square[2] != "" && square[3] != "" && square[4] != "" && square[5] != "" && square[6] != "" && square[7] != "" && square[8] != "" && square[9] != "") {
        title.textContent = "تعادل";
        setInterval(() => {
            title.textContent += ".";
        },666);
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
    }
}
function Start(id) {
    let element = document.getElementById(id);
    if (turn == "O" && element.textContent == "") {
        element.textContent = "O";
        turn = "X";
        turn2 = "O";
        title.textContent = "X";
    } else if (turn == "X" && element.textContent == "") {
        element.textContent = "X";
        turn = "O";
        turn2 = "X";
        title.textContent = "O";
    }
    winner();
}
function index() {
    window.location.href = "index ar.html";
}