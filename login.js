console.log("VTG")

$("#login_form").submit(e => {
    e.preventDefault();
    localStorage.clear();
    iniciar()
})

function iniciar(){
    var campos = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    } 

    Enviar_API(JSON.stringify(campos), 'auth', datos => { 
        if (datos.estado) {
            
            localStorage.setItem("accessToken", datos.accessToken)     
            var url = 'default/vtg.html';
            window.location.href = url;
    
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: datos.error
            })
        }
        session()
    })
}


function session() {
    Obtener_API(null, 'session', datos => {
        if (datos.estado) {
            //console.log(datos.usuario.nombres)
            localStorage.setItem("nombreUsuario", datos.usuario.nombres)   
            localStorage.setItem("correoUsuario", datos.usuario.correo) 
            
        } else {
            cerrarSesion("Su sesión ha caducado o ha sido deshabilitado. Vuelva a ingresar.")
        }
    },false)
   
}


function cerrarSesion(mensaje) {
    let timerInterval
    Swal.fire({
        title: 'Cerrando Sesión!',
        html: mensaje,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
            localStorage.clear()
            window.location.href = "/"
            
        })
}