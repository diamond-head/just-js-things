function recurseReplacer(input, wildcard, values, index = 0) {
  if (index > values.length - 1 || input.indexOf(wildcard) === -1) return input;
  const _input = input.replace(wildcard, values[index]);
  return recurseReplacer(_input, wildcard, values, index + 1);
}

const inputString = "<X> is to <X>, what <X> is to <X>";
const wildcard = "<X>";
const valuesToReplace = ["Java","Javascript", "Car", "Carpet"];
const currentIndex = 0;

const output = recurseReplacer(inputString, wildcard, valuesToReplace, currentIndex);
console.log(output);

/*
  input - <X> is to <X>, what <X> is to <X>
  output - Java is to Javascript, what car is to Carpet
*/
