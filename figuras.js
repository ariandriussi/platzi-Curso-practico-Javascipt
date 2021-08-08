let dibujo = document.getElementById("dibujoCuadrado");
let papel = dibujo.getContext("2d");

// codigo del cuadrado

dibujarLinea("red", 0, 0, 90, 0, papel)
dibujarLinea("red", 90, 0, 90, 90, papel)
dibujarLinea("red", 0, 90, 90, 90, papel)
dibujarLinea("red", 0, 0, 0, 90, papel)

function perimetroCuadrado(lado) {
    return  lado * 4;

} 

function areaCuadrado(lado) {
return lado * lado;
} 


// codigo del triangulo



function perimetrotriangulos(lado1, lado2, base) {
    return lado1 + lado2 + base

}
function areaTriangulo(base, altura)
{
return (base * altura) / 2;
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