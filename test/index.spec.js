const chai = require('chai');
const expect = chai.expect;
const validatorCPF = require('../index');

describe("validatorCPF", () => {
    it("cpf valido", () =>{
        expect(validatorCPF.validatorCPF(23423423423)).to.equal(false);
    });
})