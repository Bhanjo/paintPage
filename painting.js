//페인팅 베이스 코드
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//캔버스 기본 색상, 사이즈 등 설정
const INITIAL_COLOR = "black";
const CANVAS_SIZE = 500;

//켄버스를 css상으로만 구현했지 프로그래밍상으로 구현 안했으니 구현해줃다.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokesStyle = INITIAL_COLOR; //색상
ctx.fillStyle = INITIAL_COLOR; //채우기
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

//채우기or그리기 변경
function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    } else {
        
    }
}

//마우스 우클릭 방지
function handleCM(evnet) {
    event.preventDefault();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove); //켄버스 위에 마우스 움직일시 이벤트
    canvas.addEventListener("mousedown", startPainting); //클릭시 이벤트 발생
    canvas.addEventListener("mouseup", stopPainting); //버튼 뗄시 발생
    canvas.addEventListener("mouseleave", stopPainting); //켄버스 범위 벗어날떄 이벤트 발생
    canvas.addEventListener("click", handleCanvasClick); //모드 변경 이벤트
    canvas.addEventListener("contextmenu", handleCM);
}