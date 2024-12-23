alert('Boas vindas ao jogo do número secreto');
let numeroMax = 100
let numeroSecreto = parseInt (Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let tentativas = 1;
let chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);

while (chute != numeroSecreto){
    
    if (chute == numeroSecreto){
        break;
        } else {
        if (chute > numeroSecreto){
            chute = prompt (`O numero secreto é menor que: ${chute}`);

        } else { 
                    chute = prompt (`O numero secreto é maior que: ${chute}`);
            }
        }
        tentativas++ ;
    } 
    
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
    alert (`Você venceu o jogo com ${tentativas} ${palavraTentativa}`);


