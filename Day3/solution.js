const fs = require('fs');
const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\r\n').filter(x => x)

const oneCount = new Array(lines[0].length).fill('');
lines.forEach(line => {
		for (let i = 0; i < lines[0].length; i++) {
		if (line[i] === '1') oneCount[i]++;
	}
})
  
const gamma = oneCount.map(o => o > lines.length / 2 ? '1' : '0').join('');
const epsilon = gamma.split('').map(bit => 1 - bit).join('');

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))



