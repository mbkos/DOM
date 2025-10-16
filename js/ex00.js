/*Exercícios
1-No mesmo script usando os mesmos valores de n1 e n2, crie novos botões para: multiplicar, dividir(não pode haver divisão por zero) e subtrair

2- Crie um novo documento HTML em que o usuário digite o valor da cotação do dolar, e o valor em reais e converta para dolar.



4- Crie um script em que o usuário entre com o login e senha e exiba uma mensagem com alert caso os dados estejam correto ou incorretos

5- Crie um novo documento HTML em que o usuário entre com o primeiro valor de uma Progressão Aritmética (PA) a razão da PA e a quantidade de termos da PA e gere a serie. Dica: use uma lista para armazenar a PA e exibir em tela.

OBS: APÓS TERMINAR TODOS OS SCRIPTS ESTILIZE VIA CSS.*/


function somar(){
    var v1, v2, result
    v1 = document.getElementById("primeiro_valor").value 
    v2 = document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        result = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado").innerHTML=`O resultado da soma é ${result}`
    }


}

/**3- Crie um novo documento HTML onde o usuário deve entrar o peso e altura e o programa deve exibir o IMC. Dependendo da faixa do
 IMC deve informar se o usuário está abaixo do peso, peso normal, sobrepeso, obesidade mórbida. Desafio extra: Apresente as informações 
 em cores azul para abaixo do peso, verde peso normal, sobrepeso amarlo e obesidade vermelho */

 