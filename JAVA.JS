
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.getElementById("btn-reset");
    let newgamebtn = document.getElementById("btn-newgame")
    let msg = document.querySelector(".msg")
    let turn0 = true;
    const winpatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    
     boxes.forEach((box) => {
        box.addEventListener("click", () => {
           // console.log("click on box")
            if (turn0 === true) {
                box.innerText = "O"
                turn0 = false
               // console.log("0")
            } else {
                box.innerText = "X"
                turn0 = true
                //console.log("x")
            }
            box.disabled = true
            checkkwinner()
        }
    )
    }
    )
    const resetGame = () =>{
        turn0 = true
        enableBoxes()
        msg.classList.add("hide") 
    };
    const disabledBoxes = () => {
        for(let box of boxes) {
            box.disabled = true
        }
    }
    const enableBoxes = () => {
        for (let box of boxes){
            box.disabled = false
            box.innerText = ""
        }
    }
    const showWinner = (winner) => {
        msg.innerText = "Congratulation,winner is " + winner
        msg.classList.remove("hide")
        disabledBoxes()
    }
    const checkkwinner = () => {
        for(let patern of winpatterns) {
        //    console.log(boxes[patern[0]], boxes[patern[1]],boxes[patern[2]])
           let posVal1 = boxes[patern[0]].innerText 
           let posVal2 = boxes[patern[1]].innerText 
           let posVal3 = boxes[patern[2]].innerText 

           if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3)
            {

                console.log("winner", posVal1)
        showWinner(posVal1)
            }
           
           }
        }
    }
    newgamebtn.addEventListener("click", resetGame)
    resetbtn.addEventListener("click", resetGame)

