<template>
  <div id="caja-formulario">
    <h1>Iniciar sesión</h1>
    
    <form id="formulario">
      <label class="lform" for="fnombre">Usuario: </label>
      <input  v-model="user" class="iform" type="text" id="fnombre" name="fnombre"></br>
      
      <label class="lform" for="fapellido">Contraseña: </label>
      <input v-model="pass" class="iform" type="password" id="fcontraseña" name="fcontraseña"></br>

    </form>

    <input v-on:click="hacerLogin" type="button" id="boton-aceptar" value="Aceptar"><br>
    <br><br>
    <a href="" id="mensaje-no-usuario" v-on:click="irRegistrarse" @click="$emit('speak', this.message)" >¿Aún no tiene un usuario?</a>

    <router-link to="/registro">Crear Usuario</router-link>

  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      user: "",
      pass: "",
      Autenticado: null,
      no_ocultar_login: false,
      message: " "

    };  
  },

  methods: {
    hacerLogin: function () {
      this.user;
      var datosJSon = {
        username: this.user,
        contrasena: this.pass,
      };
      console.log(datosJSon);

      if (this.user != null || this.contrasena != null) {
        axios
          // .post("http://127.0.0.1:8000/cliente/auth" , datosJSon) localmente
          .post(
            "https://reserva-hotel-fastapi.herokuapp.com/cliente/auth",
            datosJSon
          )
          .then((respuesta) => {
            if (respuesta.data.Autenticado) {
              console.log("AUTENTICADO CORRECTAMENTE");
              alert("AUTENTICADO CORRECTAMENTE");
              this.Autenticado = true;
              console.log(this.Autenticado)
             
              
            } else {
              console.log("CONTRASEÑA INCORRECTA");
              alert("CONTRASEÑA INCORRECTA");
            }
          })
          .catch((error) => {
            alert("El usuario no existe");
          });
      }else{
        alert("VERIFIQUE LOS DATOS")
      }

    },

    irRegistrarse: function(){
      alert("DEBE CREAR UN USUARIO")
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#caja-formulario {
  margin: 80px 280px 80px;
  background-color: rgb(29, 31, 38);
  height: 300px;

  border: none;
  border-radius: 15px;

  color: rgb(123, 180, 140);
}

h1 {
  padding-top: 30px;
  font-size: 2.5em;
}

label {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-right: 10px;
  color: coral;
  
}

#formulario {
  font-size: 20px;
}

#formulario input {
  height: 23px;
  margin: 0px 0px 20px 0px;
}

#boton-aceptar {
  width: 100px;
  height: 33px;
  background-color: rgb(78, 67, 63);
  font-family:roboto;
  margin: 0px;
  border-style: none;
  font-size: 1.2em;
  color: white;
}

#boton-aceptar:hover {
  background-color: gray;
  color: white;
  font: bold;
}

#boton-aceptar:active {
  background-color: rgb(48, 48, 48);
  font: bold;
}

.iform {
  background-color: transparent;
  color:  white;
  border-style: solid;
  font-family: 'Roboto', sans-serif;
  font: bold;
  border-radius: 10px;

  font-family: 'Roboto', sans-serif;
  font-style: bold;
}

.iform:focus{
  border-color: yellow;
  
}

#mensaje-no-usuario {
  color: rgb(148, 148, 148);
  text-decoration: none;
}

#mensaje-no-usuario:hover {
  color: white;
}


</style>
