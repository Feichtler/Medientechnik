
function submit(){
    let a = document.getElementById('guess').value
    console.log(a)

    document.getElementById('guessednumber').innerHTML = a

}


function generate(){
let generator1 = Math.round(Math.random()*2);
if(generator1 == 1){
    document.getElementById('generated').style.color = 'red'
    generator1 = Math.round(Math.random()*2);
}else{
    document.getElementById('generated').style.color = 'black'
    generator1 = Math.round(Math.random()*2);  
}

let generator = Math.round(Math.random()*36);
document.getElementById('generated').innerHTML=generator

if(document.getElementById('guess').value == generator){
console.log('win')
document.getElementById('win').innerHTML = "&#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  You win  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824  &#9829  &#9830  &#9827  &#9824 "
}

if(document.getElementById('guess').value != generator){
    document.getElementById('win').innerHTML = ""
}

let b = document.getElementById('img')
b.style.animationDuration = '2s'
b.style.animate.transform = 'rotate(360deg)'
}