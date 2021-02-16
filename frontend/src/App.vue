
<template>
  <v-app id="app">
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  
</template>

<script>
  import LocalComponent from './components/local-component'
  import Header from './components/Header'
  export default {
    name: 'app',
    components: {
     LocalComponent,
     Header
    }
  }

</script>
