// function digit(array, multiplier) {
//   const mult = array.map((num) => num * multiplier);
//   const soma = mult.reduce((soma, num) => soma = soma + num);
//   if ((soma % 11) < 2) {
//     return 0;
//   } else {
//     return 11 - (soma % 11);
//   }
// }
function digit(arr, multiplier) {
  const algorithm = arr.reduce((result, num) => result + (num * multiplier--), 0) % 11;
  return algorithm < 2 ? 0 : 11 - algorithm;
}

function validatorCPF(cpf) {
  let arrCPFNumber = cpf
    .toString()
    .replace(/\D/g, '')
    .split('')
    .map(Number);

  const isEqualNumber = arrCPFNumber.every((elem) => elem === arrCPFNumber[0]);

  if (arrCPFNumber.length === 11 && !isEqualNumber) {
    let arrCPF = arrCPFNumber.splice(0, 9);
    let digitOne = digit(arrCPF, 10);
    arrCPF.push(digitOne);
    let digitTwo = digit(arrCPF, 11);
    console.log(`calc: ${digitOne} real ${arrCPFNumber[0]}`);
    return digitOne === arrCPFNumber[0] && digitTwo === arrCPFNumber[1];
  } else {
    return false;
  }
}
module.exports.validatorCPF = validatorCPF;