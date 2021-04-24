<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
      <v-card hover class="ma-3" min-height="300">
        <v-layout column align-center fill-height class="text-center">
          <v-img :src="imageURL + movie.backdrop_path"></v-img>

          <v-card-title class="font-weight-light" @click="test(movie)">{{movie.title || movie.name}}</v-card-title>
          <v-spacer></v-spacer>

        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ["movies", "imageURL"],
    data() {
      return {};
    },
    methods:{
      test(movie){
        this.$store.dispatch('movie/setChoosenMovie', movie)
        this.$router.push('top-rated-shows')
      }
    }
  };
</script>

<style scoped>
  .v-card:hover {
    background: #536dfe;
  }
  .v-card:hover #synopsis {
    /* background: #303030; */
    background: #303030;
  }
  #synopsis {
    background: #536dfe;
  }
</style>
