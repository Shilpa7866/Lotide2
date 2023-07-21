const assertEqual = function(actual, expected) {
  if (actual === expected) {
        console.log(" ✅✅✅ Assertion Passed: [+actual+] === [+expected]+");
    }
    else if (actual !== expected) {
        console.log(" 🛑🛑🛑 Assertion Failed: [+actual+] !== [+expected+]");
    }

};

const countLetters = function(str) {
    let count = 0;
    let newString = "";
    for (let i = 0; i < str.length; i++) {
  
        if (str[i] === ' ') continue;
  
        let index = str.indexOf(str[i], 0);
  
        while (index != -1) {
            count++;
            index = str.indexOf(str[i], index + 1);
        }
  
        if (newString.indexOf(str[i]) === -1) {
            newString += str[i];
            console.log(str[i] + ": " + count);
  
        }
        count = 0;
    }
  
  };
  
  countLetters('LHL');
  countLetters('wooo');