const fs = require('fs');
const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\r\n').filter(x => x);

let horizontalPos = 0;
let depth = 0;

for(let line of lines){
    let [command, value] = line.split(' ');
    if (command === 'up') {
		depth -= Number(value);
	} else if (command === 'down') {
		depth += Number(value);
	} else if (command === 'forward') {
		horizontalPos += Number(value);
	} else {
		throw new Error(`Unknown command: ${command}`);
	}
}

console.log(horizontalPos * depth);

