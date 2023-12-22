let divo = document.querySelectorAll(".box-lite div");
let pro = prompt(" \"Hello Sir\" \n Do You Want X or O ? ").toUpperCase().trim();
let turn = pro;
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")
let div5 = document.querySelector(".div5")
let div6 = document.querySelector(".div6")
let div7 = document.querySelector(".div7")
let div8 = document.querySelector(".div8")
let div9 = document.querySelector(".div9")
divo.forEach(
    function(ele){
        ele.onclick = function(){
            if (turn === "X" && ele.innerHTML == ''){
                    ele.innerHTML = turn;
                    turn = "O"
                    if(div1.innerHTML == "X" &&
                        div2.innerHTML == "X" &&
                        div3.innerHTML == "X" || 
                        div4.innerHTML == "X" &&
                        div5.innerHTML == "X" &&
                        div6.innerHTML == "X" || 
                        div7.innerHTML == "X" &&
                        div8.innerHTML == "X" &&
                        div9.innerHTML == "X" ||
                        div1.innerHTML == "X" &&
                        div4.innerHTML == "X" &&
                        div7.innerHTML == "X" ||
                        div2.innerHTML == "X" &&
                        div5.innerHTML == "X" &&
                        div8.innerHTML == "X" ||
                        div3.innerHTML == "X" &&
                        div6.innerHTML == "X" &&
                        div9.innerHTML == "X" ||
                        div1.innerHTML == "X" &&
                        div5.innerHTML == "X" &&
                        div9.innerHTML == "X" ||
                        div3.innerHTML == "X" &&
                        div5.innerHTML == "X" &&
                        div7.innerHTML == "X" 
                    ){
                    setTimeout(msg,200)
                    setTimeout(reload, 2000);                    }
                }
            else if (turn === "O" && ele.innerHTML == ''){
                    ele.innerHTML = turn;
                    turn = "X"
                    if(div1.innerHTML == "X" &&
                    div2.innerHTML == "O" &&
                    div3.innerHTML == "O" || 
                    div4.innerHTML == "O" &&
                    div5.innerHTML == "O" &&
                    div6.innerHTML == "O" || 
                    div7.innerHTML == "O" &&
                    div8.innerHTML == "O" &&
                    div9.innerHTML == "O" ||
                    div1.innerHTML == "O" &&
                    div4.innerHTML == "O" &&
                    div7.innerHTML == "O" ||
                    div2.innerHTML == "O" &&
                    div5.innerHTML == "O" &&
                    div8.innerHTML == "O" ||
                    div3.innerHTML == "O" &&
                    div6.innerHTML == "O" &&
                    div9.innerHTML == "O" ||
                    div1.innerHTML == "O" &&
                    div5.innerHTML == "O" &&
                    div9.innerHTML == "O" ||
                    div3.innerHTML == "O" &&
                    div5.innerHTML == "O" &&
                    div7.innerHTML == "O" 
                ){
                    setTimeout(msg,200)
                    setTimeout(reload, 2000);
                }
            }
        }
    }
)


let text_O_X = "X O GAME"

let index = 1;

function result(){
    document.querySelector(".x_o").innerHTML = text_O_X.slice(0, index) + "|";
    index++
    if(index < text_O_X.length){
        clearInterval(wrtext)
    }
}
let wrtext = setInterval(result,100)

setInterval(result,100)

function reload(){
    window.location.reload()
}
function msg(){
    alert(`Game Over -> ${pro} is win `)
}