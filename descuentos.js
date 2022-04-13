//Reto
//Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento))/100;
    return precioConDescuento;
}

let listaProductos = {
    "Laptop": 2000,
    "Celular": 700,
    "Pantalla": 500,
    "Teclado": 200,
    "Mouse": 70 
}

const selectElement = document.getElementById("product");
let i = 0;

//Sending info
for (const prop in listaProductos) {        
    let elementos = selectElement.options[i]; //Asigna el index del "array de options" a una variable
    elementos.innerText = prop; //Añade las llaves del objeto como texto a los tag option
    elementos.value = listaProductos[prop]; //Añade los valores de las llaves al atributo "value" de cada tag option
    i++;
}

function onClickButtonPriceDiscount() {
    const inputValue = document.getElementById("product");
    const priceValue = parseInt(inputValue.options[inputValue.selectedIndex].value);
    
    const inputDiscount = document.getElementById("discountCoupon");
    const discountValue = parseInt(inputDiscount.options[inputDiscount.selectedIndex].value);
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = `El precio es $${priceValue}.`;
    const resultDiscount = document.getElementById("resultDiscount");
    resultDiscount.innerText = `El precio con descuento es $${precioConDescuento}.`;
}