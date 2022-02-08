
const imageClick = document.querySelectorAll("#whiteBoard, #manImage, #womanImage");
let centerBoard = document.querySelector("#whiteBoard");
let leftImage = document.querySelector("#womanImage");
let rightImage = document.querySelector("#manImage");

for(let i = 0; i < imageClick.length; i++){
  imageClick[i].addEventListener('click', function(){
    const rando = () => imageClick[Math.floor(Math.random() * imageClick.length)]
    console.log(rando());
  })
}

//window shop

const windowShopClick = document.querySelector("#borderCheck");
const checkMark = document.querySelector("#checkMark");
/// window border click ,border color change
let borderCheck = false;

windowShopClick.addEventListener('click', function(){
 
 if(borderCheck){
  document.documentElement.style.cssText = `--border-color: #F0F0F0`;
  borderCheck = false;
  checkMark.style.visibility = 'hidden';
 }else{
  document.documentElement.style.cssText = `--border-color: #6C63FF`;
  borderCheck = true;
  checkMark.style.visibility = 'visible';
 } 
})

const heart = document.querySelector("#heart");
let heartClick = false;
heart.addEventListener('click', function(){
  
  if(heartClick){
    document.documentElement.style.cssText = `--heart-color: #D1D3D4`;
    heartClick = false
  }else{
    document.documentElement.style.cssText = `--heart-color: #FFB6C1`;
    heartClick = true
  }
})