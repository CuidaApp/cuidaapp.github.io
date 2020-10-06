<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/farmacia.png" />
    <br />
    <h2 class="center">Farmácias</h2>
    <div>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="5.5">
            <v-card>
              <v-img :src="card.src" class="white--text align-end"></v-img>
              <v-card-title
                class="justify-center"
                v-text="card.title"
              ></v-card-title>
              <v-card-actions>
                <v-btn
                  block
                  text
                  outlined
                  link
                  :href="card.linkTel"
                  :target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon> mdi-phone </v-icon>
                  <v-card-text
                    class="center"
                    v-text="card.telFixo"
                  ></v-card-text>
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn
                  block
                  text
                  outlined
                  link
                  :href="card.linkWhats"
                  :target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon> mdi-whatsapp </v-icon>
                  <v-card-text
                    class="center"
                    v-text="card.telWhats"
                  ></v-card-text>
                </v-btn>
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
  computed: {},

  data: () => ({
    cards: [
      {
        title: "Farmácia Novafar",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaNovaFar.png",
        telFixo: "(28) 3533-1738",
        linkTel: "tel:2835331738",
        telWhats: "(28) 99913-3610",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999133610",
      },
      {
        title: "Farmácia Paraíso",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaParaiso.png",
        telFixo: "(28) 3533-0254",
        linkTel: "tel:2835330254",
        telWhats: "(28) 99971-2091",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999712091",
      },
      {
        title: "Farmácia PharmaSul",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaPharmaSul.png",
        telFixo: "(28) 3533-1156",
        linkTel: "tel:2835331156",
        telWhats: "(28) 99992-1777",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999921777",
      },
      {
        title: "Farmácia Really",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaReally.png",
        telFixo: "(28) 3533-1208",
        linkTel: "tel:2835331208",
        telWhats: "(28) 99972-6853",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999726853",
      },
      {
        title: "Farmácia Rio Novo",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaRioNovo.png",
        telFixo: "(28) 3533-1605",
        linkTel: "tel:2835331605",
        telWhats: "(28) 99959-1605",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999591605",
      },
      {
        title: "Farmácia União",
        src:
          "https://raw.githubusercontent.com/CuidaApp/cuidaapp.github.io/master/src/assets/farmaUniao.png",
        telFixo: "(28) 3533-1442",
        linkTel: "tel:2835331442",
        telWhats: "(28) 99905-0166",
        linkWhats: "https://api.whatsapp.com/send?phone=5528999050166",
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
