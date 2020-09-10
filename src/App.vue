<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link :to="rotaH">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaF">
          <v-list-item-content>
            <v-list-item-title>Farmácias</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaR">
          <v-list-item-content>
            <v-list-item-title>Remédios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaB">
          <v-list-item-content>
            <v-list-item-title>Boletim de Monitoramento</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaE">
          <v-list-item-content>
            <v-list-item-title>Entrevistas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaQ">
          <v-list-item-content>
            <v-list-item-title>Quiz</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CuidaApp</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="justify-center">
      <span>&copy; 2020 | CuidaApp</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    rotaH: "/",
    rotaR: "/remedios",
    rotaF: "/farmacias",
    rotaB: "/boletim",
    rotaE: "/entrevistas",
    rotaQ: "/quiz",
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>