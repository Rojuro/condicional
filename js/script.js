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
function rendaMatric() {
    // ENTRADA
    let rend1 = Number(document.getElementById("rend1").value)
    const salarioMinimo = 1412
    const limite = salarioMinimo * 1.5
    // PROCESSAMENTO  
    
    if (renda < limite) { 
        // SAÍDA APROVADO        
        document.getElementById("rendAminim").innerText
        = "O renda no valor de " + renda + " Esta no critério Aprovado"
    } else { 
        // SAÍDA REPROVADO        
        document.getElementById("rendAminim").innerText
        = "O renda no valor de " + renda + " Esta no critério Reprovado"
    } 
}
// ---------Exercicio 3---------------------------------- -->
function igualDiferent() {
    // ENTRADA
    let valorX = Number(document.getElementById("valorX").value)
    let valorY = Number(document.getElementById("valorY").value)
    let resultados
    // PROCESSAMENTO  
    
    if (valorX == valorY) { 
        // SAÍDA IGUAIS MULTIPLICAR
        resultados = valorX1 * valorY1
        
        document.getElementById("calcular1").innerText
        = "Os valores " + resultados + " são iguais portanto serão multiplicados"

    } else {
        if (valorX != valorY)
        // SAÍDA DIFERENTES DIVIDIR
        resultados = valorX1 / valorY1

        document.getElementById("calcular1").innerText
        = "Os valores " + resultados + " são difirentes portanto serão divididos"
    } 
}
// ---------Exercicio 4---------------------------------- -->






