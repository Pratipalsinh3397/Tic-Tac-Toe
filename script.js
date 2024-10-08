const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const newGame = document.querySelector(".new");
const startNewGame = document.querySelector(".startNew");
const playAgain = document.querySelector(".playAgain");
const winner = document.querySelector(".display-winner-container");
const game = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const spanOne = document.querySelector(".winner");
const playerOneName = document.querySelector("#playerOne");
const playerTwoName = document.querySelector("#playerTwo");
const spanTwo = document.querySelector(".player-1");
const spanThree = document.querySelector(".player-2");
let  turnO = true;

const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


form.addEventListener("submit",(e) => {
    e.preventDefault();
    turnO = true;
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
    spanTwo.innerHTML = playerOneName.value;
    spanThree.innerHTML = playerTwoName.value;
    formContainer.style.display = "none";
    game.style.display = "block";
});

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(turnO){
            box.innerHTML = "O";
            box.disabled = true;
            turnO = false;
        }else{
            box.innerHTML = "X";
            box.disabled = true;
            turnO = true;
        }
        checkWinner();
    })
})  
    
const checkWinner = () => {
    for (const key of arr) {
        let checkOne = boxes[key[0]].innerHTML;
        let checkTwo = boxes[key[1]].innerHTML;
        let checkThree = boxes[key[2]].innerHTML;

        if(checkOne != "" && checkTwo != "" && checkThree != ""){
            if(checkOne === checkTwo && checkTwo === checkThree){
                if(checkOne === "O" && checkTwo === "O" && checkThree === "O"){
                    displayWinner("Winner is "+playerOneName.value+" 😎🎉");
                    break;
                }
                else{
                    displayWinner("Winner is "+playerTwoName.value+" 😎🎉");
                    break;
                }
            } 
        }
    }
    checkDrawGame();   
}    
    
const checkDrawGame = () => {
    let drawOne = boxes[0].innerHTML;
    let drawTwo = boxes[1].innerHTML;
    let drawThree = boxes[2].innerHTML;
    let drawFour = boxes[3].innerHTML;
    let drawFive = boxes[4].innerHTML;
    let drawSix = boxes[5].innerHTML;
    let drawSeven = boxes[6].innerHTML;
    let drawEight = boxes[7].innerHTML;
    let drawNine = boxes[8].innerHTML;

    if(drawOne != "" && drawTwo != "" && drawThree != "" && drawFour != "" && drawFive != "" && drawSix != "" && drawSeven != "" && drawEight != "" && drawNine != ""){
        if(
            ((drawOne != drawTwo) || (drawTwo != drawThree)) && 
            ((drawFour != drawFive) || (drawFive != drawSix)) && 
            ((drawSeven != drawEight) || (drawEight != drawNine)) && 
            ((drawOne != drawFour) || (drawFour != drawSeven)) && 
            ((drawTwo != drawFive) || (drawFive != drawEight)) && 
            ((drawThree != drawSix) || (drawSix != drawNine)) && 
            ((drawOne != drawFour) || (drawFour != drawSeven)) && 
            ((drawOne != drawFive) || (drawFive != drawNine)) && 
            ((drawThree != drawFive) || (drawFive != drawSeven))
        )
        {
            displayWinner("It's a Draw🤦‍♀️");
        }
    }
}   
    
const displayWinner = (winnername) => {
    spanOne.innerHTML = winnername;
    winner.style.display = "block";
}

reset.addEventListener("click",() => {
    turnO = true;
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
});    
    
playAgain.addEventListener("click",() => {
    turnO = true;
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
    winner.style.display = "none";
    game.style.display = "block";
    // spanTwo.innerHTML = "";
    // spanThree.innerHTML = "";
    // playerOneName.value = "";
    // playerTwoName.value = "";
    // formContainer.style.display = "block";
});     
    
newGame.addEventListener("click",() => {
    turnO = true;
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
    winner.style.display = "none";
    game.style.display = "none";
    spanTwo.innerHTML = "";
    spanThree.innerHTML = "";
    playerOneName.value = "";
    playerTwoName.value = "";
    formContainer.style.display = "block";
});     


