<template>
  <div class="go-to-top-button" @click="goToTop"></div>
</template>

<script>
export default {
  name: "GoToTopButton",
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.go-to-top-button {
  background-image: url("@/assets/images/component_scroll.png");
  width: 48px;
  height: 48px;
  position: fixed;
  right: 96px;
  bottom: 244px;
  cursor: pointer;
}
</style>
