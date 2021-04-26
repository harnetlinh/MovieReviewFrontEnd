<template>
  <v-container>
    <media-nav
      :pageTitle="pageTitle"
      :sortCriteria="sortCriteria"
      @popularity="sortBy('popularity')"
      @vote_average="sortBy('vote_average')"
      @release_date="sortBy('release_date')"
    ></media-nav>
    
    <media-grid :movies="movies" :imageURL="imageURL" :isIMDB="isIMDB"></media-grid>
    <!-- <div class="text-center" v-if="showPagination">
      <v-pagination color="primary" v-model="page" :length="3" :value="page"></v-pagination>
    </div> -->
  </v-container>
</template>

<script>
  import {getAllFilmInfo} from '../plugins/getListMovie'
  import axios from "axios";
  import MediaGrid from "../components/MediaGrid.vue";
  import MediaNav from "../components/MediaNav.vue";

  export default {
    components: {
      mediaGrid: MediaGrid,
      mediaNav: MediaNav
    },
    data: function() {
      return {
        movies: [],
        pageTitle: "Movies Playing Now",
        isIMDB: false,
        imageURL: "https://image.tmdb.org/t/p/w1280",
        sortCriteria: "Most Popular",
        sortedBy: "popularity",
        page: 1,
        showPagination: false
      };
    },
    methods: {
      async getListMoviebyPopular(){
        this.movies = [];
        let result = await getAllFilmInfo();
        result.forEach(movie => {
          console.log(movie);
          this.movies.push({
            original_title: movie.data.Title,
            full_imageURL: movie.data.Poster,
            title: movie.data.Title,
            name: movie.data.Title,
            movie_id: movie.data.imdbID,
            id: movie.data.imdbID
          })
        });
        // this.movies = result;
        this.isIMDB = true;
      },
      init() {
        this.movies = [];
        if(this.movies.length > 0){
          this.movies = [];
        }
        const key = process.env.VUE_APP_KEY;
        axios
          .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
              key +
              "&language=en-US&page=" +
              this.page
          )
          .then(response => {
            // handle success
            //console.log(response);
            this.movies = response.data.results;
          })
          .catch(error => {
            // handle error
            // console.log(error);
          })
          // .finally(() => {
          //   // always executed
          //   this.sortBy(this.sortedBy);
          //   this.showPagination = true;
          // });
      },
      sortBy(prop) {
        if (prop === "popularity") {
          this.isIMDB = false;
          this.init();
          
          
          this.sortCriteria = "Now is playing";
        } else if (prop === "vote_average") {
          this.isIMDB = true;
          this.getListMoviebyPopular();
          console.log(this.movies);
          this.sortCriteria = "Most Popular";
        } else if (prop === "release_date") {
          this.isIMDB = false;
          this.sortCriteria = "Release Date";
        }
        // this.sortedBy = prop;
        // this.movies.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      }
    },
    watch: {
      // page: function(page) {
      //   this.init();
      // }
    },
    computed:{

    },
    created() {
      this.init();
    }
  };
</script>

<style scoped>
</style>
