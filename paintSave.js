//그림 저장 코드
const saveBtn = document.getElementById("jsSave");

function saveClick() {
    const image = canvas.toDataURL(); //("image/jpeg") 입려시 jpg로 저장됨 기본은 png
    const link = document.createElement("a"); //브라우저 링크를 들어가는게 아니고 URL을 통해 다운받는다.
    link.href = image;
    link.download = "PaintJS";
    link.click();
}

if(saveBtn) {
    saveBtn.addEventListener("click", saveClick);
}