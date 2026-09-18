// play a meow sound when you click the kitty
let snowCat = document.getElementById("snow-cat");

snowCat.onclick = () => {
    // got this line from my test site i made a few months ago
    new Audio("sfx/meow.mp3").play();
}