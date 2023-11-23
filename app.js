function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return`rgb(${r},${g},${b})`;
}

// const h1 = document.querySelector('h1');
const allSpans = document.querySelectorAll('span');


setInterval(function(){
    // h1.style.color = randomColor();
    for(let s of allSpans){
        s.style.color = randomColor();
    }
},1000)