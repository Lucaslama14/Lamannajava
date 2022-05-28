// funcion de bienvenida al usuario para que coloque su nombre y quede guardado en el local storage.
// y por mas que recargue la pagina queda logeado




/* const {value: user} = Swal.fire({
  icon: 'success',
  title: 'Iniciar sesion',
  html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre">
  <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
  confirmButtonText: 'Iniciar',
  focusConfirm: false,
  preConfirm: () => {
    const login = Swal.getPopup().querySelector('#login').value
    const password = Swal.getPopup().querySelector('#password').value
    if (!login || !password) {
      Swal.showValidationMessage(`Por favor ingrese nombre y contraseña`)
    }
    return { login: login, password: password }
  }

})  */



/*     const regex = new RegExp('^[A-Z]+$', 'i');
    const usuarioRegistrado = window.localStorage.getItem('nombreUsuario');
    const nombre = usuarioRegistrado ? usuarioRegistrado : prompt('Ingrese su nombre.');
    if (regex.test(nombre)) {
      window.localStorage.setItem('nombreUsuario', nombre);
      alert(`Hola ${nombre}, bienvenido!`);
    } else {
     alert('Ingrese un nombre valido.');
    }
  }
   function borrarUsuarioRegistrado() {
    localStorage.removeItem('nombreUsuario');
  } */








// funcion de bienvenida que guarda el nombre en el local storage pero al 
// recargar la pagina se borra y da una nueva bienvenida

//function saludar() {
//const regex = new RegExp('^[A-Z]+$', 'i');
//const nombre = prompt('Ingrese su nombre.');
//  if (regex.test(nombre)) {
//    window.localStorage.setItem('nombreUsuario', nombre);
//    alert(`Hola ${nombre}, bienvenido!`);
//  } else {
//    alert('Ingrese un nombre valido.');
//  }
//}
//saludar();

// funcion de bienvenida para que el cliente ingrese su nombre

//let nombre = prompt("Ingrese su nombre");
//function saludar(nombre) {
//  var regex = new RegExp('^[A-Z]+$', 'i');
//  if ( regex.test(nombre) ) {
//   alert(`Hola ${nombre}, Bienvenido`);
// }else {
//   alert('Ingrese un nombre valido')
//  }
//}

//saludar(nombre);