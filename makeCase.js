
const textTransform = { // textTransform object deals with transforming strings re-using its own methods where possible
  bigVowels: (input, bool) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelString = '';
    for (let i = 0; i < input.length; i++) {
      for (let v = 0; v < vowels.length; v++) {
        if (vowels[v] === input[i]) {
          vowelString += bool ? input[i].toUpperCase() : input[i]; // if bool is true it makes vowels uppercase
          i++;
        }
      }
      vowelString += bool ? input[i] : input[i].toUpperCase(); // if bool is false is makes consonants uppercase
    }
    return vowelString;
  },
  replaceSpaces: (str, x) => {
    let result = "";
    for (const char of str) {
      result += char === " " ? x : char;
    }
    return result;
  },
  camel: (input) => {
    let camelString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        camelString += input[i + 1].toUpperCase();
        i++;
      } else {
        camelString += input[i];
      }
    }
    return camelString;
  },
  pascal: (string) => {
    let titled = textTransform.title(string);
    let pascaled = textTransform.replaceSpaces(titled, "");
    return pascaled;
  },
  snake: string => textTransform.replaceSpaces(string, "_"),
  kebab: string => textTransform.replaceSpaces(string, "-"),
  title: (str) => {
    let titleString = '';
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || str[i - 1] === ' ') {
        titleString += str[i].toUpperCase();
      } else {
        titleString += str[i];
      }
    }
    return titleString;
  },
  vowel: string => textTransform.bigVowels(string, true),
  consonant: (string) => textTransform.bigVowels(string, false),
  upper: string => string.toUpperCase(),
  lower: string => string.toLowerCase(),
 
};

const makeCase = (string, cases) => { // makeCase only deals with handling cases logic
  const caseArray = Array.isArray(cases) ? cases : false;
  let output;
  if (caseArray) {
    let newInput;
    let num = 0;
    while (num < cases.length) {
      output = num ? textTransform[cases[num]](newInput) : textTransform[cases[num]](string);
      newInput = output;
      num++;
    }
  } else {
    output = textTransform[cases](string);
  }
  return output;
};

//Test Code
// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
// console.log(makeCase("this is a string", ["camel", "vowel", "consonant", "lower"]));
// console.log(makeCase("this is a string", ["title", "kebab"]));