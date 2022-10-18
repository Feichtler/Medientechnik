let tag
let btn = document.getElementById('btn')
btn.addEventListener('click', getUname)
tag = document.getElementById('player').value;
console.log(tag);
localStorage(setUname.innerHTML += `Name: ${tag}`)
let setUname = document.getElementById(`setUname`)
console.log(tag);