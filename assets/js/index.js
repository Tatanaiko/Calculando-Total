let precio = 400000;
let precioSpan= document.querySelector(".precio-inicial").innerHTML = precio;

let quantity = 0;

function addQuantity(){
    quantity++;
    updateQuantity();
}

function substractQuantity(){
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }else {
        alert("NO SE PUEDE MENOS DE 0");
    }
}

function updateQuantity(){
    document.querySelector(".cantidad").innerHTML = quantity;
    const total = precio * quantity; 
    document.querySelector(".valor-total").innerHTML = total;
}

