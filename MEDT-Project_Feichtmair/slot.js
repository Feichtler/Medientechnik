let spot1 = 0; 
let spot2 = 0; 
let spot3 = 0;

let wins = 0;
 
function generate(){
spot1 = Math.round(Math.random()*2);
spot2 = Math.round(Math.random()*2);
spot3 = Math.round(Math.random()*2);



if(spot1 == 0){
document.getElementById("spot1").innerHTML = "&#9830"
}

if(spot1 == 1){
    document.getElementById("spot1").innerHTML = "&#9827"
}

if(spot1 == 2){
    document.getElementById("spot1").innerHTML = "&#9824"
}



if(spot2 == 0){
    document.getElementById("spot2").innerHTML = "&#9830"
}

if(spot2 == 1){
    document.getElementById("spot2").innerHTML = "&#9827"
}

if(spot2 == 2){
    document.getElementById("spot2").innerHTML = "&#9824"
}



if(spot3 == 0){
    document.getElementById("spot3").innerHTML = "&#9830"
}

if(spot3 == 1){
    document.getElementById("spot3").innerHTML = "&#9827"
}

if(spot3 == 2){
    document.getElementById("spot3").innerHTML = "&#9824"
}




if(spot1 == spot2 && spot2 == spot3 && spot3 == spot1){
    document.getElementById('win').innerHTML = "&#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  You win  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829"
}

if(spot1 != spot2 || spot2 != spot3 || spot3 != spot1){
    document.getElementById('win').innerHTML = ""
}

if(document.getElementById('win').innerHTML == "&#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  You win  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829"){
    document.getElementById('wins').innerHTML = `Wins: ${wins++}`
}


}
