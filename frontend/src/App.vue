
<template>
  <div id="app">
    <global-component></global-component>
    <local-component></local-component>
  </div>
</template>

<script>
  import LocalComponent from './components/local-component'

  export default {
    name: 'app',
    components: {
     LocalComponent
    }
  }
  
</script>
