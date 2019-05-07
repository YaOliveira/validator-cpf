function digit(array, multiplier) {
    const fullCPF = array.reduce((result, num) => result + (num * multiplier--), 0) % 11;
    return fullCPF < 2 ? 0 : 11 - fullCPF;
}

function validatorCPF(string) {
    let arrCPFNumber = string
        .toString()
        .replace(/\D/g, '')
        .split('')
        .map(Number);
    const multOne = 10;
    const multTwo = 11;

    if (arrCPFNumber.length === 11) {
        let arrCPF = arrCPFNumber.splice(0, 9);
        let digitOne = digit(arrCPF, multOne);
        arrCPF.push(digitOne);
        let digitTwo = digit(arrCPF, multTwo);
        return digitOne === arrCPFNumber[0] && digitTwo === arrCPFNumber[1] ? true : false;
    } else {
        return false;
    }
}

// const isRepeatingChars = ( str ) => 
//   str.split( ‘’ ).every( ( elem ) => elem === str[ 0 ] )

// if(cpf == "11111111111" || cpf == "22222222222" || cpf == 
//     "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == 
//     "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == 
//     "99999999999" || cpf == "00000000000" ){ 

//Palomita: como não precisar colocar aspas no console.log 
// e como fazer cpf false para digitos iguais
//e como não precisar usar exports.validatorCPF 2x

console.log(validatorCPF('21973151880'));
console.log(validatorCPF('99999999999'));

module.exports.validatorCPF = validatorCPF;




// function validatorCPF(cpfNum) {
//     if (cpfNum === 23423423423) {
//         return false;
//     }
// }



// 2 + 2
// let cpf = 2100 % 11 % 10;
// let cpf2 = 2510 % 11 % 10;

// console.log(cpf);
// console.log(cpf2);

