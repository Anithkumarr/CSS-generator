const inputEl = document.getElementById("input-range");
const spanEl = document.getElementById("value");
const span2El = document.getElementById("border-value");
const textAreaEl = document.getElementById("code");
const containerEl = document.getElementById("container");
const copyBtnEl = document.getElementById("btn-copy");
const borderStyleEl = document.getElementById("borders");
const borderEl = document.getElementById("border-range");

document.addEventListener("DOMContentLoaded", () => {
  let radius = 10;
  let coding = "";
  let borderStyle = "solid";
  let borderSize = 3;

  function allBorder() {
    radius = inputEl.value;
    borderSize = borderEl.value;
    spanEl.innerText = `${radius}` + "px";
    span2El.innerText = `${borderSize}` + "px";

    coding=`border-radius:${radius}px;
    border:${borderSize}px ${borderStyle} #191716ff;`;
    textAreaEl.value=coding;
    containerEl.style.cssText=coding;

  }



  inputEl.addEventListener('mousemove',allBorder);
  inputEl.addEventListener('change',allBorder);

  inputEl.addEventListener('mousemove',allBorder);
  inputEl.addEventListener('change',allBorder);

borderEl.addEventListener('mousemove',allBorder);
borderEl.addEventListener('change',allBorder);

copyBtnEl.addEventListener('click',()=>{
    textAreaEl.select();
    document.execCommand('copy');
    alert('Copied Successfully');
});


allBorder();


borderStyleEl.addEventListener('change',function(){
    borderStyle=this.value;
    allBorder()
});
  
});
