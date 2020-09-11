<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <h2 class="center">CuidaApp</h2>
    <h2 class="center">A sua saúde na palma da mão</h2>
    <div>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="5.5">
            <v-card :to="card.link">
              <v-img :src="card.src" class="white--text align-end"></v-img>
              <v-card-title class="justify-center" v-text="card.title"></v-card-title>
              <v-card-actions>
                <v-btn block text outlined :to="card.link">Acessar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/farmacias.json";

export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },

  data: () => ({
    cards: [
      {
        title: "Fármacias",
        src:
          "https://raw.githubusercontent.com/CuidaApp/images-upload/master/img-layout/farmacia.png",
        link: "/farmacias",
      },
      {
        title: "Remédios",
        src:
          "https://raw.githubusercontent.com/CuidaApp/images-upload/master/img-layout/remedio.png",
        link: "/remedios",
      },
      {
        title: "Boletim de Monitoramento",
        src:
          "https://raw.githubusercontent.com/CuidaApp/images-upload/master/img-layout/boletim.png",
        link: "/boletim",
      },
      {
        title: "Entrevistas",
        src:
          "https://raw.githubusercontent.com/CuidaApp/images-upload/master/img-layout/entrevista.png",
        link: "/entrevistas",
      },
      {
        title: "Quiz",
        src:
          "https://raw.githubusercontent.com/CuidaApp/images-upload/master/img-layout/quiz.png",
        link: "/quiz",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  .subtitle {
    color: grey;
    font-size: 0.98rem;
    float: right;
    font-weight: normal;
  }
}

p {
  margin-top: 0.4rem;
}

.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}

.section {
  margin-bottom: 3rem;
}

.group {
  margin-bottom: 4rem;
}
</style>
