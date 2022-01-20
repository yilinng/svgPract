
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

