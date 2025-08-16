let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
for (let i = 0; i < 8; i++) {
  const char = Math.floor(Math.random()* str.length +1)
  pass+=str[char]
    }
console.log(pass);
