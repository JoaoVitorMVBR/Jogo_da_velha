function verificaVezJogador(jogadasPlayer1, jogadasPlayer2){
    if(jogadasPlayer1 === jogadasPlayer2){
        return x;
    }else{
        return o;
    }
}

function verificaVencedor(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child === 'x' && b2child === 'x' && b3child ==='x'){
            atualizaPlacar('x');
        }else if(b1child === 'o' && b2child === 'o' && b3child ==='o'){
            atualizaPlacar('o');
        }
    }
    
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child === 'x' && b5child === 'x' && b6child ==='x'){
            atualizaPlacar('x');
        }else if(b4child === 'o' && b5child === 'o' && b6child ==='o'){
            atualizaPlacar('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
            let b7child = b7.childNodes[0].className;
            let b8child = b8.childNodes[0].className;
            let b9child = b9.childNodes[0].className;

            if(b7child === 'x' && b8child === 'x' && b9child ==='x'){
                atualizaPlacar('x');
            }else if(b7child === 'o' && b8child === 'o' && b9child ==='o'){
                atualizaPlacar('o');
            }
        }
    
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child === 'x' && b4child === 'x' && b7child ==='x'){
            atualizaPlacar('x');
        }else if(b1child === 'o' && b4child === 'o' && b7child ==='o'){
            atualizaPlacar('o');
        }
    }
    
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child === 'x' && b5child === 'x' && b8child ==='x'){
            atualizaPlacar('x');
        }else if(b2child === 'o' && b5child === 'o' && b8child ==='o'){
            atualizaPlacar('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child === 'x' && b6child === 'x' && b9child ==='x'){
            atualizaPlacar('x');
        }else if(b3child === 'o' && b6child === 'o' && b9child ==='o'){
            atualizaPlacar('o');
        }
    }

    //diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child === 'x' && b5child === 'x' && b9child ==='x'){
            atualizaPlacar('x');
        }else if(b1child === 'o' && b5child === 'o' && b9child ==='o'){
            atualizaPlacar('o');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child === 'x' && b5child === 'x' && b7child ==='x'){
            atualizaPlacar('x');
        }else if(b3child === 'o' && b5child === 'o' && b7child ==='o'){
            atualizaPlacar('o');
        }
    }

    let counter = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] !== undefined){
            counter++;
        }
    }

    if(counter === 9){
        atualizaPlacar("Deu velha");
    }
}


function atualizaPlacar(resultado){
    let msg;
    let scoreBoardX = document.querySelector("#scoreboard-1");   
    let scoreBoardO = document.querySelector("#scoreboard-2");
    if(resultado === 'x'){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O jogador x venceu!'
    }else if(resultado === 'o'){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'O jogador o venceu!'
    }else{
        msg = 'Deu velha!'
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(() => {
        messageContainer.classList.add("hide");
    }, 3000);

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPlay(){
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filled = 0;
    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random()*5);
        //preenche se estiver vazio
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }else{
                filled++;
            }
        }
    }
    if(counter == 0 && filled < 9){
        computerPlay();
    }
}

// variaveis
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//console.log(button);

let jogadasPlayer1 = 0;
let jogadasPlayer2 = 0;

//adicionando evento de clique aos boxes
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        
        let jogadorDaVez = verificaVezJogador(jogadasPlayer1, jogadasPlayer2);
            
        //verfica se foi adicionado um filho em algum dos boxes
        if(this.childNodes.length === 0){

            if(jogadasPlayer1 === jogadasPlayer2){
                jogadasPlayer1++;
                if(secondPlayer === 'ai-player'){
                    computerPlay();
                    jogadasPlayer2++;
                }
            }else{
                jogadasPlayer2++;
            }

            let cloneJogadorDaVez = jogadorDaVez.cloneNode(true);
            this.appendChild(cloneJogadorDaVez);

            verificaVencedor();
        }
    });
}

//
for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => {
        secondPlayer = button[i].getAttribute("id");
        for(let j = 0; j < button.length; j++){
            button[j].style.display = "none"
        }
        setTimeout(() => {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}