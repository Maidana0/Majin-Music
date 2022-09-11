const contacto = JSON.parse(localStorage.getItem ('mensaje'))
const listaMensajes = document.getElementById('listaMensajes')


// 
 if (contacto){
contacto.forEach ( (mensajes ) => {
    const li = document.createElement ('li')
    li.innerHTML = ` <h1> ${mensajes.nombre} </h1> <hr>
    <h2><span class="letraMsj"> Email:   </span>  ${mensajes.email}   </h2>
    <h2><span class="letraMsj"> Motivo:  </span>  ${mensajes.motivo}  </h2>
    <h2><span class="letraMsj"> Mensaje: </span>  ${mensajes.mensaje} </h2>
    <br>`
    listaMensajes.append (li)
} )
}

//

const borrar = document.querySelector ('#borrar')
borrar.addEventListener ('click', () => {
                        localStorage.removeItem ('mensaje')
                        location. reload() }    
                        )



