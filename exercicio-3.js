let soma = (v1, v2) => v1 + v2 
let subtracao = (v1, v2) => v1 - v2 
let multiplicacao = (v1, v2) => v1 * v2
let divisao = (v1, v2) => v1 / v2
let resposta = 1

while (resposta == 1){

    let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")
    

    if((operacao >= 1) && (operacao <= 4)){

        let num1 = Number (prompt("Digite o primeiro valor da operação"))
        let num2 = Number (prompt("Digite o segundo valor da operação"))
        //let result

        /*if(operacao == 1)
        {
            alert(`O resultado é ${num1 + num2}`)
        } else {

                if(operacao == 2)
                {
                    alert(`O resultado é ${num1 - num2}`)
                } else {
                    
                        if(operacao == 3)
                        {
                            alert(`O resultado é ${num1 * num2}`)
                        } else  {
                            
                                if(operacao == 4)
                                {
                                    alert(`O resultado é ${num1 / num2}`)
                                }  
                                }
                        }
                }*/
                
        switch (operacao) {
            case '1':
                alert(`O resultado é ${soma(num1, num2)}`)
                break;
            case '2':
                alert(`O resultado é ${subtracao(num1, num2)}`)
                break;
            case '3':
                alert(`O resultado é ${multiplicacao(num1, num2)}`)
                break;
            case '4':
                alert(`O resultado é ${divisao(num1, num2)}`)
                break;
            default:
                alert(`Digite um valor entre 1 e 4`)
                break;
        }

    }

    resposta = prompt(`caso deseje continuar, digite "1" caso não deseje continuar, digite "2"`)

}

/*} else{
   alert(`Digite um valor entre 1 e 4`)} */