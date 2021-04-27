<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-card hover class="ma-3" height="450">
          <v-layout column align-center fill-height class="text-center">
            <v-img
              :src="movieFullInfo.data.Poster || ''"
              style="height: auto; width: 200px"
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
      <v-col cols="12" sm="4" style="height: 450px">
        <v-card-text style="text-align: left">
          <p style="margin-bottom: 5px">
            <strong>Language:</strong> {{ movieFullInfo.data.Language }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Rated:</strong> {{ movieFullInfo.data.Rated }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Released:</strong> {{ movieFullInfo.data.Released }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Runtime:</strong> {{ movieFullInfo.data.Runtime }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Genre:</strong> {{ movieFullInfo.data.Genre }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Director:</strong> {{ movieFullInfo.data.Director }}
          </p>
          <p style="margin-bottom: 5px">
            <span class="text_max" style="margin-right: 0">
              <strong>Writer:</strong> {{ movieFullInfo.data.Writer }}</span
            >
            <i
              style="cursor: pointer; color: #536dfe"
              @click="
                sheet = !sheet;
                showExtendContent = movieFullInfo.data.Writer;
              "
            >
              Read more
            </i>
          </p>
          <p style="margin-bottom: 5px">
            <span class="text_max" style="margin-right: 0">
              <strong>Actors:</strong> {{ movieFullInfo.data.Actors }}</span
            >
            <i
              style="cursor: pointer; color: #536dfe"
              @click="
                sheet = !sheet;
                showExtendContent = movieFullInfo.data.Actors;
              "
            >
              Read more
            </i>
          </p>
          <p style="margin-bottom: 5px">
            <strong>Awards:</strong> {{ movieFullInfo.data.Awards }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>BoxOffice:</strong> {{ movieFullInfo.data.BoxOffice }}
          </p>
          <p style="margin-bottom: 5px">
            <strong>Production:</strong> {{ movieFullInfo.data.Production }}
          </p>
          <p>
            <span class="text_max" style="margin-right: 0"
              ><strong>Plot: </strong>{{ movieFullInfo.data.Plot }}</span
            >
            <i
              style="cursor: pointer; color: #536dfe"
              @click="
                sheet = !sheet;
                showExtendContent = movieFullInfo.data.Plot;
              "
            >
              Read more
            </i>
          </p>
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="4" style="height: 450px; overflow-y: scroll">
        <v-card-text>
          <v-form ref="form">
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              hover
              length="5"
              size="30"
              v-model="ratingInfo.rating"
            ></v-rating>
            <v-text-field
              label="Rating comment"
              required
              v-model="ratingInfo.comment"
            ></v-text-field>
            <v-btn @click="submitReview" small color="warning"> Submit </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text v-if="reviews.length > 0">
          <comment :review="review"  v-for="review in reviews" :key="review._id"></comment>
        </v-card-text>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-progress-linear v-model="knowledge" height="25">
          <strong>Helk Rating: {{ Math.ceil(knowledge) }}/100</strong>
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      style="margin-top: 10px"
      v-if="movieFullInfo.data.Ratings.length > 0"
    >
      <v-col cols="12" sm="12">
        <v-progress-linear
          :value="movieFullInfo.data.Ratings[0].Value.toNumber()"
          height="25"
        >
          <strong
            >{{ movieFullInfo.data.Ratings[0].Source }}:
            {{
              Math.ceil(movieFullInfo.data.Ratings[0].Value.toNumber())
            }}/100</strong
          >
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      style="margin-top: 10px"
      v-if="movieFullInfo.data.Ratings.length > 1"
    >
      <v-col cols="12" sm="12">
        <v-progress-linear
          :value="movieFullInfo.data.Ratings[1].Value.toNumber()"
          height="25"
        >
          <strong
            >{{ movieFullInfo.data.Ratings[1].Source }}:
            {{
              Math.ceil(movieFullInfo.data.Ratings[1].Value.toNumber())
            }}/100</strong
          >
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      style="margin-top: 10px"
      v-if="movieFullInfo.data.Ratings.length > 2"
    >
      <v-col cols="12" sm="12">
        <v-progress-linear
          :value="movieFullInfo.data.Ratings[2].Value.toNumber()"
          height="25"
        >
          <strong
            >{{ movieFullInfo.data.Ratings[2].Source }}:
            {{
              Math.ceil(movieFullInfo.data.Ratings[2].Value.toNumber())
            }}/100</strong
          >
        </v-progress-linear>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12" sm="12" style="height: 315; width:560;display:inline; scroll-x:auto">
        <ul class="images">
  <!-- Inline styles added for demonstration purposes only. -->
          <div class="scrollmenu">
            <!-- <iframe v-for="i in 10"  width="560" height="150" src="https://tubitv.com/movies/585469/a-dangerous-man?start=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

          </div>
        </ul>

      </v-col>
    
    </v-row>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          {{ showExtendContent }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import {getListURL} from '../plugins/getRalatedVideoURL';
import {getReviewByMovie, submitReview} from '../apis/review'
import "../plugins/toVoteAverage";
import comment from "../components/SingleRating";
import { getOneInfo } from "../plugins/getOneInfo";
export default {
  components: {
    comment: comment,
  },
  data: function () {
    return {
      myWindow:'',
      listRelatedMovie:[],
      ratingInfo: {
        user_id: "",
        rating: 0,
        comment: "",
        movie_id: "",
        movie_name: ""
      },
      sheet: false,
      showExtendContent: "",
      knowledge: 60,
      value: 4,
      rating: 4,
      shows: [],
      reviews: [],
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
      movieFullInfo: {},
      vote: 0,
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
    } else {
      this.getFullInfoMovie();
      
    }
  },
  methods: {
    async getListRelatedMovie(){
      this.listRelatedMovie =  await getListURL({name:this.movieFullInfo.data.Title, gender: this.movieFullInfo.data.Genre});
      console.log(this.listRelatedMovie);
    },
    async getAllReviewByMovie(){
      const res = await getReviewByMovie(this.movieFullInfo.data.imdbID)
      this.reviews = res.data;
      console.log("----------");
      console.log(this.reviews);
      console.log("----------");
    },
    submitReview(){
      this.ratingInfo.user_id = this.$store.getters.id;
      this.ratingInfo.movie_id = this.movieFullInfo.data.imdbID;
      this.ratingInfo.movie_name = this.movieFullInfo.data.Title;
      if(this.ratingInfo.user_id === ''){
        alert("Please Login");
        return;
      }
      if(this.ratingInfo.movie_id === ''){
        alert("Cant get Movie Info");
        return;
      }
      if(this.ratingInfo.rating <= 0){
        alert("Please rating the movie");
        return;
      }
      if(this.ratingInfo.comment == ''){
        alert("Please give a comment");
        return;
      }
      this.sendRating();
    },
    async sendRating(){
      const response = await submitReview(this.ratingInfo);
      console.log(response)
      if(response.data.isExisted == 1){
        alert("user already rate this movie");
      }else{
        this.reviews = response.data.result;
        alert("Success full");
      }
    },
    openWindow: function () {		
				  this.myWindow = window.open("https://tubitv.com/oz/search/Monster%20Hunter?isKidsMode=false", "myWindow", "width=500,height=300");
    },
    
    closeWindow: function () {		
			this.myWindow.close();	
      },
    async getFullInfoMovie() {
      // this.openWindow();
      const date = new Date(this.choosen_movie.release_date);
      var year = date.getFullYear();
      this.movieFullInfo = await getOneInfo(
        this.choosen_movie.movie_id,
        year,
        this.choosen_movie.original_title
      );
      if (this.movieFullInfo == null || this.movieFullInfo == undefined) {
        this.$router.push("movies-playing-now");
      } else {
        this.vote = this.movieFullInfo.data.Ratings[0].Value.toNumber();
      }
      this.getAllReviewByMovie();
      // console.log(this.myWindow);
      // this.closeWindow();
      // this.getListRelatedMovie();
    }
  },
};
</script>
<style scoped>
.text_max {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
div.scrollmenu {
  /* background-color: #333; */
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu iframe {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
</style>