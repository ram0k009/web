function spinWords(str) {
  const words = str.split(' '); 
  const result = []; 

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length >= 5) {
      const reversed = word.split('').reverse().join('');
      result.push(reversed);
    } else {
      result.push(word); 
    }
  }

  return result.join(' '); 
}

console.log(spinWords('Привет от Legacy')); 
console.log(spinWords('This is a test'));   