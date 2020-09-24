alert("Press up: to go to up. Press down: to down. Press right: to right. Press left: to left. Have fun!!");

//GET RANDOM IMAGES
$(document).ready(function(){
    $(".pokeball").each(function() {
        $(this).css("top", Math.random() * 500 );
        $(this).css("left", Math.random() + 150);
    });
    // setTimeout(function(){
    //     var rand = Math.floor(Math.random() * 10);
    //     var randomBall = $(".pokeball:eq("+rand+")");
    //     var initialTop = randomBall.css("top");
    //     randomBall.animate({top: parseInt(initialTop.split('px')[0])+100+'px'});
    //     randomBall.animate({top: parseInt(initialTop.split('px')[0])+'px'});
    //     // randomBall.animate({bottom: "50px"});
    //     // randomBall.css("transition-property", "height");
    //     // randomBall.css("transition-duration", "2s");
    // }, 2000);
    var rand;
    var count = 0;
    window.setInterval(function(){
        rand = Math.floor(Math.random() * 10);
        // console.log("random variables:", rand);
        var randomBall = $(".pokeball:eq("+rand+")");
        // console.log(randomBall);
        var rect1 = pokemon.getBoundingClientRect();
        // console.log(rect1);
        var rect2 = randomBall[0].getBoundingClientRect();
        // console.log(rect2);

        var overlap = !(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom);
        if(overlap){
            count = count + 1;
            randomBall.remove();
            $('#scoreBoard').html(count);
            console.log(count);
        }

        $(' .pokeball').attr('data-num',0);
        randomBall.attr('data-num',1);
        // randomBall.attr('canDelete',"true");
        var initialTop = randomBall.css("top");
        randomBall.animate({top: parseInt(initialTop.split('px')[0])+(-140)+'px'}, 'slow');
        randomBall.animate({top: parseInt(initialTop.split('px')[0])+'px'}, 'slow');
    }, 3000);

    
});



///FOR POKEMON TO GO UP, DOWN, LEFT, RIGHT
var pokemon = document.getElementById("pokemon");
var area = document.getElementById('validArea');
var {right, top , bottom , left, height, width} = area.getBoundingClientRect()

pokemon.style.top = pokemon.offsetTop + "px";
// console.log(pokemon.style.top);
pokemon.style.left = pokemon.offsetLeft + "px";
// console.log(pokemon.style.left);

var pokemonHeight = pokemon.offsetHeight;
// console.log(pokemonHeight);

var pokemonWidth = pokemon.offsetWidth;
// console.log(pokemonWidth);

window.onresize = function(e){
    pokemonHeight = pokemon.offsetHeight;
    pokemonWidth = pokemon.offsetWidth;
};

function setValue(value){
    return value + "px";
}

function keyCode(key){

    var top = parseInt(pokemon.style.top);
    var left = parseInt(pokemon.style.left);
    // var rect1;
    // var rect2;
    // var count = 0;

    //UP is pressed
    if(key === 38){
        if(top > 5){
            pokemon.style.top = setValue(top - 5);
        }
    }

    //LEFT is pressed
    else if (key === 37) {
        if (left > 5) {
            pokemon.style.left = setValue(left - 5);
            // rect1 = pokemon.getBoundingClientRect();
            // // console.log(pokemon);
            // // rand = rand + 1;
            // var poke = document.getElementsByClassName(".pokeball:eq("+rand+")");
            // // var rect = document.getBoundingClientRect(".pokeball:eq("+rand+")")[0].parents();
            // console.log(poke);
            // rect2 = rect.getBoundingClientRect();   
        }
    }

    //DOWN is pressed
    else if (key === 40) {
        if (top < (window.innerHeight - pokemonHeight) - 5) {
            pokemon.style.top = setValue(top + 5);
        }
    }

    //RIGHT is pressed
    else if (key === 39) {
        if (left < (window.innerWidth - pokemonWidth) - 5) {
            pokemon.style.left = setValue(left + 5);
            // rect1 = pokemon.getBoundingClientRect();
            // console.log(rand);
            // var rect = $("#pokeball" + rand);
            // rect2 = rect.getBoundingClientRect();
            // var overlap = !(rect1.right < rect2.left || 
            //     rect1.left > rect2.right || 
            //     rect1.bottom < rect2.top || 
            //     rect1.top > rect2.bottom);      
            // if(overlap){
            //     count = count + 1;
            //     console.log(count);
            // }
        }
    }
};

window.addEventListener("keydown", function(event){
    keyCode(event.keyCode);
});