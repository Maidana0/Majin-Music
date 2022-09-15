const logOut= document.querySelector ('#salir button')
let usuario = localStorage.getItem ('usuario')
const msj   = document.querySelector ('#msj')
usuario == "Nino00" && msj.classList.remove("no")                        
usuario && logOut.classList.remove ("no")
logOut.addEventListener ('click', () => {
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

//-------------------- LISTAS -------------------- 

const listaR = () => {
    // fetch ("https://raw.githubusercontent.com/Maidana0/Majin-Music/main/data.json")
    fetch ("../data.json")
    .then ( (res) => res.json ())
    .then ( (data) => {
    let listita = document.querySelector("#listas")
    data.listas.forEach ( (li ) => {
                let div = document.createElement ('div')
                div.classList.add("playlist")
                div.innerHTML = `${li.li}`
                listita.append (div)
    } )

    })
    .catch ( (err) => {
        (document.querySelector("#listas")).innerHTML= 
        '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>'
        console.log(err)}
        )
}
document.querySelector("#listas") && listaR()
//-------------------- MENSAJES -------------------- 
if (document.getElementById('listaMensajes')){
        const contacto = JSON.parse(localStorage.getItem ('mensaje'))
        const listaMensajes = document.getElementById('listaMensajes')
        const borrar = document.querySelector ('#borrar')
            if (contacto){
                contacto.forEach ( (mensajes ) => {
                    let li = document.createElement ('li')
                    li.innerHTML = ` <h1> ${mensajes.nombre} </h1> <hr>
                    <h2><span class="letraMsj"> Email:   </span>  ${mensajes.email}   </h2>
                    <h2><span class="letraMsj"> Motivo:  </span>  ${mensajes.motivo}  </h2>
                    <h2><span class="letraMsj"> Mensaje: </span>  ${mensajes.mensaje} </h2>
                    <br>`
                    listaMensajes.append (li)
                })
            }
        borrar.addEventListener ('click', () => {
                                localStorage.removeItem ('mensaje')
                                location. reload() }    
                                )
}
//-------------------- CONTACTO -------------------- 
if (document.querySelector("#contacto")){
    const formContact = document.querySelector ('#formContact')
        const contactNombre =  document.querySelector ('#nombre')
        const contactEmail  =  document.querySelector ('#email')
        const contactMotivo =  document.querySelector ('#motivo')
        const contactMensaje=  document.querySelector ('#mensaje')
        const guardar =  document.querySelector ('#formContact button')
        const msjViejos = JSON.parse (localStorage.getItem ('mensaje') ) || []

const guardarMensaje = (e) => { e.preventDefault()
    const nombre    = contactNombre.value;   const email     = contactEmail.value
    const motivo    = contactMotivo.value;   const mensaje   = contactMensaje.value
    const contacto  = {nombre,email,motivo,mensaje}
    msjViejos.push (contacto)
    localStorage.setItem ('mensaje', JSON.stringify (msjViejos) )
    formContact.reset()
    Toastify({
        text: 'Mensaje Enviado!!',
        duration: 2500,
        gravity: "bottom",
        position: "right",
        style: {
                background: "black",
                color: "yellow",
                boxShadow: "0px 0px 3px 3px yellow",
                margin: "13vh 2vh",
                fontFamily: 'Rajdhani', 
                fontWeight: '900',
            },
    }).showToast() 
}
guardar.addEventListener ('click', (guardarMensaje) )
}
//-------------------- ARTISTA -------------------- 


