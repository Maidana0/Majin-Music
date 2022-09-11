const salir = document.querySelector ('#salir')
const logOut= document.querySelector ('#salir button')
let usuario = localStorage.getItem ('usuario')
const msj   = document.querySelector ('#msj')
const msjC   = document.querySelector ('#msjC')

usuario == "Nino00" && msjC.classList.remove("no")
usuario == "Nino00" && msj.classList.remove("no")                        
usuario && logOut.classList.remove ("no")

salir.addEventListener ('click', () => {
                        localStorage.removeItem ('usuario')
                        location. reload() }    
                        )



const menubtn = document.querySelector ('#menuBtn')
const content = document.querySelector ('#menuC')

menubtn.addEventListener('click', ()=>{
    content.classList.remove('no')


})

const exito = document.querySelector ('#exito')
exito.addEventListener('click', ()=>{
    content.classList.add('no')


})


