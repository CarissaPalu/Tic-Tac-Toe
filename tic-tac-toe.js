var gridItems= document.querySelector('.grid-container');
gridItems.addEventListener('click', function (event){ 
    event.target.textContent = 'x';
})



var resetBtn= document.querySelector('.grid--reset');
resetBtn.addEventListener('click', function (event){
    event.target.textContent = '';
})


// var player=document.querySelector(‘.player1’,’.player2');

// player.onclick = function () 

// }


// var griditem=document.querySelectorAll('.grid-item');


// for(var i=0; i<2; i++);
// if (player1==true){
//   console.log("player 1 selected");
// }
// else(player2==true{
//   console.log("player 2 selected");
// }


// griditem.onlick = function () {
//   const img1 = 'https://i.gifer.com/1KJA.mp4'
//   const img2 = ''
//   document.body.style.image = img;
// }

// function .seaurchin()
// {
// griditem.backgroundImage = 'seaurchin'
// }
// griditem.addEventListener('click', .seaurchin );

// function .seaturtle()
// {
//   griditem.backgroundImage = 'seaturtle'
// }
// griditem.addEventListener('click', .seaturtle)

// HTMLButtonElement.onclick('.seaturtle')

// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     }
//     this.stop = function(){
//       this.sound.pause();
//     }
//   }

//   function resetgridContainer() {
//     // gridcontainer.clear();
//     griditem.x += 1;
//     griditem.update();
//   }

// }
