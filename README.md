# VALIDADOR DE CPF v.1.0.4

**Esta biblioteca se destina à verificação de CPFs válidos ou inválidos.**  
Na versão atual é capaz validar strings e numbers retornando `true` para CPF válido e `false` para CPF inválido.

## Como instalar:

```shell

$  npm install ygovalidatorcpf-lib

```

## Como utilizar:

```node

> const validatorCPF = require("ygovalidatorcpf-lib");
> validatorCPF('10361744846')
> // returns true

```

```node

> const validatorCPF = require("ygovalidatorcpf-lib");
> validatorCPF('103617448469')
> // returns false

```

```node

> const validatorCPF = require("ygovalidatorcpf-lib");
> validatorCPF('11111111111')
> // returns false

```

## ROADMAP OFICIAL DO PROJETO

#### Versão 1.0.4
- funcionalidades: correção do README.   

#### Versão 1.0.3 
- funcionalidades: simplificação ao validar o CPF.  
  
#### Versão 1.0.2   
- funcionalidades: correção do README e inclusão da funcionalidade de validar números CPF com todos os dígitos iguais como `inválidos`.  

#### Versão 1.0.1   
- funcionalidades: correção do README.    

#### Versão 1.0.0    
- funcionalidades: valida números de CPF com e sem pontuação.    
