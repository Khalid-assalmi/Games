function add() {
    var plus = document.createElement("div");
    plus.className = "add";
    var btn = document.createElement("button");
    btn.textContent = "✖"
    var A = document.createElement("a");
    A.textContent = "العربية";
    A.href = "index ar.html";
    var B = document.createElement("a");
    B.textContent = "English";
    B.href = "index.html";
    document.body.appendChild(plus);
    plus.appendChild(btn);
    plus.appendChild(A);
    plus.appendChild(B);
    btn.onclick = function() {
        plus.remove();
        btn.remove();
        A.remove();
        B.remove();
    }
}