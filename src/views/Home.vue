<template>
  <div class="home-page">
    <main-banner />
    <div class="home-page__filter">
      <div class="home-page__filter__item" @click="changeFilter('Morning')">
        <img src="../assets/images/home/icon_knife.png" />
        <p>Morning</p>
      </div>
      <div class="home-page__filter__item" @click="changeFilter('Lunch')">
        <img src="../assets/images/home/icon_knife.png" />
        <p>Lunch</p>
      </div>
      <div class="home-page__filter__item" @click="changeFilter('Dinner')">
        <img src="../assets/images/home/icon_knife.png" />
        <p>Dinner</p>
      </div>
      <div class="home-page__filter__item" @click="changeFilter('Snack')">
        <img src="../assets/images/home/icon_cup.png" />
        <p>Snack</p>
      </div>
    </div>
    <item-list :typeFilter="typeFilter" />
    <div class="home-page__more-button">
      <button @click="addNewItem">記録をもっと見る</button>
    </div>
  </div>
</template>

<script>
import MainBanner from "@/components/home/MainBanner";
import ItemList from "@/components/home/ItemList";
import { generateNewHomeItem } from "@/lib/common";

export default {
  name: "HomePage",
  components: {
    MainBanner,
    ItemList,
  },
  data() {
    return {
      typeFilter: "",
    };
  },
  mounted() {
    this.addNewItem();
  },
  methods: {
    changeFilter(type) {
      this.typeFilter = type;
    },
    addNewItem() {
      this.$store.dispatch("home/generateListItemData", generateNewHomeItem());
    },
  },
};
</script>

<style lang="scss">
.home-page {
  padding-bottom: 64px;
  &__banner {
    height: 316px;
    width: 100vw;
    display: flex;
    align-items: center;
    &__left {
      background-image: url("@/assets/images/home/main_photo.png");
      height: 100%;
      width: 540px;
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__right {
      width: calc(100vw - 540px);
      padding: 0 50px;
      background-color: $black-primary-color;
    }
  }
  &__filter {
    margin-top: 22px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__item {
      background-image: url("@/assets/images/home/hexagon.png");
      width: 116px;
      height: 134px;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 84px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      p {
        font-family: "Inter", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: $light-color;
      }
    }
  }
  &__list-post {
    width: 960px;
    margin: auto;
    &__row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      &__item {
        width: 234px;
        height: 234px;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        p {
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: $primary-1-color;
          color: $light-color;
          width: 120px;
          font-family: "Inter", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          padding: 7px 2px 7px 8px;
        }
      }
    }
  }
  &__more-button {
    margin-top: 28px;
    display: flex;
    justify-content: center;
    button {
      width: 296px;
      color: $light-color;
      background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
      font-family: "Hiragino Kaku Gothic Pro", serif;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 26px;
      border: none;
      border-radius: 4px;
      padding: 15px 0;
    }
  }
}
</style>
