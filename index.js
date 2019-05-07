function digit(array, multiplier) {
    const algorithm = array.reduce((result, num) => result + (num * multiplier--), 0) % 11;
    return algorithm < 2 ? 0 : 11 - algorithm;
}

function validatorCPF(string) {
    
    let arrCPFNumber = string
        .toString()
        .replace(/\D/g, '')
        .split('')
        .map(Number);
        
    const isEqualNumber = arrCPFNumber.every((elem) => elem === arrCPFNumber[0]);
    const multOne = 10;
    const multTwo = 11;

    if (arrCPFNumber.length === 11 && isEqualNumber !== true) {
        let arrCPF = arrCPFNumber.splice(0, 9);
        let digitOne = digit(arrCPF, multOne);
        arrCPF.push(digitOne);
        let digitTwo = digit(arrCPF, multTwo);
        return digitOne === arrCPFNumber[0] && digitTwo === arrCPFNumber[1] ? true : false;
    } else {
        return false;
    }
}

module.exports.validatorCPF = validatorCPF;


