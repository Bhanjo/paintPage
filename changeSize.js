//굵기를 변환하는 코드
const range = document.getElementById("jsRange");

function handleRangeChange(event) {
    console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(range) {
    range.addEventListener("input", handleRangeChange);
}