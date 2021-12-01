const fs = require('fs');
const lines = fs.readFileSync('input1.txt', {encoding: 'utf-8'}).split('\n').map(x => parseInt(x));

let measureCount = 0;

for(let i = 0; i<=lines.length; i++){
    if(lines[i] < lines[i+1]){
        measureCount++;
    } 
}
console.log(measureCount);

//
let increasedCount = 0;

for(let i=2 ; i< lines.length; i++){
    if((lines[i-1] + lines[i] + lines[i+2]) < (lines[i] + lines[i+2] + lines[i+2])){
        increasedCount++
    }
}

console.log(increasedCount);

