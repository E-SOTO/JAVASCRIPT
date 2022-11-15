
const productos=[];
let nombre;
let cantidad;
let subtotal=0;
let total=0;
const iva=1.16; //El tax(IVA) en México es del 16%


class Producto{
    constructor(nombre,precio){
        this.nombre=nombre,
        this.precio=precio
    }
}

function obtenerDatos(){
    //Declaración de variables
    let precio;
    let nombreProducto;
    
    nombre=prompt("Ingresa tu Nombre");
    console.log("Hola " + nombre + "!");
    cantidad=prompt("¿Cuantos productos vendiste?");
    for(let i=1;i<=cantidad;i++){
        let x=false;
        do{
            nombreProducto=prompt("¿Cual fue el producto " + i);
            precio= Number(prompt("¿En cuanto lo vendiste(SIN IVA)?"));
            if(isNaN(precio)){
                alert("Eso no es un número, intenta de nuevo");
                x=false;
            }else{
                x=true;
            }
        }while(x != true);    
        productos.push(new Producto(nombreProducto,precio));
    }
    return productos
}

function imprimirDatos(productos){
    productos.forEach(producto=>{
        subtotal=subtotal+producto.precio;
        console.log(`${producto.nombre} tuvo un precio de: ${producto.precio}`)
    })
    total=subtotal*iva;
    console.log("El subtotal(SIN IVA) es de: " + subtotal);
    console.log("El total fue de: " + total);
}
//Recolección de datos
obtenerDatos();
imprimirDatos(productos);