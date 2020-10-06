<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/quiz.png" />
    <br />
    <h2 class="center">Quiz</h2>
    <div>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="5.5">
            <v-card link :href="card.link">
              <v-img :src="card.src" class="white--text align-end"></v-img>
              <v-card-title
                class="justify-center"
                v-text="card.title"
              ></v-card-title>
              <v-card-actions>
                <v-btn block text outlined link :href="card.link"
                  >Acessar</v-btn
                >
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
export default {
  name: "home",

  data: () => ({
    cards: [
      {
        title: "Tema: Biologia Nivel 1",
        link: "/quiz-biologia/quiz-code/index.html",
      },
      {
        title: "Tema: Química Nivel 1",
        link: "/quiz-quimica/quiz-code/index.html",
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
