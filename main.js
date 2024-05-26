let nombre = prompt("Ingrese su nombre");

function validarNombre(nombre) {
    while (!nombre || nombre.trim().length < 2 || !isNaN(nombre) || /^[\s]*$/.test(nombre)) {
        nombre = prompt("Nombre inválido. Por favor, ingrese un nombre válido:");
    }
    return nombre;
}

nombre = validarNombre(nombre);
let carrito = [];

function producto(cantidad, precio) {
    return cantidad * precio;
}


function cantidadProductos(cantidad) {
    while (cantidad <= 0 || isNaN(cantidad)) {
        cantidad = Number(prompt("La cantidad debe ser mayor a 0. Ingrese nuevamente la cantidad:"));
    }
    return cantidad;
}


function mostrarProductos() {
    let productos = "Estos son nuestros productos:\n";
    for (let i = 1; i <= 5; i++) {
        let precio;
        switch (i) {
            case 1:
                precio = 10;
                break;
            case 2:
                precio = 20;
                break;
            case 3:
                precio = 15;
                break;
            case 4:
                precio = 25;
                break;
            case 5:
                precio = 30;
                break;
        }
        productos += i + ". Producto " + i + " - $" + precio + "\n";
    }
    alert(productos);
}


function eCommerce() {
    alert("Bienvenido al eCommerce, " + nombre + ".");
    mostrarProductos();

    while (true) {
        let opcion = prompt("Ingrese el número del producto que desea agregar al carrito o presione Cancelar para finalizar la compra. En caso de que quiera ver nuevamente los productos escriba 'atras':");

        if (opcion === null) {
            break; 
        } else if (opcion.toLowerCase() === "atras") {
            mostrarProductos(); 
        } else {
            opcion = parseInt(opcion);
            if (isNaN(opcion) || opcion < 1 || opcion > 5) {
                alert("Opción inválida. Por favor, seleccione un número válido.");
            } else {
                let precio;
                switch (opcion) {
                    case 1:
                        precio = 10;
                        break;
                    case 2:
                        precio = 20;
                        break;
                    case 3:
                        precio = 15;
                        break;
                    case 4:
                        precio = 25;
                        break;
                    case 5:
                        precio = 30;
                        break;
                }
                let cantidad = cantidadProductos(parseInt(prompt("Ingrese la cantidad de Producto " + opcion + " que desea comprar:")));
                carrito.push({ producto: opcion, cantidad: cantidad, precio: precio });
                alert("Se han agregado " + cantidad + " unidades de Producto " + opcion + " al carrito.");

                
                let agregarOtro = prompt("¿Quiere agregar otro producto? Si es así, presione la letra 'A'. Si no, presione cualquier otra tecla para finalizar la compra y ver el total.");
                if (agregarOtro.toLowerCase() !== 'a') {
                    break; 
                }
            }
        }
    }

    let totalCompra = 0;
    for (let item of carrito) {
        totalCompra += item.cantidad * item.precio;
    }

    alert("El total de su compra es: $" + totalCompra.toFixed(2));
}

eCommerce();
