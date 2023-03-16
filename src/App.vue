<template>
  <div id="app">
    <Header v-if="isShowHeader" />
    <div :class="{ main: hasUserLogin }">
      <router-view :key="$route.fullPath" />
    </div>
    <GoToTopButton v-if="isShowHeader" />
    <Footer v-if="isShowHeader" />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import { mapState } from "vuex";
import GoToTopButton from "@/components/GoToTopButton";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    GoToTopButton,
  },
  data() {
    return {
      hasUserLogin: false,
    };
  },
  computed: {
    ...mapState(["currentPath", "currentPageTitle", "currentUserLogin"]),
    isShowHeader() {
      const showPath = ["home", "myRecord", "column"];
      return showPath.findIndex((x) => x === this.currentPath) > -1;
    },
  },
  created() {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn) {
      this.$store.commit("LOGIN", JSON.parse(userLoggedIn));
      this.hasUserLogin = true;
    }
  },
  mounted() {
    document.title = this.currentPageTitle;
  },
  watch: {
    currentUserLogin: {
      deep: true,
      handler: function () {
        this.hasUserLogin = this.currentUserLogin;
      },
    },
    currentPath: {
      deep: true,
      handler: function () {
        document.title = this.currentPageTitle;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  padding-top: 64px;
  .main {
    min-height: calc(100vh - 64px - 128px);
  }
}
</style>
