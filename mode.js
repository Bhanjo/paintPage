const mode = document.getElementById("jsMode");

let filling = false;

function chageMode() {
    if(filling === true) {
        filling = false;
        mode.innerText = "FILL";
    } else {
        filling = true;
        mode.innerText = "PAINT";
    }
}

if(mode) {
    mode.addEventListener("click", chageMode);
}