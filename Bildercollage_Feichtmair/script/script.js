let html = "";

for (let i = 1; i <= 16; i++) {
    html += `<img src=./img/city${i}.jpg>`
}


document.getElementById('grid').innerHTML = html
