<template>
  <div id="app">
    <div class="header">
      <h1>Sistemas Reservaciones Online</h1>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>MinTic - Ciclo III - 2020</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
    data: function () {
    return {
      mesg: "Algo",
    };
  },

  methods: {
    init: function () {
      this.$router.push((name = "login"));
    },
  },
};
</script>




<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: #283747;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  
}
.header h1 {
  width: 100%;
  text-align: center;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
