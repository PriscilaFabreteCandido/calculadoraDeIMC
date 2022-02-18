
const form = document.querySelector('#form');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    imc = (peso/(altura* altura)).toFixed(2);
    if(!peso || !altura) {
        resultado('Dados inválidos. Digite novamente.', false);
        return;
    }
    const nivelIMC = getNivelIMC(imc);
    const msg = `IMC: ${imc}, ${nivelIMC}`;
    resultado(msg, true, nivelIMC);
            
    
});
function criaP(){
    const p = document.createElement('p');
    return p;

}
function getNivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if(imc >= 40)return nivel[5];
    if(imc >= 34.9)return nivel[4];
    if(imc >= 29.9)return nivel[3];
    if(imc >= 24.9)return nivel[2];
    if(imc >= 18.5)return nivel[1];
    if(imc < 18.5)return nivel[0];
    
}
function resultado(msg, isValid, nivelIMC ){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    const p = criaP();
     if(isValid == true){
         if(nivelIMC == 'Abaixo do peso'){
            p.classList.add("amarelo");
         }else if(nivelIMC == 'Peso normal'){
            p.classList.add("class-resultado");
         }else if(nivelIMC == 'Sobrepeso'){
            p.classList.add("orange");
         }else if(nivelIMC == 'Obesidade grau 1'){
            p.classList.add("vermelho-1");
        }else if(nivelIMC == 'Obesidade grau 2'){
            p.classList.add("vermelho-2");
        }
        else if(nivelIMC == 'Obesidade grau 3'){
            p.classList.add("vermelho-3");
        }
    }

     else{
         p.classList.add("bad");
     }
  
    p.innerHTML = msg;
    resultado.appendChild(p);

}
