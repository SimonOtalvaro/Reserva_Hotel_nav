<template>
  <div id="caja-formulario">
    <h1>Registrarse</h1>
    
    <form id="formulario">

        <label class="lform" for="fnombres">Nombres: </label>
        <input  class="iform" type="text" id="fnombres" name="fnombres"></br>

        <label class="lform" for="fapellidos">Apellidos: </label>
        <input  class="iform" type="text" id="fapellidos" name="fapellidos"></br>

        <label class="lform" for="fcedula">Cedula: </label>
        <input  class="iform" type="text" id="fcedula" name="fcedula"></br>

        <label class="lform" for="femail">Email: </label>
        <input  class="iform" type="text" id="femail" name="femail"></br>

        <label class="lform" for="fcelular">Celular: </label>
        <input  class="iform" type="text" id="fcelular" name="fcelular"></br>

        <label class="lform" for="fcontraseña">Contraseña: </label>
        <input class="iform" type="password" id="fcontraseña" name="fcontraseña"></br>

        <label for="Hombre">Hombre: </label>
        <input type="radio" id="Hombre" value="Hombre" v-model="sexo"><br>

        <label for="Mujer">Mujer: </label>
        <input type="radio" id="Mujer" value="Mujer" v-model="sexo"><br>

    </form>

    <input type="button" id="boton-registro" value="Registrarme">
    <router-link to="/">Ya tengo Usuario</router-link>

  </div>
</template>

<script>
export default {
  name: 'Registro',
  data () {
    return {
        msg: 'Componente Registro de usuarios',
        select: null,
        sexo:[
            {Value:'Mujer',text:'Mujer'},
            {Value:'Hombre',text:'Hombre'},
            ]
    }
  }
}
</script>

<style scoped>

#caja-formulario {
  margin: 80px 180px 80px;
  background-color: rgb(29, 31, 38);
  height: 320px;

  border: none;
  border-radius: 15px;

  color: rgb(123, 180, 140);
}

h1 {
  padding-top: 10px;
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

#boton-registro {
  width: 120px;
  height: 33px;
  background-color: rgb(78, 67, 63);
  font-family:roboto;
  margin: 0px;
  border-style: none;
  font-size: 1.2em;
  color: white;
}

#boton-registro:hover {
  background-color: gray;
  color: white;
  font: bold;
}

#boton-registro:active {
  background-color: rgb(48, 48, 48);
  font: bold;
}

#boton-YaTengoUsuario {
  width: 150px;
  height: 33px;
  background-color: rgb(78, 67, 63);
  font-family:roboto;
  margin: 0px;
  border-style: none;
  font-size: 1.2em;
  color: white;
}

#boton-YaTengoUsuario:hover {
  background-color: gray;
  color: white;
  font: bold;
}

#boton-YaTengoUsuario:active {
  background-color: rgb(48, 48, 48);
  font: bold;
}


</style>