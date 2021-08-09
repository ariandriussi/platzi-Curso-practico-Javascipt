//Variables dibujo

let dibujoCuadrado = document.getElementById("dibujoCuadrado");
let dibujoTriangulo = document.getElementById("dibujoTriangulo");
let papelCuadrado = dibujoCuadrado.getContext("2d");
let papelTriangulo = dibujoTriangulo.getContext("2d");



// codigo del cuadrado

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


// codigo del triangulo


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
  if (lado1 == lado2 && lado !=base) {
    return Math.sqrt(lado1 * lado2 - base * base / 4)
  }
  else {
     alert("escriba un valor correcto");
  }
   

}




     
// codigo del circulo

       // Radio
       const radioCirculo = 4;
     

       // Diametro
       function diametroCirculo(Radio) {
          return Radio * 2;
       }

       //pi
       const PI = Math.PI;
 
       // Circunferencia

       function perimetroCirculo(Radio)
       {
           const Diametro = diametroCirculo(Radio);
           return Diametro * PI;
       }  
     

       // Area
       

       function areaCirculo(Radio) {
           
           return (Radio * Radio) * PI;
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

         // interactuando con html
         function calcularperimetroCuadrado() {
         const input = document.getElementById("inputCuadrado");
         const value = input.value;
         
         const perimetro = perimetroCuadrado(value);
         alert(perimetro)
         }
         
         function calcularÁereaCuadrado() {
            const input = document.getElementById("inputCuadrado");
            const value = input.value;
            
            const area = areaCuadrado(value);
            alert(area)
         }

         function  calcularPerimetroTriangulo() {
             const ladoa =  document.getElementById("inputTriangulo")
             const ladob = document.getElementById("inputTriangulo2")
             const base = document.getElementById("inputTriangulo3")

             const a = parseInt(ladoa.value); 
             const b = parseInt(ladob.value); 
             const ba = parseInt(base.value); 


            const perimetro = perimetroTriangulos(a, b, ba);
             alert(perimetro);
         }

         function calcularÁreaTriangulo() {
            
            const base = document.getElementById("inputTriangulo3")
            const altura = document.getElementById("inputTriangulo4")
            
           
            const ba = base.value;
            const al = altura.value;

            const area = areaTriangulo(ba, al);
            alert (area)
         }