import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MoviesPlayingNow from './views/MoviesPlayingNow.vue'
import DetailMovie from './views/DetailMovie.vue';
import PersonalRating from './views/PersonalRating.vue'
// import TopRatedShows from './views/TopRatedShows.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies-playing-now',
      name: 'moviesplayingnow',
      component: MoviesPlayingNow
    },
    {
      path: '/movie-detail',
      name: 'moviedetail',
      component: DetailMovie
    },
    {
      path: '/personal-rating-history',
      name: 'personalratinghistory',
      component: PersonalRating
    },
    // {
    //   path: '/top-rated-shows',
    //   name: 'topratedshows',
    //   component: TopRatedShows
    // },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
