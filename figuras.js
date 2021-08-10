
// codigo del cuadrado
let dibujoCuadrado = document.getElementById("dibujoCuadrado");
let papelCuadrado = dibujoCuadrado.getContext("2d");

dibujarLinea("red", 0, 0, 90, 0, papelCuadrado)
dibujarLinea("red", 90, 0, 90, 90, papelCuadrado)
dibujarLinea("red", 0, 90, 90, 90, papelCuadrado)
dibujarLinea("red", 0, 0, 0, 90, papelCuadrado)

function perimetroCuadrado(lado) {
   
    return  lado * 4;

} 

function areaCuadrado(lado) {
return lado * lado;
} 
function calcularperimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const resultP = document.getElementById("circuloResultado")
    const value = input.value;
     
   const perimetro = perimetroCuadrado(value);
   resultP.innerText =  perimetro + " cm";

    
    
   
    }
    
    function calcularÁereaCuadrado() {
       const input = document.getElementById("inputCuadrado");
       const resultA = document.getElementById("circuloResultado")
       const value = input.value;

       
           const area = areaCuadrado(value);
           resultA.innerText =  area + " cm'2";
        
       
       
    }



// codigo del triangulo

let dibujoTriangulo = document.getElementById("dibujoTriangulo");
let papelTriangulo = dibujoTriangulo.getContext("2d");

dibujarLinea("red", 50, 0, 90, 90, papelTriangulo)
dibujarLinea("red", 0, 90, 50, 0, papelTriangulo)
dibujarLinea("red", 0, 90, 90, 90, papelTriangulo)

function perimetroTriangulos(lado1, lado2, base) {
    
        return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)
{
return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 !=base) {
    return Math.sqrt(lado1 * lado2 - base * base / 4)
  }
  else {
     alert("escriba un valor correcto");
  }
   
}

function  calcularPerimetroTriangulo() {
    const ladoa =  document.getElementById("ladoATriangulo")
    const ladob = document.getElementById("ladoBTriangulo")
    const base = document.getElementById("baseTriangulo")
    
    const resultP = document.getElementById("trianguloResultado")
     
    const a = parseInt(ladoa.value); 
    const b = parseInt(ladob.value); 
    const ba = parseInt(base.value); 

     const perimetro = perimetroTriangulos(a, b, ba);

     resultP.innerText = perimetro + " cm" 
       
}

function calcularÁreaTriangulo() {
   
  const ladoA = document.getElementById("ladoATriangulo")
  const ladoAValue = ladoA.value
  const ladoB = document.getElementById("ladoBTriangulo")
  const ladoBValue = ladoB.value
  const base = document.getElementById("baseTriangulo")
  const baseValue = base.value;
   const resultA = document.getElementById("trianguloResultado")
   
   
   const altura = alturaTriangulo(ladoAValue, ladoBValue, baseValue);
    const area = areaTriangulo(baseValue, altura);

    resultA.innerText = area + " cm'2" 
    
}

// codigo del circulo
    let dibujoCirculo = document.getElementById("dibujoCirculo");
    let papelCirculo = dibujoCirculo.getContext("2d");

    papelCirculo.beginPath();
    papelCirculo.arc(40, 45, 40, 0, 2 * Math.PI);
    papelCirculo.strokeStyle = "red";
    papelCirculo.stroke();

     // Radio
       const radioCirculo = 4;
     
     // Diametro
       function diametroCirculo(Radio) {
          return Radio * 2;
       }

       //pi
       const PI = Math.PI;
 
       // Circunferencia

       function circuferenciaCirculo(Radio)
       {
           const perimetro = diametroCirculo(Radio);
           return perimetro * PI;
       }  
     
      // Area
       function areaCirculo(Radio) {
           
           return (Radio * Radio) * PI;
       } 
      
      function  calcularCircuferenciaCirculo()  {
        const Radio= document.getElementById("inputCirculo");
        const resultC = document.getElementById("circuloResultados");
        const r = Radio.value; 

        
          const circuferencia = circuferenciaCirculo(r);
          resultC.innerText = circuferencia + " cm";
        
        
      }

    function  calcularÁreaCirculo() {
          const radio = document.getElementById("inputCirculo");
          const resultA = document.getElementById("circuloResultados");
          const r = parseInt(radio.value);
          
          const area = areaCirculo(r);
          resultA.innerText = area + "cm";
          
        }

    function  calcularDiametroCirculo() {
        const radio = document.getElementById("inputCirculo");
        const resultD = document.getElementById("circuloResultados");
        const r = parseInt(radio.value);
        const area = diametroCirculo(r);
        resultD.innerText = area + " cm";
    }

     // dibujos de los canvas
       function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
       {
           lienzo.beginPath();
           lienzo.strokeStyle = color;
           lienzo.lineWidth = 3;
           lienzo.moveTo(xinicial, yinicial);
           lienzo.lineTo(xfinal, yfinal);
           lienzo.stroke();
           lienzo.closePath();
         }

       

      
        
        

