const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//켄버스를 css상으로만 구현했지 프로그래밍상으로 구현 안했으니 구현해줃다.
canvas.width = 500;
canvas.height = 500;

ctx.strokesStyle = "black"; //색상
ctx.lineWidth = 2.5; //굵기

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
   const x = event.offsetX;
   const y = event.offsetY;

   //클릭안할시 커서 죄표로 시작지점을 정해준다.
   if(!painting) {
       ctx.beginPath();
       ctx.moveTo(x,y);
   } //클릭하면 시작지점~끝지점까지 선을 그려준다. 
   else {
       ctx.lineTo(x,y);
       ctx.stroke();
   }

}

function onMouseDown(event) {
    painting = true;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove); //켄버스 위에 마우스 움직일시 이벤트
    canvas.addEventListener("mousedown", startPainting); //클릭시 이벤트 발생
    canvas.addEventListener("mouseup", stopPainting); //버튼 뗄시 발생
    canvas.addEventListener("mouseleave", stopPainting); //켄버스 범위 벗어날떄 이벤트 발생
}