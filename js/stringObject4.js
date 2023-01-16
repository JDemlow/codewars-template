function alienLanguage(str) {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    let lastChar = split[i].slice(-1);
    split[i] = split[i].toUpperCase().slice(0, -1) + lastChar.toLowerCase();
  }
  return split.join(" ");
}

console.log(alienLanguage("this is an example"));
