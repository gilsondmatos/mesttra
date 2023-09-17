var prompt = require('prompt-sync')();


let nome = prompt('Digite seu nome: ')

function validarSenha(senha) {
    // Verifica se a senha possui no mínimo um dígito
    if (!/[0-9]/.test(senha)) {
      return false;
    }
  
    // Verifica se a senha possui no mínimo um caractere maiúsculo
    if (!/[A-Z]/.test(senha)) {
      return false;
    }
  
    // Verifica se a senha possui no mínimo um caractere minúsculo
    if (!/[a-z]/.test(senha)) {
      return false;
    }
  
    // Verifica se a senha possui no mínimo um caractere especial
    if (!/[@#$%^&+=]/.test(senha)) {
      return false;
    }
  
    // A senha atende a todos os critérios
    return true;
  }
  
  // Exemplo de uso
  const senha = prompt("Digite sua senha:");
  if (validarSenha(senha)) {
    console.log("Senha válida!");
  } else {
    console.log("Senha inválida!");
  }