const slide = document.querySelector(".slider")
const upArrow = document.querySelector(".up-arrow")
const downArrow = document.querySelector(".down-arrow")

let x = 0;

downArrow.addEventListener('click', () => {
  if(x == -900){
    return;
  } else{
    x = x - 300;
    slide.style.top = x + "px";
  }

})

upArrow.addEventListener('click', () => {

  if(x == 0){
    return;
  } else{
    x = x + 300;
    slide.style.top = x + "px";
    console.log("it's supposed to work")  
  }
  
})