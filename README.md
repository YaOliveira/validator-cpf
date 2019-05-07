# VALIDADOR DE CPF v.1.0.0

**Esta biblioteca se destina à validação de CPFs válidos ou inválidos.**  
Na versão atual é capaz validar strings retornando `true` para CPF válido e `false` para CPF inválido.

## Como instalar:

```shell

$  npm install ygovalidatorcpf-lib

```

## Como utilizar:

```node

> const validatorCPF = require("ygovalidatorcpf-lib");
> console.log(cpfValidator('10361744846'))
> // returns true

```

```node

> const validatorCPF = require("ygovalidatorcpf-lib");
> console.log(cpfValidator('103617448469'))
> // returns false

```

```node

> const cpfValidator = require("ygovalidatorcpf-lib");
> console.log(cpfValidator('11111111111'))
> // returns false

```

## ROADMAP OFICIAL DO PROJETO

#### Versão 1.0.1 (released)
- funcionalidades: valida números de CPF com todos os dígitos iguais.
