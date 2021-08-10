

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
    const value = input.value;
    if (value == "") {
        alert("ingrese un valor")
     }
    else {
   const perimetro = perimetroCuadrado(value);
   alert(perimetro)

    }
    
   
    }
    
    function calcularÁereaCuadrado() {
       const input = document.getElementById("inputCuadrado");
       const value = input.value;

       if (value == "") {
           alert("ingrese un valor")
        }
        else {
           const area = areaCuadrado(value);
           alert(area)
        }
       
       
    }



// codigo del triangulo

let dibujoTriangulo = document.getElementById("dibujoTriangulo");
let papelTriangulo = dibujoTriangulo.getContext("2d");

dibujarLinea("red", 50, 0, 90, 90, papelTriangulo)
dibujarLinea("red", 0, 90, 50, 0, papelTriangulo)
dibujarLinea("red", 0, 90, 90, 90, papelTriangulo)





function perimetroTriangulos(lado1, lado2, base) {
    if(lado1 == lado2 && lado1  !=base) {
        return lado1 + lado2 + base;
    }
    else {
        alert("Los valores no corresponden")
    }
  

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

function  calcularPerimetroTriangulo() {
    const ladoa =  document.getElementById("inputTriangulo")
    const ladob = document.getElementById("inputTriangulo2")
    const base = document.getElementById("inputTriangulo3")

    const a = parseInt(ladoa.value); 
    const b = parseInt(ladob.value); 
    const ba = parseInt(base.value); 

    
    if (a >= 0 && b >= 0 && ba >= 0)   {
       const perimetro = perimetroTriangulos(a, b, ba);
       alert(perimetro);
      
    }
    else {
     
       alert("ingrese los valores")
    }

    

}

function calcularÁreaTriangulo() {
   
   const base = document.getElementById("inputTriangulo3")
   const altura = document.getElementById("inputTriangulo4")
   
  
   const ba = base.value;
   const al = altura.value;
   
   if (al <= 0 && ba <= 0)   {
    
    alert("ingrese los valores")
    }
    else {
     
       
       const area = areaTriangulo(ba, al);
        alert(area);
       
    }


   
}




     
// codigo del circulo


    let dibujoCirculo = document.getElementById("dibujoCirculo");
    let papelCirculo = dibujoCirculo.getContext("2d");

    papelCirculo.beginPath()
    papelCirculo.arc(40, 45, 40, 0, 2 * Math.PI);
    papelCirculo.strokeStyle = "red";
    papelCirculo.stroke();


;

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
      
      
       function  calcularPerimetroCirculo() {
        const Radio= document.getElementById("inputCirculo");

        const r = parseInt(Radio.value);

        if (r >= 0) {
          const perimetro = perimetroCirculo(r);
          alert(perimetro);
        
        }
        else {
          
          alert("ingrese el valor")

        }

        
       }


       function  calcularÁreaCirculo() {
          const radio = document.getElementById("inputCirculo");

          const r = parseInt(radio.value);

          
              
            const area = areaCirculo(r);
            alert(area);
            
            
              
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

       

      
        
        

