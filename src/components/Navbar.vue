<template>
  <nav>
    <v-app-bar dark app flat>
      <v-app-bar-nav-icon
        id="drawerIcon"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">HELK</span>
        <span>TV</span>
      </v-toolbar-title>
      <v-btn @click="user_info.id !== '' && user_info.id !== null ? logout():login()" style="margin: 40px" color="primary">
        {{ available_name }}
      </v-btn>
      <v-avatar>
        <img
          v-if="user_info.avatar != '' && user_info.avatar != null"
          :src="user_info.avatar"
        />
        <!-- <v-icon v-else dark> mdi-account-circle </v-icon> -->
      </v-avatar>
      <input v-if="user_info.avatar != '' && user_info.avatar != null" type="text" placeholder="Search" style="color:white; margin-left: 30px; background-color:gray; height: 60%; border-radius:5px">
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="indigo accent-2">
      <v-layout column align-center>
        <v-flex class="my-5">
          <v-img max-width="100px" src="../assets/retro-tv.svg"></v-img>
        </v-flex>
      </v-layout>

      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.route"
          link
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      user_info: {
        avatar: "",
        full_name: "",
        id: "",
      },
      available_name: "Login",
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        {
          icon: "mdi-filmstrip",
          text: "Movies Playing Now",
          route: "/movies-playing-now",
        },
        // {
        //   icon: "mdi-trophy",
        //   text: "Top Rated Movies",
        //   route: "/top-rated-movies",
        // },
        // {
        //   icon: "mdi-television-classic",
        //   text: "Popular Shows",
        //   route: "/popular-shows",
        // },
        // {
        //   icon: "mdi-medal",
        //   text: "Top Rated Shows",
        //   route: "/top-rated-shows",
        // },
        {
          icon: "mdi-information",
          text: "About",
          route: "/about",
        },
      ],
    };
  },
  computed: {
    avatar() {
      console.log(this.$store.getters.avatar);
      return this.$store.getters.avatar;
    },
    user_id() {
      console.log(this.$store.getters.id);
      return this.$store.getters.id;
    },
    full_name() {
      console.log(this.$store.getters.full_name);
      return this.$store.getters.full_name;
    },
  },
  watch: {
    avatar(newValue) {
      this.user_info.avatar = newValue;
    },
    user_id(newValue) {
      console.log("WW " + newValue);
      this.user_info.id = newValue;
    },
    full_name(newValue) {
      this.user_info.full_name = newValue;
      if (
        this.user_info.full_name !== "" &&
        this.user_info.full_name !== null
      ) {
        this.available_name = this.user_info.full_name;
      } else {
        this.available_name = "Login";
      }
    },
  },
  created() {
    this.user_info.id = this.$store.getters.id;
    this.user_info.full_name = this.$store.getters.full_name;
    this.user_info.avatar = this.$store.getters.avatar;
    console.log("dsadas " + this.$store.getters.avatar);
  },
  methods: {
    login() {
      console.log("OK");
      this.$gapi
        .login()
        .then((res) => {
          this.$store.dispatch("user/setUserInfo", res.currentUser.ft);
        })
        .catch(() => {});
    },
    logout() {
      console.log(">>>>");
      this.$store.dispatch("user/removeUserInfo");
    },
  },
};
</script>

<style scoped>
</style>
