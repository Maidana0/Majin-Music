const hola          = document.querySelector ('.holaT')
const content       = document.getElementById ('content')
const generos       = document.getElementById ('Generos')
const inputNombre   = document.querySelector ('#nombre')
const formNombre    = document.querySelector ('#formulario')
let usuario         = localStorage.getItem ('usuario')
const logOut         = document.querySelector ('#salir button')

const msj = document.querySelector ('#msj')

if (usuario === "Nino00"){
        let nav = document.querySelector("#elmenu")
        let limsj = document.createElement ('li')
        limsj.classList.add("nav-menu-item")
        limsj.innerHTML = '<a id="msj" href="./paginas/mensajes.html" class="nav-menu-link">Mensajes</a>'
        nav.append (limsj)
    }

if (!usuario)  {
    formNombre.addEventListener ('submit', (e) => {
        e.preventDefault() 
        const nombreF = new String (inputNombre.value)
                if (nombreF.length > 1) {
                        localStorage.setItem ('usuario', nombreF)
                        hola.innerHTML = "Bienvenidx a nuestro sitio de música!!!"
                        content.classList.remove("no")
                        content.innerHTML   = "¿Qué te gustaria escuchar " + nombreF + "?"
                        generos.className   = "generos"
                        formNombre.classList.add("no") 
                        logOut.classList.remove ("no")
                        nombreF == "Nino00" && location.reload()       
                }       
                else { hola.innerHTML = 
'<img src="./imagenes/esperando.png" class="esperando"> <p> Vuelva a Intentarlo.</p>'}                                  
})}            
else {
        const nombreF  = localStorage.getItem ('usuario')
        hola.innerHTML = "Bienvenidx a nuestro sitio de música!!!"
        content.classList.remove("no")
        content.innerHTML = "¿Qué te gustaria escuchar " + nombreF + "?"
        generos.className = "generos"
        formNombre.classList.add("no")
        logOut.classList.remove ("no")
}


logOut.addEventListener ('click', () => {
                        localStorage.removeItem ('usuario')
                        location. reload() }    
                        )
                        
//------------------------------------------------------------------------------
function cerrar () {        content.classList.add ("no"),
                            generos.className = "no"
                            hola.innerHTML =  "Esperamos que disfrutes de la música!!!"
                        }

 function abrir () {        content.classList.remove ("no")
                            generos.className = "generos"
                            hola.innerHTML =  "Bienvenidx a nuestro sitio de música!!!"
                        }                            

//-------------------------------------------
const loading = document.querySelector ("#loading")

//-------------------- MENU --------------------

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
                        
navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");
                        
            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "Cerrar menú");
            } else {
                 navToggle.setAttribute("aria-label", "Abrir menú");
                  }
});         
//------------- ----LISTAS---- ------------------
const listaRock =  document.querySelector("#listaRock")
const listaReggae =  document.querySelector("#listaReggae")
const listaNacional =  document.querySelector("#listaNacional")
const listaOtros =  document.querySelector("#listaOtros")
//------------- LISTA ROCK ------------------
const listaR = () => {
        fetch ("./data.json")
        .then ( (res) => res.json ())
        .then ( (data) => {
        listaRock.innerHTML=` ${data.carga} ${data.rock.titulo} ${data.rock.boton} ${data.rock.enlace}`
        let cerrarR = document.querySelector ('#listaRock button')
        cerrarR.onclick     = () => {listaRock.classList.add ("no"), abrir()}  
        })
        .catch ( () => {
        listaRock.innerHTML= '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>',
        hola.innerHTML = ". . ."}
        )
}
const botonRock = document.querySelector ('.rock')
botonRock.onclick = () => {listaRock.classList.remove ("no"), cerrar(), listaR() } 

//------------- LISTA OTROS ------------------
const listaO = () => {
        fetch ("./data.json")
        .then ( (res) => res.json ())
        .then ( (data) => {
        listaOtros.innerHTML=` ${data.carga} ${data.otros.titulo} ${data.otros.boton} ${data.otros.enlace}
                                `
        let cerrarOtros = document.querySelector ('#listaOtros button')
        cerrarOtros.onclick     = () => {listaOtros.classList.add ("no"), abrir()}  
        })
        .catch ( () => {
        listaOtros.innerHTML= '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>',
        hola.innerHTML = ". . ."}
        )
}
const botonOtros = document.querySelector ('.otros')
botonOtros.onclick = () => {listaOtros.classList.remove ("no"), cerrar(), listaO() } 

//------------- LISTA ROCK NACIONAL ------------------
const listaRN = () => {
        fetch ("./data.json")
        .then ( (res) => res.json ())
        .then ( (data) => {
        listaNacional.innerHTML=` ${data.carga} ${data.nacional.titulo} ${data.nacional.boton} ${data.nacional.enlace}
                                `
        let cerrarNacional = document.querySelector ('#listaNacional button')
        cerrarNacional.onclick = () => {listaNacional.classList.add ("no"), abrir(),listaNacional.innerHTML=" " }  
        })
        .catch ( () => {listaNacional.innerHTML= '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>',
        hola.innerHTML = ". . ."}
        )
}
const botonNacional = document.querySelector ('.nacional')
botonNacional.onclick   = () => {listaNacional.classList.remove ("no"),cerrar(), listaRN()}
//------------- LISTA REGGAE ------------------
const listaReg = () => {
        fetch ("./data.json")
        .then ( (res) => res.json ())
        .then ( (data) => {
        listaReggae.innerHTML=` ${data.carga} ${data.reggae.titulo} ${data.reggae.boton} ${data.reggae.enlace}
                                `
        let cerrarReggae = document.querySelector ('#listaReggae button')
        cerrarReggae.onclick = () => {listaReggae.classList.add ("no"), abrir(),listaReggae.innerHTML=" " }  
        })
        .catch ( () => {
        listaReggae.innerHTML= '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>',
        hola.innerHTML = ". . ."}
        )
}
const botonReggae = document.querySelector ('.reggae')
botonReggae.onclick     = () => {listaReggae.classList.remove ("no"),cerrar(), listaReg()}
//-------------------------------------------
        

