<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card hover class="ma-3" height="500">
          <v-layout column align-center fill-height class="text-center">
            <v-img
              :src="movieFullInfo.data.Poster"
              style="height: auto; width: 250px"
            ></v-img>
            <v-card-title
              class="font-weight-light"
              @click="test(choosen_movie)"
              >{{ movieFullInfo.data.Title }}</v-card-title
            >
            <v-spacer></v-spacer>
          </v-layout>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-text style="text-align: left"
          >Language: {{ choosen_movie.original_language }}</v-card-text
        >
        <v-card-text
          v-if="choosen_movie.adult"
          style="text-align: left; color: red; font-weight: bold"
          >18+</v-card-text
        >
        <v-card-text style="text-align: left"
          >Overview: {{ choosen_movie.overview }}</v-card-text
        >
        <v-row style="width:100%">
          <v-col cols="12" sm="4">
            <v-card-text>
              {{movieFullInfo.data.Ratings[0].Source}}
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="4" v-if="movieFullInfo.data.Ratings[1]">
            <v-card-text>
              {{movieFullInfo.data.Ratings[1].Source}}
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="4" v-if="movieFullInfo.data.Ratings[2]">
            <v-card-text>
              {{movieFullInfo.data.Ratings[2].Source}}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row style="width:100%">
          <v-col cols="12" sm="4">
            <v-progress-circular style="margin-left:20px"
            size="90"
            color="white"
            rotate="-90"
            width="8"
            :value="movieFullInfo.data.Ratings[0].Value.toNumber()"
            class="font-weight-heavy my-5"
            >{{  movieFullInfo.data.Ratings[0].Value.toNumber()}}</v-progress-circular
          >
          </v-col>
          <v-col cols="12" sm="4" v-if="movieFullInfo.data.Ratings[1]">
            <v-progress-circular style="margin-left:20px"
            size="90"
            color="white"
            rotate="-90"
            width="8"
            :value="movieFullInfo.data.Ratings[1].Value.toNumber()"
            class="font-weight-heavy my-5"
            >{{ movieFullInfo.data.Ratings[1].Value.toNumber()}}</v-progress-circular
          >
          </v-col>
          <v-col cols="12" sm="4" v-if="movieFullInfo.data.Ratings[2]">
            <v-progress-circular style="margin-left:20px"
            size="90"
            color="white"
            rotate="-90"
            width="8"
            :value="movieFullInfo.data.Ratings[2].Value.toNumber()"
            class="font-weight-heavy my-5"
            >{{  + movieFullInfo.data.Ratings[2].Value.toNumber() }}</v-progress-circular
          >
          </v-col>
        </v-row>
        <v-card-text>
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="4" style=" height: 500px; overflow-y:scroll">
        <v-card-text>
          
          <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            hover
            length="5"
            size="40"
            value="3"
          ></v-rating>
          <v-text-field
            label="Rating comment"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          
        </v-card-text>
        <v-card-text>
          <comment v-for="i in 10" :key="i"></comment>
        </v-card-text>
      </v-col>
    </v-row>
    Related Movies
    <v-row no-gutters>
      <v-col cols="12" sm="4">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import '../plugins/toVoteAverage'
import comment from '../components/SingleRating'
import { getOneInfo } from '../plugins/getOneInfo';
export default {
  components: {
    // mediaGrid: MediaGrid,
    comment:comment
  },
  data: function () {
    return {
      value : 4,
      rating: 4,
      shows: [],
      pageTitle: "Top Rated Shows",
      imageURL: "https://image.tmdb.org/t/p/w1280",
      sortCriteria: "Most Popular",
      sortedBy: "popularity",
      page: 1,
      showPagination: false,
      choosen_movie: {
        adult: false,
        backdrop_path: "",
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      movieFullInfo:{},
      vote: 0
    };
  },
  methods: {},
  watch: {
    page: function (page) {
      this.init();
    },
  },
  created() {
    this.choosen_movie = this.$store.getters.choosen_movie;
    if (this.choosen_movie.id == null || this.choosen_movie.id == 0) {
      this.$router.push("movies-playing-now");
    }else{
      this.getFullInfoMovie();
    }
    console.log(this.choosen_movie);
  },
  methods:{
    async getFullInfoMovie(){
      const date =  new Date(this.choosen_movie.release_date);
      var year = date.getFullYear();
      this.movieFullInfo = await getOneInfo(year, this.choosen_movie.original_title);
      console.log(this.movieFullInfo)
      this.vote = this.movieFullInfo.data.Ratings[0].Value.toNumber();
      console.log(this.vote)
      if(this.movieFullInfo == null){
        this.$router.push("movies-playing-now");
      }
    }
  }
};
</script>

<style></style>
