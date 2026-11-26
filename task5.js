function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const word = strs[i];

    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      
      if (prefix.length < 2) {
        return "";
      }
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); 
console.log(longestCommonPrefix(['собака', 'гоночная машина', 'машина'])); 