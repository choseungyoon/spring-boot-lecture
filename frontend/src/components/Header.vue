<template>
  <nav>
      <v-app-bar
      app
      color="primary"
      dark
      >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="30"
        />
      </div>

      <v-toolbar-title>
        <span class="second-word font uppercase">TO FIRE</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/home">HOME</v-tab>
          <v-tab to="/about">SEARCH</v-tab>
          <v-tab>PORTFOLIO</v-tab>
        </v-tabs>

      </template>
    </v-app-bar>
  </nav>
</template>

<script>

  // 뷰 라우터를 인스턴스에 등록
  export default {
    name: 'Header' 
  }
</script>