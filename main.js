let dis = document.querySelector(".display");
let run_button = document.getElementById("run");
let plus = document.getElementById("a");
function index() {
    window.location.href = "index.html";
}
let list = JSON.parse(localStorage.getItem("list")) || [];
setInterval(() => {
    if (list.length == 0) {
        run_button.style.display = "none";
        plus.style.display = "none";
        dis.style.height = "86vh";
    }
},100);
function add() {
    let div = document.createElement("div");
    div.className = "add";
    let btn = document.createElement("button");
    btn.textContent = "✖";
    btn.id = 'btn';
    let h3 = document.createElement("h3");
    h3.textContent = "add name";
    let input = document.createElement("input");
    input.id = "inp";
    input.placeholder = "Enter the name";
    let sh = document.createElement("div");
    sh.className = "sh";
    let button = document.createElement("button");
    button.textContent = "add the name";
    button.id = "click";
    document.body.appendChild(div);
    div.appendChild(btn);
    div.appendChild(h3);
    div.appendChild(input);
    div.appendChild(input);
    div.appendChild(sh);
    div.appendChild(button);
    btn.onclick = function() {
        div.remove();
        btn.remove();
        h3.remove();
        input.remove();
        button.remove();
    }
    button.onclick = function() {
        let inp = document.getElementById("inp");
        if (inp.value.trim() != "") {
            list.push(inp.value);
            localStorage.setItem("list",JSON.stringify(list));
            console.log(list);
            div.remove();
            btn.remove();
            h3.remove();
            input.remove();
            sh.remove();
            button.remove();
            window.location.reload(true);
        } else {
            let inp = document.getElementById("inp");
            sh.textContent = "Eror: the inputs is Empty";
            inp.style.borderColor = "rgb(230, 0, 0)";
            setTimeout(() => {
                sh.textContent = "";
                inp.style.borderColor = "#b8b88b";
            },2000);
            inp.onfocus = function() {
                inp.style.borderStyle = "dashed";
                inp.style.borderColor = "rgb(0, 108, 231)";
            }
            inp.onblur = function() {
                inp.style.borderStyle = "solid";
                inp.addEventListener("mouseenter",function() {
                    inp.style.borderStyle = "dashed";
                    inp.style.borderColor = "#818181";
                });
                inp.addEventListener("mouseleave",function() {
                    inp.style.borderStyle = "solid";
                    inp.style.borderColor = "#b8b88b";
                });
            }
        }
    }
}
function Show() {
    let num = 0;
    if (list.length <= 0) {
        dis.innerHTML = "<div class='Empty'><h3>You don't have any names.</h3></h3><button onclick='add()'>add names</button></div>";
    } else {
        list.forEach((content,index) => {
            num++;
            dis.innerHTML += `
            <div class='names'>
                <li onclick='edit(${index})' style='transform: rotate(90deg);'>✎</li>
                <a>${content}</a>
                <button onclick='del(${index})'>-</button>
            </div>`;
        });
    }
}
function del(index) {
    list.splice(index,1);
    localStorage.setItem("list",JSON.stringify(list));
    window.location.reload(true);
}
let show = document.createElement("div");
show.id = "show"
function run() {
    document.body.appendChild(show);
    var repeat = setInterval(() => {
        let com = Math.floor(Math.random()*list.length);
        show.innerHTML = `<div><a>${list[com]}</a></div>`+ `<div class='bottom'><button onclick='back()'>Close</button></div>`;
        }, 150);
    setTimeout(() => {
        clearInterval(repeat)
        show.style.backgroundColor = "rgba(0, 73, 122, 0.94)";
        let com = Math.floor(Math.random()*list.length);
        show.innerHTML = `<div><a>${list[com]}</a></div>`+ `<div class='bottom'><button onclick='back()'>Close</button></div>`
    }, 2500);
}
function back() {
    window.location.reload(true);
}
function edit(index) {
    let div = document.createElement("div");
    div.className = "add";
    let btn = document.createElement("button");
    btn.textContent = "✖";
    btn.id = 'btn';
    let h3 = document.createElement("h3");
    h3.textContent = "Edit name";
    let input = document.createElement("input");
    input.id = "inp";
    let sh = document.createElement("div");
    sh.className = "sh";
    let button = document.createElement("button");
    button.textContent = "Edit the name";
    button.id = "click";
    document.body.appendChild(div);
    div.appendChild(btn);
    div.appendChild(h3);
    div.appendChild(input);
    div.appendChild(sh);
    div.appendChild(button);
    btn.onclick = function() {
        div.remove();
        btn.remove();
        h3.remove();
        input.remove();
        sh.remove();
        button.remove();
    }
    inp.value = list[index];
    button.onclick = function() {
        let inp = document.getElementById("inp");
        if (!inp.value.trim()) {
            let inp = document.getElementById("inp");
            sh.textContent = "Error: the inputs is Empty";
            inp.style.borderColor = "rgb(230, 0, 0)";
            setTimeout(() => {
                sh.textContent = "";
                inp.style.borderColor = "#b8b88b";
            },2000);
            inp.onfocus = function() {
                inp.style.borderStyle = "dashed";
                inp.style.borderColor = "rgb(0, 108, 231)";
            }
            inp.onblur = function() {
                inp.style.borderStyle = "solid";
                inp.addEventListener("mouseenter",function() {
                    inp.style.borderStyle = "dashed";
                    inp.style.borderColor = "#818181";
                });
                inp.addEventListener("mouseleave",function() {
                    inp.style.borderStyle = "solid";
                    inp.style.borderColor = "#b8b88b";
                });
            }
        } else {
            let name = inp.value.trim();
            list[index] = name;
            localStorage.setItem("list",JSON.stringify(list));
            console.log(list);
            div.remove();
            btn.remove();
            h3.remove();
            input.remove();
            button.remove();
            window.location.reload(true);
        }
    }
}