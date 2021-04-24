<template>
  <v-container>
    <v-layout align-center justify-space-around column fill-height wrap class="my-5 text-center">
      <v-btn @click="test()">test</v-btn>
      <h1
        class="display-3 my-3 font-weight-thin white--text my-5"
      >Rating Movies and Find Your Own Favorite</h1>

      <v-img contain width="50vw" height="50vh" src="../assets/undraw_movie_night_fldd.svg"></v-img>

      <v-btn color="primary" min-width="200" class="my-5" router to="/movies-playing-now">Explore</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import { getFilmID, getFilmInfo } from '../apis/omdbapi'
import { getAllFilmInfo } from '../plugins/getListMovie'
const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
  params: {genre: '/chart/popular/genre/adventure'},
  headers: {
    'x-rapidapi-key': '901200ee6emsh54a0543ff6caa1ap12e781jsna59d18e06f5b',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};


  export default {
    components: {},
    data() {
      return {};
    },
    methods:{
      async test(){
        // axios.request(options).then(function (response) {
        //   console.log(response.data);
        //   const x = response.data[0].split("/")
        //   console.log(x[2]);
        //   getFilmInfo(x[2]).then((res)=>{
        //     console.log(res);
        //   });
        // }).catch(function (error) {
        //   console.error(error);
        // });
        await getAllFilmInfo(0,10);
      }
    },
    created(){
      // this.test();
    }
    
  };
</script>

<style>
</style>
