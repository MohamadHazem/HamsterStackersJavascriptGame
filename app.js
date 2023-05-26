//Hamster Fall on Click (Event Listener)
document.addEventListener ("click", (event)=>{
    document.querySelector ("#hamsterSix").style.opacity = 1;
    trigger = false;
    hamsterFall();
    randomHamster();
    return
});

//Randomiser for Hamster Fall for Horizontal Axis

function randomHamster () {
    function randomInteger(min,max) {
        return Math.floor(Math.random()*(max-min)) + min;
    }
    let randoHam = randomInteger(300,700);
    document.querySelector ("#hamsterSix").style.left =  `${randoHam}px`;
};

//Hamster Stack Move Using Right and Left Arrow Keys

 let move = 500;
 document.addEventListener ("keydown", (event)=>{
 if (event.key == "ArrowLeft") {
     move -= 10;
     document.getElementById ("hamsterOne").style.left = `${move}px`;
     document.getElementById ("hamsterTwo").style.left = `${move}px`;
     document.getElementById ("hamsterThree").style.left = `${move}px`;
     document.getElementById ("hamsterFour").style.left = `${move}px`;
     document.getElementById ("hamsterFive").style.left = `${move}px`;
 } else if (event.key == "ArrowRight") {
     move += 10;
     document.getElementById ("hamsterOne").style.left = `${move}px`;
     document.getElementById ("hamsterTwo").style.left = `${move}px`;
     document.getElementById ("hamsterThree").style.left = `${move}px`;
     document.getElementById ("hamsterFour").style.left = `${move}px`;
     document.getElementById ("hamsterFive").style.left = `${move}px`;
 }});

//Hamster Stack Appear & Win Condition

let stackAppear = 0;

function stackAppeare() {
    if (stackAppear == 1) {
            document.getElementById("hamsterFour").style.opacity = 1;
        }else if (stackAppear == 2) {
            document.getElementById("hamsterThree").style.opacity = 1;
        }else if (stackAppear == 3) {
            document.getElementById("hamsterTwo").style.opacity = 1;
        }else if (stackAppear == 4) {
            document.getElementById("hamsterOne").style.opacity = 1;
            trigger = true;
            stackAppear = 0;
            hamsterCounter = 1;

            function disappear () {
                document.getElementById ("hamsterSix").style.opacity = 0;
                document.getElementById ("hamsterFour").style.opacity = 0;
                document.getElementById ("hamsterThree").style.opacity = 0;
                document.getElementById ("hamsterTwo").style.opacity = 0;
                document.getElementById ("hamsterOne").style.opacity = 0;
            }
            
            function winMessage (){
                alert("You Win! Thank you for saving all HamHam friends!");
                return
            }
            setTimeout(winMessage, 1000);
            setTimeout(disappear,1000);
            clearInterval(stackInt);
           
            return
        }};

const stackInt  = setInterval(stackAppeare,8);

//Assigning Hamsters to variables
let hamOne = document.getElementById("hamsterOne");
let hamTwo = document.getElementById("hamsterTwo");
let hamThree = document.getElementById("hamsterThree");
let hamFour = document.getElementById("hamsterFour");
let hamFive = document.getElementById("hamsterFive");
let hamSix = document.getElementById ("hamsterSix");

function logHamsterCounter() {
    console.log(hamsterCounter)
};
setInterval(logHamsterCounter,1000);

//Collision Function

let hamsterCounter = 1;
let trigger = false;

function hamsterCollision() {
    let stackLeft = parseInt(getComputedStyle(hamFive).getPropertyValue("left"));
    let stackRight = stackLeft + 120;
    let stackBottom = parseInt(getComputedStyle(hamFive).getPropertyValue("bottom"));
    let stackTop = stackBottom + (80 * hamsterCounter);
    let fallBottom = parseInt(getComputedStyle(hamSix).getPropertyValue("bottom"));
    let fallLeft = parseInt(getComputedStyle(hamSix).getPropertyValue("left"));
    let fallRight = fallLeft + 120;

console.log ({fallRight,stackLeft,stackRight,fallLeft,stackBottom,stackTop,fallBottom});

    if (fallRight >= stackLeft &&
        fallLeft <= stackRight &&
        fallBottom <= stackTop
        ){
            // alert("Yay! One more hamster has been stacked.");
            hamsterCounter++;
            stackAppear++;
            trigger = true;
            document.getElementById ("hamsterSix").style.top = `5px`;
            document.getElementById ("hamsterSix").style.opacity = 0;
            return
        }};

setInterval (hamsterCollision, 1000);

//Lose Condition - Hamster Death

 function hamsterDeath(){
    let stackLeft = parseInt(getComputedStyle(hamFive).getPropertyValue("left"));
    let stackRight = stackLeft + 120;
    let stackBottom = parseInt(getComputedStyle(hamFive).getPropertyValue("bottom"));
    let stackTop = stackBottom + (80 * hamsterCounter);
    let fallBottom = parseInt(getComputedStyle(hamSix).getPropertyValue("bottom"));
    let fallLeft = parseInt(getComputedStyle(hamSix).getPropertyValue("left"));
    let fallRight = fallLeft + 120;

     if ((fallRight < stackLeft || fallLeft > stackRight) &&
         fallBottom <= stackTop
         ){
             alert(`You lose. One of HamHam's friends is dead.`);
             document.getElementById ("hamsterSix").style.top = `5px`;
             stackAppear = 0;
             hamsterCounter = 1;
             document.getElementById ("hamsterSix").style.opacity = 0;
             document.getElementById ("hamsterFour").style.opacity = 0;
             document.getElementById ("hamsterThree").style.opacity = 0;
             document.getElementById ("hamsterTwo").style.opacity = 0;
             document.getElementById ("hamsterOne").style.opacity = 0;
             trigger = true;
             return
         }}
 setInterval (hamsterDeath, 1000);

 //Falling Y Axis

function hamsterFall() {
    let time = null;
    const Ham = document.querySelector ("#hamsterSix");
    let drop = 5;
    clearInterval(time);
    time = setInterval(frame, 8);
    function frame() {
        
        if (drop == 500) {
            clearInterval(time);
            document.querySelector ("#hamsterSix").style.opacity = 0;
            document.getElementById ("hamsterSix").style.top = '10px';
            return
        } else if (trigger != true){
            drop++;
            Ham.style.top = `${drop}px`;
        } else if (trigger = true){
            drop = 5;
            Ham.style.top = `${drop}px`;
        }
        return
    }};