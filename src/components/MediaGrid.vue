<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
      <v-card hover class="ma-3" min-height="300">
        <v-layout column align-center fill-height class="text-center">
          
          <v-img :src="(isIMDB == false)?(imageURL + movie.backdrop_path) : movie.full_imageURL"></v-img>

          <v-card-title class="font-weight-light; word-wrap: break-word;" @click="chooseMovie(movie)">{{movie.title || movie.name}}</v-card-title>
          <v-spacer></v-spacer>

        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ["movies", "imageURL", "isIMDB"],
    data() {
      return {};
    },
    methods:{
      chooseMovie(movie){
        this.$store.dispatch('movie/setChoosenMovie', movie)
        this.$router.push('movie-detail')
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
