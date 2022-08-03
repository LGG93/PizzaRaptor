const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid grey";
let isGameOver = false;
let startScreen = document.querySelector('.gameStart')
let gameOverScreen = document.querySelector('#gameOver')
let intervalId = 0;
let score = 0;
let missed = 0;
const game = document.querySelector('#game');

let dinox = 750;
let dinoy = 550;
let randomx = Math.floor(Math.random() * 1500) + 1; 
let randomy = -200;

let dinosaur = new Image();
dinosaur.src = "./images/dinoblue-CutOut.png"
let background = new Image();
background.src = "./images/background.jpg"
let backgroundOver = new Image();
backgroundOver = "./images/backgroundGameOver.png"
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
//Restart Game
document.getElementById('restartBtn').onclick = () => {
    restart();
}; 

function restart(){
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    game.style.display = 'block';
    obArr = [{x:Math.floor(Math.random() * 1500 - 100) + 1,y: -200,img: food1, ob : false},
        {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -400,img: food2, ob : false},
        {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -800,img: food3, ob : false},
        {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -600,img: ob1, ob : true},
        {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -300,img: ob2, ob : true},
        {x:Math.floor(Math.random() * 1500 - 100) + 1,y: -500,img: ob3, ob : true}
       ];
       isGameOver = false;
       missed = 0;
       score = 0;
    startGame();
    };

//Start Game
window.onload = () => {
    game.style.display = 'none';
    gameOverScreen.style.display = 'none';
    document.getElementById('startBtn').onclick = () => {
        startGame();
    }
};

function startGame() {
    game.style.display = 'block';
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    ctx.drawImage(background,0,0,canvas.width, canvas.height)
    ctx.drawImage(dinosaur,dinox,dinoy,200,200);
    //Score 
    ctx.font = '40px Exo';
    ctx.fillText(`Score : ${score}`, 30, 50);
    //Missed
    ctx.font = '40px Exo';
    ctx.fillText(`Missed : ${missed}`, 30, 100);
    
    for (let i = 0; i < obArr.length; i++){
        let currentElement  = obArr[i]
        ctx.drawImage(currentElement.img,currentElement.x, currentElement.y,100,100);
        if(score < 5){
        currentElement.y += 2;
        }
        else if(score >= 5 && score < 10){
        currentElement.y += 3;
        }
        else if( score >= 10){
        currentElement.y += 4;
        console.log("10")
        }
        else if( score >= 15 ) {
            console.log("15");
            currentElement.y += 25;
        }
        if(currentElement.y > canvas.height){
            currentElement.y = -200;  //so they are not visible when they fall
            currentElement.x =  Math.floor(Math.random() * 1500) + 1
        }
        if (dinox < currentElement.x + 100 && dinox + 200 > currentElement.x && dinoy < currentElement.y + 100 && currentElement.ob == false) {
            currentElement.y = -200;
            score += 1; 
        }

        else if (dinox < currentElement.x + 100 && dinox + 200 > currentElement.x && dinoy < currentElement.y + 100 && currentElement.ob == true) {
            currentElement.y = -200; 
            missed += 1; 
        }
    };
  
    if (missed > 2 || isGameOver == true){  
        cancelAnimationFrame(intervalId);
        gameOver();   
    }
    else{
        intervalId = requestAnimationFrame(startGame);
    };
  };

//Movement
document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight' && dinox < 1300){
        dinox += 40;
    } else if(event.code === 'ArrowLeft' && dinox > 1){
        dinox -=40;
    }
});

//GameOver
function gameOver(){
    game.style.display = 'none';
    gameOverScreen.style.display = 'flex';
    startScreen.style.display = 'none';
};




