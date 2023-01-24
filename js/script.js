// ESTRUCTURA HTML (LISTO)
// Variables Necesarias (LISTO)
// Funciones y funciones de orden superior si se puede (--)
// Crear Objetos en JS (LSITO)
// Crear Arrays (LISTO)
// Metodos de BUSQUEDA y FILTRADO sobre el Array (LISTO)
let SALIR = false;
const persona = {}
const productos = [
    {nombre: "Nintendo Switch", valor: 300000, stock: 17, id: "1", categoria:["2"||"6"]},
    {nombre: "Playstation 5", valor: 800000, stock: 15 , id: "2", categoria:["3"||"6"]},
    {nombre: "Xbox Series X", valor: 550000, stock: 12 , id: "3", categoria:["4"||"6"]},
    {nombre: "Pokemon Escarlata", valor: 55000, stock: 7, id: "4", categoria:["2"]},
    {nombre: "Mario Party", valor: 55000, stock: 22, id: "5", categoria:["2"]},
    {nombre: "God of War Ragnarok (PS5)", valor: 65000, stock: 13, id: "6", categoria:["3"]},
    {nombre: "Halo Infinite (XBOX)", valor: 50000, stock: 3, id: "7", categoria:["4"]},
    {nombre: "Switch Controller (Control Nintendo)", valor: 90000, stock: 29, id: "8", categoria:["2"||"7"]},
    {nombre: "Control Xbox", valor: 35000, stock: 24, id: "9", categoria:["4"]},
    {nombre: "Elden Ring (PC)", valor: 45000, stock: 7, id: "10", categoria:["1"]},
    {nombre: "Elden Ring (PS5)", valor: 55000, stock: 10, id: "11", categoria:["3"]},
    {nombre: "Catan - El Juego", valor: 25000, stock: 15, id: "12", categoria:["5"]}
]
let nombre = "";
nombre = prompt("Bienvenido, ingresa tu nombre");
while (nombre === "") {
    nombre = prompt("porfavor ingrese un nombre valido");
}
alert("Bienvenido " + nombre);
let catalogoProductos = listarProductos(productos)
let idProducto=null
let productoSeleccionado=null
while (SALIR === false){
    while (productoSeleccionado===null){
        idProducto=prompt(`Ingrese el numero del producto de interes\n${catalogoProductos}\nFILTRO: Ver categorias y filtrar productos\nESC: Salir`)
        if (idProducto === `FILTRO`){
            let filtro = ""
            filtro = prompt(`Escribe el numero de la categoria que deseas\n\n1: Juegos de PC\n2: Juegos de Nintendo\n3: Juegos de Play\n4: Juegos de XBOX\n5: Juegos de Mesa\n6: Consolas\n7: Accesorios`)
            console.log(filtro)
            const buscar = productos.filter(producto=> producto.categoria == filtro)
            console.log (buscar)
            let productosFiltrados = listarProductos(buscar)
            idProducto=prompt(`Ingrese el numero del producto de interes\n${productosFiltrados}\nESC: Salir`)
            productoSeleccionado = buscarProducto(idProducto)
            if (productoSeleccionado === null){
                alert(`Porfavor, Ingrese un valor valido`)
            }
        }
        else if (idProducto === `SALIR`){
            SALIR=true
            break
        }
        else{
            productoSeleccionado = buscarProducto(idProducto)
            if (productoSeleccionado === null){
                alert(`Porfavor, Ingrese un valor valido`)
            }
        }
    }
    pedirStock(productoSeleccionado)
    while (SALIR === false) {
        deseaSeguir = prompt(
            "¿Desea seguir comprando?" + "\n" + "Si" + "\n" + "No"
        );
        if (deseaSeguir.toUpperCase() === "SI") {
            productoSeleccionado = null
            break;
        } else if (deseaSeguir.toUpperCase() === "NO") {
            SALIR = true;
            break;
        }
    }
}
alert("Gracias por visitarnos!" + "\n" + "Esperamos verte de nuevo " + nombre);

function listarProductos(productos){
    let lista = ""
    for (let producto of productos){
        let productoListado = `${producto.id}: ${producto.nombre} (${producto.valor} CLP)`
        lista = lista+"\n"+productoListado    
    }     
    return lista
}
function buscarProducto(buscarId){
    let productoSeleccionado = null
    for (let producto of productos){
        if (buscarId == producto.id){
            productoSeleccionado = producto
        }
    }
    return productoSeleccionado
}
function pedirStock(productoSelec) {
    let cantidad = Number(
            prompt(
                `Cuantas ${productoSelec.nombre} deseas llevar\nStock: ${productoSelec.stock}`
            )
        );
        let descuento1 = "DESCUENTO";
        let total = Number(cantidad * productoSelec.valor);
        let pedirDescuento = prompt(
            `El total de tu compra es de ${total}\n Si tienes algun cupon de descuento ingresalo a continuación`
        );
        if (pedirDescuento == descuento1) {
            total = (total/100)*70;
            alert("Felicidades! tu descuento del 30% ha sido activado");
            if (cantidad > productoSelec.stock) {
                cantidad = prompt("Ingrese un stock valido");
                alert(
                    `Haz agregado ${cantidad} ${productoSelec.nombre}\nPrecio Total: ${total} (Descuento de 30% ya incluido)`
                );
            } else {
                alert(
                    `Haz agregado ${cantidad} ${productoSelec.nombre}\nPrecio Total: ${total} (Descuento de 30% ya incluido)`
                );
            }
        } else if (pedirDescuento != descuento1) {
            if (cantidad > productoSelec.stock) {
                cantidad = prompt("Ingrese un stock valido");
                alert(
                    `Haz agregado ${cantidad} ${productoSelec.nombre}\nPrecio Total: ${total}`
                );
            } else {
                alert(
                    `Haz agregado ${cantidad} ${productoSelec.nombre}\nPrecio Total: ${total}`
                );
            }
        }
}