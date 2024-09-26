// -------Exercicio A------------------------------------ -->
function verificaParImpar() {
    // ENTRADA
    let num = Number(document.getElementById("num").value)
    // PROCESSAMENTO
    if (num % 2 == 0) { 
        // SAÍDA VERDADEIRA        
        document.getElementById("resultado") .innerText = "O número " + num + " é par"
    } else { 
        // SAÍDA VERDADEIRA        
        document.getElementById("resultado") .innerText = "O número " + num + " é ímpar"
    }    
}
// ---------Exercicio 1---------------------------------- -->
function mediaAritMetica() {
    // ENTRADA
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota2").value)
    let mediam = (nota1 + nota2 + nota3)/ 3
    // PROCESSAMENTO  
    
    if (mediam > 6.0) { 
        // SAÍDA APROVADO        
        document.getElementById("medianArt").innerText
        = "O número " + mediam + " Aluno Aprovado"
    } else { 
        // SAÍDA REPROVADO        
        document.getElementById("medianArt").innerText
        = "O número " + mediam + " Aluno Reprovado"
    } 
}
// ---------Exercicio 2---------------------------------- -->
function verificarRenda() {
    
    let rendaFamiliar = Number(document.getElementById("rendaFamiliar").value);
    let numeroMembros = Number(document.getElementById("numeroMembros").value);

    const criterio = 2118.00;
    // Calcular a renda per capita
    let rendaPerCapita = rendaFamiliar / numeroMembros;
        
    if (rendaPerCapita <= criterio) {
        document.getElementById("resultadoren").innerText = "A renda per capita é R$" + rendaPerCapita + " Você pode se matricular."
    } else {
        document.getElementById("resultadoren").innerText = "A renda per capita é R$" + rendaPerCapita + " você possuir uma renda maior que o permitido para se matricular ."

    }
}
// ---------Exercicio 3---------------------------------- -->
function calcularXY() {

    let x = Number(document.getElementById("valorx").value);
    let y = Number(document.getElementById("valorY").value);

    // Verificar se x é igual a y
    let resultadoXY;
    if (x === y) {
        resultadoXY = x * y;
        document.getElementById("resultadoXY").innerText ="Como x e y são iguais, o resultado é x * y = " + resultadoXY + ""
    } else {
        if (y === 0) {
            document.getElementById("resultadoXY").innerText = "Divisão por zero não é permitida.";
        } else {
            resultadoXY = x / y;
            document.getElementById("resultadoXY").innerText ="Como x e y são diferentes, o resultado é x / y = " + resultadoXY + ""
        }
    }
}
// ---------Exercicio 4---------------------------------- -->

function calcularPesoIdeal() {

    let altura = Number(document.getElementById("altura").value);
    let sexo = document.getElementById("sexo").value;

    // Calcular o peso ideal com base no sexo
    let pesoIdeal;
    if (sexo === "masculino") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    document.getElementById("resultadoideal").innerText = "O peso ideal é "+ pesoIdeal+ "kg"
}




