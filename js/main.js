class Producto{
    constructor(nombre,precio){
        this.nombre=nombre,
        this.precio=precio
    }
}

const productos=[];
let nombre;
let cantidad;
let subtotal=0;
let total=0;
const iva=1.16; //El tax(IVA) en México es del 16%

const formulario= document.querySelector('.formulario');

formulario.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    nombre=document.getElementById("inputName").value;
    cantidad=document.getElementById("inputCantidad").value;

    console.log(nombre);
    console.log(cantidad);

    let div=document.querySelector('.divProductos');

    let h3Nombre=document.createElement("h3");
    h3Nombre.textContent="Hola " + nombre;

    /*Formulario de productos*/
    let formProductos=document.createElement("form");
    formProductos.classList.add("formProductos");

    div.appendChild(h3Nombre);
    div.appendChild(formProductos);
    crearFormProductos(cantidad,formProductos);

     let hey=document.body;
    console.log(hey);
})

function crearFormProductos(cantidad,formProductos){
    for(let i=1;i<=cantidad;i++){
        let divProducto=document.createElement("div");
        divProducto.classList.add("mb-3");

        let labelProduct=document.createElement("label");
        labelProduct.classList.add("form-label");
        labelProduct.setAttribute("id","labelProducto" + i);
        labelProduct.setAttribute("type","text");
        labelProduct.textContent="Cual es el producto " + i;

        let inputProduct=document.createElement("input");
        inputProduct.classList.add("form-control");
        inputProduct.setAttribute("id","inputProducto" + i);
        inputProduct.setAttribute("for","forInputProducto" + i);

        let labelPrice=document.createElement("label");
        labelPrice.classList.add("form-label");
        labelPrice.setAttribute("id","labelPrice" + i);
        labelPrice.setAttribute("type","text");
        labelPrice.textContent="Cual es el precio del producto " + i;

        let inputPrice=document.createElement("input");
        inputPrice.classList.add("form-control");
        inputPrice.setAttribute("id","inputPrice" + i);
        inputPrice.setAttribute("for","forInputProducto" + i);

        divProducto.appendChild(labelProduct);
        divProducto.appendChild(inputProduct);
        divProducto.appendChild(labelPrice);
        divProducto.appendChild(inputPrice);

        formProductos.appendChild(divProducto);

    }

    let submitProductos =document.createElement("button");
    submitProductos.classList.add("btn");
    submitProductos.classList.add("btn-primary");
    submitProductos.setAttribute("type","submit");
    submitProductos.textContent ="Calcular";
    formProductos.appendChild(submitProductos);

}
/* 

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
imprimirDatos(productos); */