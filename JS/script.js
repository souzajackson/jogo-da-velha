let numberOfIconsOnTheBoarder = 0
var icon = document.getElementsByClassName('icon')
var square = document.getElementsByClassName('box')
function putIcon(n){
    var OnClickSong = new Audio()
    OnClickSong.src = '../sons/Efeito-Sonoro-Clique.mp3'
    OnClickSong.play()
    if(numberOfIconsOnTheBoarder % 2 == 0){
        icon[n].innerText = 'X'
        icon[n].value = 0
    }else{
        icon[n].innerText = 'O'
        icon[n].value = 1
    }
    square[n].onclick = "checkWinner()"
    numberOfIconsOnTheBoarder++
}
function winnerDisplay(square1, square2, square3, winner){
    var WinnerSong = new Audio()
    WinnerSong.src = '../sons/Efeito-Sonoro-Vitória.mp3'
    WinnerSong.play()
    var result = document.createElement(result)
    result.innerHTML = `<h1>O jogador usando o ícone ${winner} Venceu!</h1>
    <p onclick="window.location.reload()">Jogar Novamente</p>`
    for(var c = 8; c >= 0; c--){
        square[c].onclick = ""
    }
    icon[square1].style.color = "#FFCD39"
    icon[square2].style.color = "#FFCD39"
    icon[square3].style.color = "#FFCD39"
    body.appendChild(result)
}
function checkWinner(){
    var draw = document.createElement('draw')
    draw.innerHTML = `<h1>O jogo deu Empate!</h1>
    <p onclick="window.location.reload()">Jogar Novamente</p>`
    if((icon[0].value + icon[1].value + icon[2].value) % 3 == 0){
        winnerDisplay(0, 1, 2, icon[0].innerText)
    }else if((icon[0].value + icon[3].value + icon[6].value) % 3 == 0){
        winnerDisplay(0, 3, 6, icon[0].innerText)
    }else if((icon[0].value + icon[4].value + icon[8].value) % 3 == 0){
        winnerDisplay(0, 4, 8, icon[0].innerText)
    }else if((icon[2].value + icon[5].value + icon[8].value) % 3 == 0){
        winnerDisplay(2, 5, 8, icon[2].innerText)
    }else if((icon[2].value + icon[4].value + icon[6].value) % 3 == 0){
        winnerDisplay(2, 4, 6, icon[2].innerText)
    }else if((icon[6].value + icon[7].value + icon[8].value) % 3 == 0){
        winnerDisplay(6, 7, 8, icon[6].innerText)
    }else if((icon[3].value + icon[4].value + icon[5].value) % 3 == 0){
        winnerDisplay(3, 4, 5, icon[3].innerText)
    }else if((icon[1].value + icon[4].value + icon[7].value) % 3 == 0){
        winnerDisplay(1, 4, 7, icon[1].innerText)
    }else if(numberOfIconsOnTheBoarder == 9){
        body.appendChild(draw)
    }
}