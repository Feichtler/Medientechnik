


/* INIT */
let sprite = document.getElementById("sprite");
let spriteImg = document.getElementById("spriteImg");
let output = document.getElementById("output");
let surface = document.getElementById("surface");

let surfaceWidth = surface.clientWidth;
let surfaceHeight = surface.clientHeight;
let spawnCoin = document.getElementById('spawnCoin')
let posXCoin
let posYCoin
collect = new Audio('./coinsound.wav');
let leftArrow = false;
let rightArrow = false;
let upArrow = false;
let downArrow = false;

let name = sessionStorage.getItem('tag') 

if (sprite) {
    sprite.style.left = "100px"; // starting position
    sprite.style.top = "100px"; // starting position
}
if (spriteImg) {
    spriteImg.style.right = "350px"; // starting animation
}

let spriteImgNumber = 0; // current animation part of image

/* EVENT LISTENER */
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;


/* CHECK PRESSED KEY */
function keyListenerDown(e) {
    //console.log(e);
    //console.log(e.keyCode);
    if (!e) {
        e = window.event; //Internet Explorer
    }
    if (e.keyCode == 37) { // leftArrow
        leftArrow = true;
    }
    if (e.keyCode == 38) { //upArrow
        upArrow = true;
    }
    if (e.keyCode == 39) { // rightArrow
        rightArrow = true;
    }
    if (e.keyCode == 40) { // downArrow
        downArrow = true;
    }
}
function keyListenerUp(e) {
    //console.log(e);
    //console.log(e.keyCode);
    if (!e) {
        e = window.event; //Internet Explorer
    }
    if (e.keyCode == 37) { // leftArrow
        leftArrow = false;
    }
    if (e.keyCode == 38) { //upArrow
        upArrow = false;
    }
    if (e.keyCode == 39) { // rightArrow
        rightArrow = false;
    }
    if (e.keyCode == 40) { // downArrow
        downArrow = false;
    }
}


/* GAME LOOP */
function gameLoop() {

    if (leftArrow) {
        moveSprite(-10, 0);
        animateCharacter();
    }
    if (rightArrow) {
        moveSprite(10, 0)
        animateCharacter();
    }
    if (upArrow) {
        moveSprite(0, -10);
        animateCharacter();
    }
    if (downArrow) {
        moveSprite(0, 10);
        animateCharacter();
    }

    setTimeout(gameLoop, 35); // async recursion


}
gameLoop();
let numb = 0;


/* MOVE SPRITE */
function moveSprite(dx, dy) {
    // current position
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);

    // calc new position
    x += dx;
    y += dy;




    if (x <= surfaceWidth - 40 && x >= 0 && y <= surfaceHeight - 25 && y >= 0) {
        // assign new position
        sprite.style.left = x + "px";
        sprite.style.top = y + "px";
    }

    if (x + 20 < posXCoin || posXCoin + 20 < x && y + 20 < posYCoin || posYCoin + 20 < y) {
    } else {
        numb++;
        collect.play()
        document.getElementById("counter").innerHTML = "Coin-Counter: " + numb
        generateCoin()

    }
    if (numb >= 10) {
        document.getElementById("streak").innerHTML = "STREAK!"
    }
}
generateCoin()
function generateCoin() {
    posXCoin = Math.floor(Math.random() * surfaceWidth - 40)
    posYCoin = Math.floor(Math.random() * surfaceHeight - 40)

    if (spawnCoin) {
        spawnCoin.style.top = posYCoin + "px"
        spawnCoin.style.left = posXCoin + "px"
        spawnCoin.innerHTML = `<img id="coin" src="./coin.png" alt="">`
    }


}

/* ANIMATE CHARACTER */
function animateCharacter() {


    if (spriteImgNumber < 3) { // new img position
        spriteImgNumber++;
        let x = parseInt(spriteImg.style.right);
        x += 42; // ANPASSEN!
        if (spriteImg) {
            spriteImg.style.right = x + "px";
        }

    }
    else { // cycle loop finished: back to start animation
        if (spriteImg) {
         spriteImg.style.right = "0px";
        }
   
        spriteImgNumber = 0;
    }

    if (numb >= 15) {
        document.getElementById('won').innerHTML += `<p>Congratulations you won! If you are ready for the next game, please press the button!</p><br><center><button><a href="startscreen.html">End game!</a></button></center>`
        sprite = 0;
    }

}
