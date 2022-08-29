const salir = document.querySelector ('#salir')
const logOut= document.querySelector ('#salir button')
let usuario = localStorage.getItem ('usuario')
const msj   = document.querySelector ('#msj')

usuario == "Nino00" && msj.classList.remove("no")                        
usuario && logOut.classList.remove ("no")

salir.addEventListener ('click', () => {
                        localStorage.removeItem ('usuario')
                        location. reload() }    
                        )

