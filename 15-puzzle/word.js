var str = document.getElementById("word1").innerHTML;
var word2 = document.getElementById("word2");

var game = {};
game.word = str.split("");
game.btns = [];

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

var swap = function (event) {
    for (var i = 0; i < game.word.length; i++){
        
    }
}

game.copyBtnText = function(){
    for (var i = 0; i < game.word.length; i++){
        this.btns[i].innerHTML = this.word[i];
    }
}

var rshift = function (event) {
    var s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
}

var lshift = function (event) {
    var s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
}