document.getElementById("gerarBTN").addEventListener("click", function() {
    // pegou o conteudo o id para gerar o numero
    var numeroAleatorio= Math.floor(Math.random () * 100) + 1;
//fez um calculo, pegando o numeroAleatorio e dizendo que o umero será ramdom, e que irá até 100

//Math.random(): Essa função retorna um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). Por exemplo, pode retornar 0.345678 ou 0.876543.

// Math.floor(): Essa função arredonda um número para o número inteiro mais próximo menor ou igual ao número fornecido. Por exemplo, Math.floor(3.7) retorna 3, Math.floor(8.9) retorna 8.

// Math.random() * 100: Multiplicar o número aleatório por 100 nos dá um número aleatório entre 0 e 100. Por exemplo, pode retornar 37.456789 ou 89.76543.

// Math.floor(Math.random() * 100): O arredondamento para baixo do número aleatório multiplicado por 100 nos dá um número inteiro aleatório entre 0 e 99. Por exemplo, pode retornar 37 ou 89.

// Math.floor(Math.random() * 100) + 1: Adicionando 1 ao número aleatório arredondado nos dá um número inteiro aleatório entre 1 e 100. Por exemplo, pode retornar 38 ou 90.
document.getElementById("numeroGerado").innerHTML = "Número Gerado " + numeroAleatorio;});

