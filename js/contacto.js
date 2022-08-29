const formContact = document.querySelector ('#formContact')
        const contactNombre =  document.querySelector ('#nombre')
        const contactEmail  =  document.querySelector ('#email')
        const contactMotivo =  document.querySelector ('#motivo')
        const contactMensaje=  document.querySelector ('#mensaje')
        const guardar =  document.querySelector ('#formContact button')

const msjViejos = JSON.parse (localStorage.getItem ('mensaje') ) || []

const guardarMensaje = (e) => {
        e.preventDefault()
        const nombre    = contactNombre.value
        const email     = contactEmail.value
        const motivo    = contactMotivo.value
        const mensaje   = contactMensaje.value
        const contacto  = {nombre,email,motivo,mensaje}
        msjViejos.push (contacto)
    localStorage.setItem ('mensaje', JSON.stringify (msjViejos) )
     formContact.reset()
}
guardar.addEventListener ('click', guardarMensaje)
