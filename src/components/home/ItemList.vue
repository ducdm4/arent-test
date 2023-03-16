<template>
  <div class="home-page__list-post">
    <div class="home-page__list-post__row">
      <div
        class="home-page__list-post__row__item"
        v-for="(item, index) in getItemList"
        :key="index"
      >
        <img :src="require(`@/assets/images/home/${item.image}`)" />
        <p>{{ item.date }}.{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ItemList",
  props: {
    typeFilter: {
      default: "",
    },
  },
  computed: {
    ...mapState("home", ["listItem"]),
    getItemList() {
      if (this.typeFilter)
        return this.listItem.filter((item) => item.type === this.typeFilter);
      return this.listItem;
    },
  },
};
</script>

<style scoped></style>
