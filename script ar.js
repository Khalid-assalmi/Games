function index() {
    window.location.href = "index ar.html";
}
let inp = document.getElementById("inp");
let dis = document.getElementById("dis");
let num = Math.floor(Math.random()*101);
let attempts = 6;
function run() {
    if (attempts > 1 ) {
        if (inp.value.trim() != "") {
            if (inp.value >= 0 && inp.value <= 100) {
                if (inp.value == num) {
                    inp.style.border = "2px solid rgb(41, 194, 10)";
                    dis.innerHTML = "<div class='True'> التخمين صحيح ، خمن مرة أخرى.</div>";
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 3000);
                } else {
                    attempts--;
                    if (inp.value > num) {
                    dis.textContent = "خطأ ، الرقم أصغر من  "+inp.value+" أنت تملك "+attempts+" محاولات الآن.";
                    } else if (inp.value < num) {
                    dis.textContent = "خطأ الرقم اكبر من  "+inp.value+" أنت تملك "+attempts+" محاولات الآن.";
                    }
                }
            } else if (inp.value < 0) {
                inp.style.border = "2px solid rgb(219, 22, 22)";
                dis.innerHTML = "<div class='Error'>خطأ : الرقم أصغر من 0.</div>";
                inp.onfocus = function() {
                    inp.style.border = "2px solid rgb(0, 196, 147)";
                    dis.innerHTML = "";
                }
            } else if (inp.value > 100) {
                inp.style.border = "2px solid rgb(219, 22, 22)";
                dis.innerHTML = "<div class='Error'>خطأ الرقم أكبر من 100.</div>";
                inp.onfocus = function() {
                    inp.style.border = "2px solid rgb(0, 196, 147)";
                    dis.innerHTML = "";
                }
            }
        } else {
            inp.style.border = "2px solid rgb(219, 22, 22)";
            dis.innerHTML = "<div class='Error'>خطأ : المدخلات فارغة.</div>";
            inp.onfocus = function() {
                inp.style.border = "2px solid rgb(0, 196, 147)";
                dis.innerHTML = "";
            }
        }
    } else {
        dis.textContent = "انتهت اللعبة! ، أنت لا تملك أي محاولات الآن ، الرقم هو : "+num;;
        setTimeout(() => {
            dis.textContent = "حاول مرة أخرى ...";
            window.location.reload(true);
        },3000);
        setTimeout(() => {
                dis.textContent = "";
        },4000);
    }
}