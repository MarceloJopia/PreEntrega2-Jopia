// ESTRUCTURA HTML (LISTO)
// Variables Necesarias (X)
// Funciones y funciones de orden superior si se puede (--)
// Crear Objetos en JS (X)
// Crear Arrays (LISTO)
// Metodos de BUSQUEDA y FILTRADO sobre el Array (X)

// RESOLVER FUNSION QUE REMPLAZA AL SWITCH

// RECORRIDO
// 1 - NOMBRE (LISTO)
// 2 - OFRECER PRODUCTOS Y OFRECER FILTRAR (--)
// 3 - PREGUNTAR CUANTOS LLEVA Y MOSTRAR STOCK (X)
// 4 - PREGUNTAR POR ALGUN DESCUENTO (X)
// 5 - ENTREGAR TOTAL (X)
// 6 - PREGUNTAR SI DESEA COMPRAR ALGO MAS (X)
// 7 - ADIOS (X)

// AUN NO VINCULAR EL JS AL HTML (MOSTRAR TODO EN PROMPT Y ALERT)
let SALIR = false;

const productos = [
    {nombre: "Nintendo Switch", valor: 300000, stock: 17, id: "1",},
    {nombre: "Playstation 5", valor: 800000, stock: 15 , id: "2"},
    {nombre: "Xbox Series X", valor: 550000, stock: 12 , id: "3"},
    {nombre: "Pokemon Escarlata", valor: 55000, stock: 7, id: "4"},
    {nombre: "Mario Party", valor: 55000, stock: 22, id: "5"},
    {nombre: "God of War Ragnarok (PS5)", valor: 65000, stock: 13, id: "6"},
    {nombre: "Halo Infinite (XBOX)", valor: 50000, stock: 3, id: "7"},
    {nombre: "Switch Controller (Control Nintendo)", valor: 90000, stock: 29, id: "8"},
    {nombre: "Control Xbox", valor: 35000, stock: 24, id: "9"},
    {nombre: "Elden Ring (PC)", valor: 45000, stock: 7, id: "10"},
    {nombre: "Elden Ring (PS5)", valor: 55000, stock: 10, id: "11"},
    {nombre: "Catan - El Juego", valor: 25000, stock: 15, id: "12"}
]


// 1


let nombre = "";
nombre = prompt("Bienvenido, ingresa tu nombre");
while (nombre === "") {
    nombre = prompt("porfavor ingrese un nombre valido");
}
alert("Bienvenido " + nombre);


// 2


let catalogoProductos = listarProductos()
let idProducto = prompt(`Ingrese el numero del producto de su interes\n${catalogoProductos}\nFILTRO: Ver y filtrar por categorias\nESC: Salir`)
let respuestaCatalogo = buscarProducto()
if(idProducto===ESC){
    SALIR=true
}
else if(idProducto==respuestaCatalogo){
    
}

function buscarProducto(){
    
    if(idProducto=="1" || idProducto=="2" || idProducto=="3" || idProducto=="4" || idProducto=="5" || idProducto=="6" || idProducto=="7" || idProducto=="8" || idProducto=="9" || idProducto=="10" || idProducto=="11" || idProducto=="12"){
        for (producto of productos.id){
            if (idProducto == productos.id){
                let seleccionCompra = producto==(idProducto==productos.id)
            }
        }
        return seleccionCompra
    }
    else if(idProducto==FILTRO){
        let filtroSelec = prompt(`Ingrese la categoria que desea Filtrar\n1: Juegos de PC\n2: Juegos de Nintendo\n3: Juegos de PlayStation\n4: Juegos de XBOX\n5: Juegos de Mesa\n6: Consolas\n7: Accesorios\nESC: Salir`)
    }
    else{
        alert("Ingrese un valor valido")
    }
}

// 3

// 4


// 5


// 6


// 7
alert("Gracias por visitarnos!" + "\n" + "Esperamos verte de nuevo " + nombre);

// FUNCIONES



function listarProductos(){
    let lista = ""
    for (let producto of productos){
        let productoListado = `${producto.id}: ${producto.nombre} (${producto.valor} CLP)`
        lista = lista+"\n"+productoListado    
    }     
    return lista
}