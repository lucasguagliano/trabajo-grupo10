const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == "assets/menu.svg"){
        e.target.setAttribute('src',"assets/menu.svg");
    }else{
        e.target.setAttribute('src',"assets/menu.svg");
    }
});


const iconoCarrito = document.querySelector('#icono-carrito'),
      carrito = document.querySelector('#carrito');

iconoCarrito.addEventListener('click', (e) => {

    
    carrito.classList.toggle('active');
    document.body.classList.toggle('opacity');

    
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == "assets/carrito.svg"){
        e.target.setAttribute('src',"assets/carrito.svg");
    }else{
        e.target.setAttribute('src',"assets/carrito.svg");
    }
});