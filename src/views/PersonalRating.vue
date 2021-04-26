<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" style="height: 600px; overflow-y: auto">
        <!-- <singleRating :review="review"  v-for="review in reviews" :key="review._id">
        </singleRating> -->
        <div v-for="review in reviews" :key="review._id">
          {{review.movie_name}}
        <v-rating
            readonly
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            hover
            length="5"
            size="20"
            :value="review.rating"
        ></v-rating>
        <v-text-field disabled :value="review.date + ' : '+ review.comment">
        </v-text-field>
        
    </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import singleRating from '../components/SingleRating'
import { getAllReview } from '../apis/review'
  export default {
    components: {
      singleRating:singleRating
    },
    data(){
      return {
        reviews:[],
      };
    },
    methods: {
      async getAllReviewByUser(){
        const response = await getAllReview(this.$store.getters.id);
        this.reviews = response.data;

      }
    },
    created(){
      this.getAllReviewByUser();
    }
  };
</script>

<style>
</style>
