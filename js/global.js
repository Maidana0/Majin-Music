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