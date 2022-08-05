const btn = document.getElementById('btn-form');
let nombre = document.getElementById('input-nombre')
let email = document.getElementById('input-email')
let textarea = document.getElementById('input-textarea')
let incorrecto = document.getElementById('incorrecto')
let correcto = document.getElementById('correcto')
let incorrectoEmail = document.getElementById('incorrecto-email')
let incorrectoConsulta = document.getElementById('incorrecto-consulta')


const validarYEnviar = () => {
    let patronNombre = /[a-zA-Z]{3}/
    let patronEmail = /@/
    let patronConsulta = /[a-zA-Z]/

    if(patronNombre.test(nombre.value)){
        incorrecto.classList.remove('incorrecto-show')
    } else {
        incorrecto.classList.add('incorrecto-show')
        return false

    }

    if(patronEmail.test(email.value)) {
        incorrectoEmail.classList.remove('incorrecto-show')

    } else {
        incorrectoEmail.classList.add('incorrecto-show')
        return false
    }


    if(patronConsulta.test(textarea.value)) {
        incorrectoConsulta.classList.remove('incorrecto-show')
        return false
    }   else {
        incorrectoConsulta.classList.add('incorrecto-show')

    }

}


btn.addEventListener("click", validarYEnviar)

