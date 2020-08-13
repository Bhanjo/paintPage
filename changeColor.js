//색상 교체 코드
const color = document.getElementsByClassName("jsColor");

//색상 바꾸기
function handleColorClick(event) {
   const color = event.target.style.backgroundColor;
   ctx.strokeStyle = color; //strokeStyle을 오버라이드
   ctx.fillStyle = color;
}

Array.from(color).forEach(selectColor => selectColor.addEventListener("click", handleColorClick));