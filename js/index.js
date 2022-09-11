const hola          = document.querySelector ('.holaT')
const content       = document.getElementById ('content')
const generos       = document.getElementById ('Generos')
const inputNombre   = document.querySelector ('#nombre')
const formNombre    = document.querySelector ('#formulario')
let usuario         = localStorage.getItem ('usuario')
const logOut         = document.querySelector ('#salir button')
const msj = document.querySelector ('#msj')
const msjC   = document.querySelector ('#msjC')

usuario == "Nino00" && msjC.classList.remove("no")
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


const botonOtros = document.querySelector ('.otros')
 botonOtros.onclick      = () => {listaOtros.classList.remove ("no"), cerrar() } 

        const cerrarOtros       = document.querySelector ('#listaOtros button')
        cerrarOtros.onclick     = () => {listaOtros.classList.add ("no"), abrir()}
        
const botonRock = document.querySelector ('.rock')
botonRock.onclick       = () => {listaRock.classList.remove ("no"),cerrar()}
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
const loading = document.querySelector ("#loading")

const menubtn = document.querySelector ('#menuBtn')
const listita = document.querySelector ('#menuC')

menubtn.addEventListener('click', ()=>{
    listita.classList.remove('no')


})

const exito = document.querySelector ('#exito')
exito.addEventListener('click', ()=>{
    listita.classList.add('no')


})


