const grid = document.querySelector(".grid");
let score = document.getElementById("Score");
let messageComatianer = document.querySelector(".messageComatianer");
let restartButton = document.getElementById("restartButton");

let square = [];
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

function createDiv() {

  for (let i = 0; i < layout.length; i++) {

    // creating a div 
    let gridDiv = document.createElement("div");

    // adding that div into grid   
    grid.appendChild(gridDiv);

    // pushing each created grid into an empty array
    square.push(gridDiv);

    if (layout[i] === 0) {
      square[i].classList.add('pac-dot');
    }
    else if (layout[i] === 1) {
      square[i].classList.add('wall');
    }
    else if (layout[i] === 2) {
      square[i].classList.add('ghost-liar');
    }
    else if (layout[i] === 3) {
      square[i].classList.add('power-pallet');
    }
  }

}

createDiv();
let width = 28;
let pacmanCurrentIndex = 490;
let intialScore = 0;


function control(e) {
  square[pacmanCurrentIndex].classList.remove("pacman")
  switch (e.key) {
    case 'ArrowRight':

      if (
        !square[pacmanCurrentIndex + 1].classList.contains("ghost-liar") &&
        !square[pacmanCurrentIndex + 1].classList.contains("wall") &&
        pacmanCurrentIndex % width < width - 1) {
        pacmanCurrentIndex += 1

        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391
        }

        if (square[pacmanCurrentIndex].classList.contains("pac-dot")) {
          square[pacmanCurrentIndex].classList.remove("pac-dot");
          intialScore++;
          score.innerHTML = intialScore;
        }
      }
      break;

    case 'ArrowUp':

      if (!square[pacmanCurrentIndex - width].classList.contains("ghost-liar") &&
        !square[pacmanCurrentIndex - width].classList.contains("wall") &&
        pacmanCurrentIndex - width >= 0) {

        pacmanCurrentIndex -= width

        if (square[pacmanCurrentIndex].classList.contains("pac-dot")) {
          square[pacmanCurrentIndex].classList.remove("pac-dot");
          intialScore++;
          score.innerHTML = intialScore;
        }
      }
      break;

    case 'ArrowLeft':

      if (!square[pacmanCurrentIndex - 1].classList.contains("ghost-liar") &&
        !square[pacmanCurrentIndex - 1].classList.contains("wall") &&
        pacmanCurrentIndex % width !== 0) {

        pacmanCurrentIndex -= 1

        if (pacmanCurrentIndex === 391) {
          pacmanCurrentIndex = 364
        }

        if (square[pacmanCurrentIndex].classList.contains("pac-dot")) {
          square[pacmanCurrentIndex].classList.remove("pac-dot");
          intialScore++;
          score.innerHTML = intialScore;
        }
      }
      break;

    case 'ArrowDown':

      if (!square[pacmanCurrentIndex + width].classList.contains("ghost-liar") &&
        !square[pacmanCurrentIndex + width].classList.contains("wall") &&
        pacmanCurrentIndex + width < width * width) {

        pacmanCurrentIndex += width;

        if (square[pacmanCurrentIndex].classList.contains("pac-dot")) {
          square[pacmanCurrentIndex].classList.remove("pac-dot");
          intialScore++;
          score.innerHTML = intialScore;
        }
      }
      break;

  }
  square[pacmanCurrentIndex].classList.add("pacman")
  powerPalletEaten()
}


// Add an event listener to listen for keyboard events
window.addEventListener('keydown', control);

function powerPalletEaten(){

// if square pacman in a same container to powerpallet
  if(square[pacmanCurrentIndex].classList.contains("power-pallet")){
          // add a score to 10
          intialScore +=10;
          score.innerHTML = intialScore;

          square[pacmanCurrentIndex].classList.remove('power-pallet')
          
          // change the ghost to isScared to true
          ghosts.forEach((ghost) =>ghost.isScared = true)

          setTimeout(()=>{
            ghosts.forEach((ghost) =>ghost.isScared = false)
          },15000)
  }

}


class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.isScared = false
    this.timerId = NaN
  }
}

let ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
]

// what we are doing here ?
// now we are iterating through the array of ghosts and each time 
// we are adding a classlist on each square[ghost.startIndex]


ghosts.forEach((ghost) => {
  square[ghost.currentIndex].classList.add(ghost.className);
  square[ghost.currentIndex].classList.add("invisibleGhost");
})

ghosts.forEach((ghost) => {
  moveGhost(ghost);
})

function moveGhost(ghost){
     const directions = [+1,-1,-width,+width];
     let direct = directions[Math.floor(Math.random()*directions.length)];

     ghost.timerId = setInterval(()=>{

      if  (
           !square[ghost.currentIndex + direct].classList.contains('ghost')&&
           !square[ghost.currentIndex + direct].classList.contains('wall') 
           ) 
           {
          //ove the ghosts classes
          square[ghost.currentIndex].classList.remove(ghost.className)
          square[ghost.currentIndex].classList.remove('ghost', 'scaredGhost')
          //move into that space
          ghost.currentIndex += direct
          square[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      }
      else direct = directions[Math.floor(Math.random() * directions.length)]

      if(ghost.isScared){
        square[ghost.currentIndex].classList.add("scaredGhost");
      }

      // if the ghost is current scared and the pacman on it
      
      if(ghost.isScared && square[ghost.currentIndex].classList.contains("pacman")){
        // remove classname ghost and scare-ghost
        square[ghost.currentIndex].classList.remove(ghost.className,'ghost',"scaredGhost")
        // change ghost current index back to start index
        ghost.currentIndex = ghost.startIndex;

        intialScore += 100;

        score.innerHTML = intialScore;

        square[ghost.currentIndex].classList.add(ghost.className,'ghost')
      }
     
      checkGameOver()
      
  },ghost.speed);
}


function checkGameOver(){

// if the square pacman conatins is in a ghost and 
// the square does ot contain the scared ghost
if(square[pacmanCurrentIndex].classList.contains("ghost")&&
   !square[pacmanCurrentIndex].classList.contains("scaredGhost") 
){

// for Each ghost we need to stop its moving
  ghosts.forEach((ghost)=>{
     clearInterval(ghost.timerId);
  })

  //remove event listner from our control function
  window.removeEventListener('keydown', control)

  setTimeout(()=>{messageComatianer.classList.add("dis")},1000)
  

}


// tell user the game is over

}


restartButton.addEventListener("click",()=>{

  messageComatianer.classList.remove("dis");
  square[pacmanCurrentIndex].classList.remove("pacman")

  window.addEventListener('keydown', control)
   
  ghosts.forEach((ghost) =>{
    square[ghost.currentIndex].classList.remove(ghost.className);
    square[ghost.currentIndex].classList.remove("invisibleGhost");
    square[ghost.currentIndex].classList.remove("ghost");
    ghost.currentIndex = ghost.startIndex;
    moveGhost(ghost);
  })
  
  pacmanCurrentIndex = 490;

})

