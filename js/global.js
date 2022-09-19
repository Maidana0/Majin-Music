const logOut= document.querySelector ('#salir button')
let usuario = localStorage.getItem ('usuario')
const msj   = document.querySelector ('#msj')
  
if (usuario === "Nino00"){
    let nav = document.querySelector("#elmenu")
    let limsj = document.createElement ('li')
    limsj.classList.add("nav-menu-item")
    limsj.innerHTML = '<a id="msj" href="./mensajes.html" class="nav-menu-link">Mensajes</a>'
    nav.prepend (limsj)
}
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
//-------------------- SCROLL --------------------        
if (document.getElementById("btn_scrolltop")){
const btn_scrolltop = document.getElementById("btn_scrolltop")
  btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })
 window.onscroll = () => {
  add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
  if (window.scrollY < 500) {
    btn_scrolltop.classList.remove("btn-scrolltop-on")
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on")
  }
} 
}
//-------------------- LISTAS -------------------- 
const lista1 = () => {
    fetch ("../data.json")
    .then ( (res) => res.json ())
    .then ( (data) => {
    let listita = document.querySelector("#listas")
    data.listas.forEach ( (li ) => {
                let div = document.createElement ('div')
                div.classList.add("playlist")
                div.innerHTML = `${li.li}`
                listita.append (div)
                })
    })
    .catch ( (err) => {
        (document.querySelector("#listas")).innerHTML= 
        '<h1 class="error centrar">Ocurrio un Error inesperado. <br> Vuelva a intentarlo</h2>'
        console.log(err)}
        )
}
document.querySelector("#listas") && lista1()

if (document.querySelector("#listas")){
let listita2 = document.querySelector("#listas2")
const lista2 = () => {
  fetch ("../data.json")
  .then ( (res) => res.json ())
  .then ( (data) => {
  data.listas2.forEach ( (li ) => {
              let div2 = document.createElement ('div')
              div2.classList.add("playlist")
              div2.innerHTML = `${li.li}`
              listita2.append (div2)
              })
  })
}
const btnMostrar = document.querySelector("#mas")
const btnNoMostrar = document.querySelector("#menos")

btnMostrar.addEventListener('click', ()=>{
  listita2.classList.remove ("no")
  lista2()
  btnMostrar.classList.add ("no")
  btnNoMostrar.classList.remove ("no")
})
btnNoMostrar.addEventListener('click',()=>{
  listita2.innerHTML = ' '
  btnMostrar.classList.remove ("no")
  btnNoMostrar.classList.add ("no")
  listita2.classList.add ("no")
})
}
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
// No se como hacer para que no se envie sin completar todos los datos o que se cumpla el required del html jaja
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

if (document.querySelector("#artistas")){
const btnMostrar = document.querySelector("#mas")
const btnNoMostrar = document.querySelector("#menos")
const artistas = document.querySelector ("#artistas")

const artista00 = () => {
  fetch ("../data.json")
  .then ( (res) => res.json ())
  .then ( (data) =>{
              data.artistas.forEach ( (todo ) => {
              let div = document.createElement ('div')
              div.classList.add("artista-lista")
              div.innerHTML = `${todo.art}`
              artistas.append (div)
              })
  })
}
btnMostrar.addEventListener('click', ()=>{
    artistas.classList.remove ("no")
    artista00()
    btnMostrar.classList.add ("no")
    btnNoMostrar.classList.remove ("no")
})
btnNoMostrar.addEventListener('click',()=>{
    artistas.innerHTML = ' '
    btnMostrar.classList.remove ("no")
    btnNoMostrar.classList.add ("no")
    artistas.classList.add ("no")
})
}