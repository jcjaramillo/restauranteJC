const menu = document.querySelector('.hamburguesa');//selecciona la clase
const navegacion = document.querySelector('.navegacion');//selecciona la clase
const imagenes = document.querySelectorAll('img');//selecciona todas las imagenes del html
//eventos para botones de platillos
//const btnTodos = document.querySelector('.todos');//selecciona el boton para los platillos y añadir un evento
//const btnEnsaladas = document.querySelector('.ensaladas');//selecciona el boton para ensaladas
//const btnPasta = document.querySelector('.pasta');//selecciona el boton para pasta
//const btnPizza = document.querySelector('.pizza');//selecciona el boton para pizza
//const btnPostres = document.querySelector('.postres');//selecciona el boton para postres
//const contenedorPlatillos = document.querySelector('.platillos');//seleccioan la clase platillos del html para mostrar los platillos filtrados (* Linea 83 *)

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
    platillos();
});

//abrir menu
const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}

//cerrar menu
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');//oculta la clase 'ocultar'
    botonCerrar();
}

//boton x para cerrar menu
const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');//overlay añade algo a la pantalla
    overlay.classList.add('pantalla-completa');//se añade una clase a overlay
    const body = document.querySelector('body');//en el body se coloca el overlay
    //if(document.querySelectorAll('.pantalla-completa').length > 0)return;//selecciona todos los overlay desde 0
    body.appendChild(overlay);//se aplica el color efecto de css
    btnCerrar.textContent = 'x'; //agrega texto x a la variable
    btnCerrar.classList.add('btn-cerrar');//añade una clase

    //while(navegacion.children[5]){     //borra parrafos cuando se hacia click en la x de nav */
        //navegacion.removeChild(navegacion.children[5]);
    //}
    navegacion.appendChild(btnCerrar);//añade una nueva clase hijo y se muestra x abajo //(botonCerrar no funciona) si funciona al cambiar a (btnCerrar)
    cerrarMenu(btnCerrar, overlay);
}

//cargar imagenes de forma sincronizada
const observer = new IntersectionObserver((entries, observer)=>{ //entries es la informacion que se tiene que observar y observer ve cuando haya una interseccion
    entries.forEach(entry=>{ //carga del entry (informacion)
        if(entry.isIntersecting){
            const imagen = entry.target;
            observer.unobserve(imagen) //deja de visualizar
        }
    });
});
 
//cargar imagenes
imagenes.forEach(imagen=>{ //cada imagen iterara en imagenes
    imagen.src = imagen.dataset.src; //muestra la imagen para cargar con el data-src del html
    observer.observe(imagen); //visualiza las imagenes
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();//al hacer click el overlay se quitara
        boton.remove();//otra forma de borrar parrafos cuando se hace click en la x de nav 
    });

    overlay.onClick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');//al hacer click en el color transparente se oculta navegacion tambien
        boton.remove();//otra forma de borrar parrafos cuando se hace click en la x de nav 
    }
}

//Arreglo de platillos    
/*const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo'); //selecciona la clase platillo del html

    //no funciona,algo del filter
    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);//el arreglo platilloArreglo se copia, se hace referencia y en cada iteracion se introducira un platillo
    //filtrar por platillo
    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensaladas'); //filter generea un nuevo arreglo y ensalada lo busca en data-platillo
    const pastas = platillosArreglo.filter(pasta=> pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza=> pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres,platillosArreglo);
}*/

//no funciona, seria asi para cada platillo
/*const mostrarPlatillos = (ensaladas, pastas, pizzas, postres) =>{
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    });
}*/

/*
const limpiarHtml = (contenedor) => {  //mientras haya contenido borra el anterior para filtro de platillos
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}*/