<template>
    <div>
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
</template>

<script>
export default {
    props: ["review"],
    data:()=>{
        return{
            value:3
        }
    }

}
</script>

<style>

</style>