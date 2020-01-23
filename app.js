const subButtonArr = document.getElementsByClassName('button');

const checked1 = document.getElementById('player1');
const checked2 = document.getElementById('player2');

for(let i = 0; i < subButtonArr.length; i++){
    subButtonArr[i].addEventListener("click",()=>{
        if(subButtonArr[i].dataset.value == "1"){
            alert(`Player 1`)
            
        }else{
            alert(`Player 2`)
        }
        
    }); 
}
checked1.addEventListener("click", ()=>{
    if(checked1.dataset.value == "1"){
        checked1.style.backgroundColor = "blue"
        checked1.dataset.value = "0"
        checked2.style.backgroundColor = "white"
    }
});
checked2.addEventListener("click", ()=>{
    if(checked2.dataset.value == "2"){
        checked2.style.backgroundColor = "blue"
        checked2.dataset.value = "0"
        checked1.style.backgroundColor = "white"
    }
});
// console.log(players.value)
// console.log(checked1.value);
// console.log(checked2.value);
// checked2.addEventListener('change',()=>{
//     if(this.option1){
//         alert(`Player 2`)
//     }else{
//         alert(`Player 1`)
//     }
// }); 

// button.addEventListener('click', ()=>{
//     if(players == 'Player 1'){
//         alert('hey player 1')
//     }else{
//         alert('hey player 2')
//     }
// });

// let playerOneTurn = true

// if(playerOneTurn){
//     console.log(`Player one's turn`)
//     playerOneTurn = false

// }else{
//     console.log(`Player two's turn`)
//     playerOneTurn = true
// }