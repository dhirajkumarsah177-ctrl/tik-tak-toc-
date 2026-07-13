let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#restart");
let new_btn = document.querySelector("#newbtn");
let msgcontaniner = document.querySelector(".msg-container.hide");
let msg = document.querySelector("#msg");
let btn1 = document.querySelector("#btn");
let body = document.querySelector("body");
let current_mode="light";


let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO= true;
    enablebox();
    msgcontaniner.classList.add("hide");
}



btn1.addEventListener("click", () => {
    if (current_mode === "light") {
        current_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        current_mode = "light";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(current_mode);
});


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkwinner();
    });
});

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation,Winnner is ${winner}`;
    msgcontaniner.classList.remove("hide");
    disablebox();
}
const checkwinner = () => {
    for(let pattern of winpatterns) {
        let postionvalue1 =  boxes[pattern[0]].innerText;
        let postionvalue2 =  boxes[pattern[1]].innerText;
        let postionvalue3 =  boxes[pattern[2]].innerText;

        if(postionvalue1 != "" &&
         postionvalue2 != ""&&
         postionvalue3 != "" ) {
            if(postionvalue1 === postionvalue2 &&
                 postionvalue2 === postionvalue3)  {
                console.log( "winner",postionvalue1);
                showWinner(postionvalue1);
            }
        }
    }
};


new_btn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);