<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <singleRating :review="review"  v-for="review in reviews" :key="review._id">

        </singleRating>
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
        const response = await getAllReview("user01");
        this.reviews = response.data;
        console.log("OK");

      }
    },
    created(){
      this.getAllReviewByUser();
    }
  };
</script>

<style>
</style>
