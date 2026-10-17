//load squares
document.addEventListener("DOMContentLoaded", function(){
    let squares = document.querySelectorAll("#board div");
    
    squares.forEach(function(square){
        square.setAttribute("class","square");
    });

    
    let turns = [];
    
    //add X's or O's
    squares.forEach(function(square){
        square.addEventListener("click",function(){
            if (square.textContent == ""){

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
            }

        });
    });
});


