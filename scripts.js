const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid grey";
let isGameOver = false;
let startScreen = document.querySelector('.gameStart')
let intervalId = 0;
let score = 0;

let dinox = 750;
let dinoy = 550;
let randomx = Math.floor(Math.random() * 1500) + 1; 
let randomy = -200;

let dinosaur = new Image();
dinosaur.src = "./images/dinoblue-CutOut.png"
let background = new Image();
background.src = "./images/background.jpg"
let ctx = canvas.getContext("2d");

//OBSTACLES

//Objects

let ob1 = new Image();
ob1.src = "./images/object (1)-CutOut.png";


let ob2 = new Image();
ob2.src = "./images/object (2)-CutOut.png";

let ob3 = new Image();
ob3.src = "./images/object (3)-CutOut.png";

//Food
let food1 = new Image();
food1.src = "./images/food (1)-CutOut.png";

let food2 = new Image();
food2.src = "./images/food (2)-CutOut.png";

let food3 = new Image();
food3.src = "./images/food (3)-CutOut.png";


let obArr = [{x:Math.floor(Math.random() * 1500 - 100) + 1,y: -200,img: food1, ob : false},
     {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -400,img: food2, ob : false},
     {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -800,img: food3, ob : false},
     {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -600,img: ob1, ob : true},
     {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -300,img: ob2, ob : true},
     {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -500,img: ob3, ob : true}
    ];


window.onload = () => {
    game.style.display = 'none';
    document.getElementById('startBtn').onclick = () => {
        startGame();
    

      };
      
      
    };



  function startGame() {
    game.style.display = 'block';
    startScreen.style.display = 'none';
    ctx.drawImage(background,0,0,canvas.width, canvas.height)
    ctx.drawImage(dinosaur,dinox,dinoy,200,200);
    
    
    for (let i = 0; i < obArr.length; i++){
        let currentElement  = obArr[i]
        ctx.drawImage(currentElement.img,currentElement.x, currentElement.y,100,100);
        currentElement.y += 2;
        if(currentElement.y > canvas.height){
            currentElement.y = -200;  //so they are not visible when they fall
            currentElement.x =  Math.floor(Math.random() * 1500) + 1
        }
    };
  
    if (isGameOver == true){
        cancelAnimationFrame(intervalId);
    }
    else{
       intervalId = requestAnimationFrame(startGame);
    
    }
  };

//Movement
  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight' && dinox < 1300){
        dinox += 40;
    }
    else if(event.code === 'ArrowLeft' && dinox > 1){
        dinox -=40;
    }
});


//Score
    ctx.font = '30px Georgia';
    ctx.fillText(`Score:${score}`, 500, 500);
    intervalId = requestAnimationFrame(startGame);
    

//Colissions
function detectCollision(obstacle) {
    if (dinoy > currentElement.y + 100 && currentElement.ob == false)
    score ++;
}
console.log(score);
