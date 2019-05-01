# Validador de CPF
Criação de biblioteca para validação de CPF e salvar no NPM.


**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.**
Na versão atual é capaz de verificar se um CPF é válido a partir da digitação de 9 número.

## Como instalar:

```shell

$  npm install validatorcpf-lib

```

## Como utilizar:

```node

> const writtenNumber = require("validatorcpf-lib");
> console.log(writtenNumber(11))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação da opção de gerar números válidos de CPF;

#### versão 1.0.0 (released)
- funcionalidades: verifica e valida números de CPF.


* [x] README.md com descrição do módulo, instruções de instalação.

* [x] index.js: Biblioteca deve exportar uma função e fazer uso de features de ES6 onde for apropriado.

* [x] package.json com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...).

* [x] .eslintrc com configuração para linter.

* [x] .test/index.spec.js: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementados com Mocha e NYC.

* [x] .gitignore para ignorar node_modules, nyc e outras pastas que não devem ser incluídas no controle de versões (git).
