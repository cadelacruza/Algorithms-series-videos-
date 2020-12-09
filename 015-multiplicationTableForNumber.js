function multiTable(number) {
  let result = "";
  let operation;
  for(let i = 1; i < 10; i++){
    operation = `${i} * ${number} = ${i * number}`;
    result += operation + "\n";
  }
  result += `10 * ${number} = ${10 * number}`;
  return result;
}
