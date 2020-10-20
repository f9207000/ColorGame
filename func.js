var br = document.getElementById('buttonRight');
var bm = document.getElementById('buttonMiddle');
var bl = document.getElementById('buttonLeft');
var resetButton = document.getElementById('new');

var setColor, brColor, bmColor, blColor;

br.addEventListener('click', function(e){
    reaction(brColor, br);
})
bm.addEventListener('click', function(e){
    reaction(bmColor, bm);
})
bl.addEventListener('click', function(e){
    reaction(blColor, bl);
})
resetButton.addEventListener('click', function(e){
    resetPage();
})
window.onload = function() {
    if(isMobile())
        document.documentElement().style.fontSize = '8px';
    resetPage();
}
function isMobile() {
    try{ 
        document.createEvent("TouchEvent"); return true;
    } catch(e){ 
        return false;
    }
}
function resetPage(){
    setColor = changeColor(randomRGB());
    document.getElementById('header').textContent = setColor;
    [brColor, bmColor, blColor] = setButtonColor(setColor);
    br.style.backgroundColor = brColor;
    bm.style.backgroundColor = bmColor;
    bl.style.backgroundColor = blColor;
    document.getElementById('note').textContent = 'WHAT\'S THE COLOR?'
    document.body.style.backgroundColor = 'black';
}
function reaction(color, button){
    if(color == setColor){
        document.getElementById('note').textContent = 'CORRECT!';
        br.style.backgroundColor = 'white';
        bm.style.backgroundColor = 'white';
        bl.style.backgroundColor = 'white';
        document.body.style.backgroundColor = setColor;
    } else{
        document.getElementById('note').textContent = 'TRY AGAIN';
        button.style.backgroundColor = 'black';
    }
}
function setButtonColor(Color){
    var array = [Color, changeColor(randomRGB()), changeColor(randomRGB())];
    shuffle(array);
    return array;
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function changeColor([r, g, b]){
    return 'RGB(' + [r, g, b].join(', ') + ')';
}
function randomRGB(){
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    return [r, g, b];
}
function random(min, max){
    return Math.floor(Math.random() * max) + min;
}
