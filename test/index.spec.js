const chai = require('chai');
const expect = chai.expect;
const validatorCPF = require('../index');

describe('função validatorCPF', () => {
  it('10361744847 não tem o segundo dígito válido', () => {
    expect(validatorCPF.validatorCPF('10361744847')).to.equal(false);
  });

  it('10361744856 não tem o primeiro dígito válido', () => {
    expect(validatorCPF.validatorCPF('10361744856')).to.equal(false);
  });

  it('1036174485 falta 1 número', () => {
    expect(validatorCPF.validatorCPF('1036174485')).to.equal(false);
  });

  it('103617448466 tem 1 número a mais', () => {
    expect(validatorCPF.validatorCPF('103617448466')).to.equal(false);
  });

  it('103.617.448-46 número de CPF é válido', () => {
    expect(validatorCPF.validatorCPF('103.617.448-46')).to.equal(true);
  });

  it('10361744846 CPF em formato string é válido', () => {
    expect(validatorCPF.validatorCPF('10361744846')).to.equal(true);
  });

  it('10361744846 número de CPF é válido', () => {
    expect(validatorCPF.validatorCPF(10361744846)).to.equal(true);
  });

});


