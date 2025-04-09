let  inventario = [];


//Funcion parar menu
function mostrarMenu(){
    return parseInt( prompt (
        "Opciones disponibles \n" + 
        "1. Agregar producto \n" +
        "2. Mostrar productos \n" +
        "3. Buscar producto por nombre \n" +
        "4. Salir \n" + 
        "Elije una opción"
    ) );
}
function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto: ");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto: "));
    let precio = parseInt(prompt("Introduce el precio del producto: "));

    if(cantidad > 0 && precio > 0){ 
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        console.log("Se gregó: " + nombre + ", " + cantidad + " y " + precio);
        alert("Producto agregado");
    }else{
        alert("La cantidad y precio debe ser números positivos");
    }
}

function mostrarProducto(){
    if( inventario.length === 0 ){
        alert("No hay productos");

    }else{
        let mensaje = "Porductos en inventario \n";
        for ( let i=0; i < inventario.length; i++){
                mensaje += `Producto ${i+1} \n`+
                           `Nombre: ${inventario[i].nombre} \n`+
                           `Cantidad: ${inventario[i].cantidad} \n`+
                           `Precio: ${inventario[i].precio}\n`+
                           "---------------------------------\n"
                           ;
        }
        alert(mensaje);
    }


}

function buscarProducto(){
    let nombre = prompt("Ingresa el nombre del producto: ").toLowerCase();
    let encontrado = false;
    for ( let i=0; i < inventario.length; i++){
        if (inventario[i].nombre.toLowerCase() === nombre){
            alert(`Producto ${i+1} \n`+
                    `Nombre: ${inventario[i].nombre} \n`+
                    `Cantidad: ${inventario[i].cantidad} \n`+
                    `Precio: ${inventario[i].precio}\n`+
                    "---------------------------------\n"
            );
            encontrado = true;
        }
    }
    if (!encontrado) {
        alert("Ese artículo no se encuentra en el inventario");
    }    
}


function iniciarPrograma(){
    let continuar = true;
    while ( continuar ){
        let opcion = mostrarMenu();
        switch( opcion ){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opción no valida, intenta de nuevo");

        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();