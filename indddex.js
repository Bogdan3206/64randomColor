let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];

function draw (){
    var out = '';
    // let m = 0;
    for( let i = 0;i<chess.length;i++){
        let arr = chess[i];
        for( let k = 0; k < arr.length; k++){
            let alex = randColor();
            out += `<div class ='chess-block' style='background: ${alex}'></div>`;
            
        }
        
    }
    document.querySelector('.setk').innerHTML = out;
}
function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}


// const x = getR();
// const y = getR();
// const z = getR();
// function getR() {
//   return Math.round(Math.random() * 255);
// }
// out += "<div style =color:rgb(";
// out += x + ",";
// out += y + ",";
// out += z;
// out += ");/div>";


draw();