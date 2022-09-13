const hola          = document.querySelector ('.holaT')
const content       = document.getElementById ('content')
const generos       = document.getElementById ('Generos')
const inputNombre   = document.querySelector ('#nombre')
const formNombre    = document.querySelector ('#formulario')
let usuario         = localStorage.getItem ('usuario')
const logOut         = document.querySelector ('#salir button')
const msj = document.querySelector ('#msj')

usuario == "Nino00" && msj.classList.remove("no")

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

const salir = document.querySelector ('#salir')
    salir.addEventListener ('click', () => {
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
//-------------------- MENU --------------------             














const lista = (genero) => {
        // fetch ("https://raw.githubusercontent.com/Maidana0/Majin-Music/main/data.json")
        fetch ("./data.json")
            .then ( (res) => res.json ())
            .then ( (data) => {
                console.log (data)
            })
        
        
        }








const botonOtros = document.querySelector ('.otros')
 botonOtros.onclick      = () => {listaOtros.classList.remove ("no"), cerrar() } 

        const cerrarOtros       = document.querySelector ('#listaOtros button')
        cerrarOtros.onclick     = () => {listaOtros.classList.add ("no"), abrir()}
        
const botonRock = document.querySelector ('.rock')
botonRock.onclick       = () => {listaRock.classList.remove ("no"),cerrar()   }
        const cerrarRock        = document.querySelector ('#listaRock button')
        cerrarRock.onclick      = () => {listaRock.classList.add ("no"), abrir()}

const botonNacional = document.querySelector ('.nacional')
botonNacional.onclick   = () => {listaNacional.classList.remove ("no"),cerrar()}
        const cerrarNacional    = document.querySelector ('#listaNacional button')
        cerrarNacional.onclick  = () => {listaNacional.classList.add ("no"), abrir()}

const botonReggae = document.querySelector ('.reggae')
botonReggae.onclick     = () => {listaReggae.classList.remove ("no"),cerrar()}
        const cerrarReggae      = document.querySelector ('#listaReggae button')
        cerrarReggae.onclick    = () => {listaReggae.classList.add ("no"),abrir()}


//-------------------------------------------


        
      

