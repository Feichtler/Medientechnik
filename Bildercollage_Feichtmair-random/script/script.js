let html = "";

for (let i = 1; i <= 16; i++) {

}



let counter = 1;

function show(){
   

for (let i = counter; i < counter + 3; i++) {
    if(counter <= 15){
        html += `<img src="https://picsum.photos/500?random=${i}">`
    }else{
        
        html+="ENDE"
        break;
    }
    
}

document.getElementById('grid').innerHTML = html
counter+=3;
}