let app = new Vue({
    el: "#app",
    data: {
        catalogo: [
            {
                "nombre":"Anthrax",
                "precio":"$15000",
                "imagen": "anthrax.jpg"
            },
            {
                "nombre":"Cannibal Corpse",
                "precio":"$15000",
                "imagen": "cannibal corpse.jpg"
            },
            {
                "nombre":"Immolation",
                "precio":"$30000",
                "imagen": "immolation.jpg"
            },
            {
                "nombre":"Mayhem",
                "precio":"$15000",
                "imagen": "mayhem.jpg"
            },
            {
                "nombre":"Megadeth",
                "precio":"$15000",
                "imagen": "megadeth.jpg"
            },
            {
                "nombre":"Motley Crue",
                "precio":"$15000",
                "imagen": "motley crue.jpg"
            }
            
        ]
    }
});



document.onclick = function(event){
    if (event.target.tagName === "BUTTON" && event.target.classList.contains("btnClick")){
        var precio = parseInt(event.target.getAttribute('data-precio').replace('$', ''));
        contador = contador + precio;
        pEle.textContent = contador;
    } else if (event.target.tagName === "BUTTON" && event.target.id === "clickRestar"){
        contador = 0;
        pEle.textContent = contador;
    }
}

var clickRes = document.getElementById("clickRestar");
var btnEle = document.getElementsByClassName("btnClick");
var pEle = document.getElementById("contarClick");

var contador = 0;
