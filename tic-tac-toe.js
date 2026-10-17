//load squares
document.addEventListener("DOMContentLoaded", function(){
    let squares = document.querySelectorAll("#board div");
    
    squares.forEach(function(square){
        square.setAttribute("class","square");
    });

    
    let turns = [];
    let gameOver = false;
    let status = document.getElementById("status");

    //add X's or O's
    squares.forEach(function(square){
        square.addEventListener("click",function(){
            if (square.textContent == "" && !gameOver){

                if(turns.length == 0 || turns[turns.length-1] == "O"){
                    square.textContent = "X";
                    square.classList.add("X");
                    turns.push("X");
                }
                else{
                    square.textContent = "O"
                    square.classList.add("O");
                    turns.push("O");
                }
                checkWinner();

            }
           
        });
    });

    //hover X's and O's
    squares.forEach(function(square){
        square.addEventListener("mouseover", function(){
            if(square.textContent == ""){
                square.classList.add("hover");
            }
            else{
                square.classList.add("hover");
            }     

        });

        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        });
           
    
    });

    //check for winner and update status
    let winningCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [0,4,8], [2,4,6]];
    function checkWinner(){

        for(let combo of winningCombinations){
            let a = combo[0];
            let b = combo[1];
            let c = combo[2];

            if(squares[a].textContent != "" && squares[a].textContent == squares[b].textContent && squares[b].textContent == squares[c].textContent){
                
                let winner = squares[a].textContent;

                status.textContent = "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
                return;
            }
        }
    
        

    }

    //restart game
    let restart = document.querySelector(".btn");

    restart.addEventListener("click", function(){
        squares.forEach(function(square){
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        turns.length = 0;
        gameOver = false;
        status.textContent = "Move your mouse over a square and click to play an X or O";
        status.classList.remove("you-won");
    })
    
});


