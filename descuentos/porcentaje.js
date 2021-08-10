let precioOriginal = 100;
let descuento = 15;




function calcularPrecioConDescuento(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento;
let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
}

function onClickButtonPrice() {
const inputprice = document.getElementById("inputPrice");
const priceValue = inputprice.value;
const inputDiscount = document.getElementById("inputDiscount");
const discountValue = inputDiscount.value;

const PrecioConDescuento= calcularPrecioConDescuento(priceValue, discountValue)

const resultP = document.getElementById("resultP")

resultP.innerText = PrecioConDescuento
}