<template>
  <div class="column-page">
    <div class="column-page__filter">
      <div class="column-page__filter__item">
        <p>RECOMMENDED COLUMN</p>
        <div></div>
        <p>オススメ</p>
      </div>
      <div class="column-page__filter__item">
        <p>RECOMMENDED DIET</p>
        <div></div>
        <p>ダイエット</p>
      </div>
      <div class="column-page__filter__item">
        <p>RECOMMENDED BEAUTY</p>
        <div></div>
        <p>美容</p>
      </div>
      <div class="column-page__filter__item">
        <p>RECOMMENDED HEALTH</p>
        <div></div>
        <p>健康</p>
      </div>
    </div>
    <post-list />
    <div class="column-page__more-button">
      <button @click="addPost">コラムをもっと見る</button>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/column/PostList";

export default {
  name: "ColumPage",
  components: {
    PostList,
  },
  created() {
    this.addPost();
  },
  methods: {
    addPost() {
      this.$store.dispatch("column/generateListPost");
    },
  },
};
</script>

<style lang="scss">
.column-page {
  padding-bottom: 64px;
  padding-top: 56px;
  &__filter {
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    &__item {
      width: 216px;
      height: 144px;
      background-color: $black-primary-color;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p:first-child {
        font-family: "Inter", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.11px;
        color: $primary-1-color;
        text-align: center;
      }
      div {
        width: 56px;
        border-top: 1px solid #ffffff;
        margin-top: 10px;
        margin-bottom: 8px;
      }
      p:last-child {
        color: $light-color;
        font-family: "Hiragino Kaku Gothic Pro", serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
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
      gap: 18px 8px;
      &__item {
        width: 234px;
        cursor: pointer;
        &__image {
          position: relative;
          img {
            width: 100%;
            height: 156px;
            object-fit: cover;
          }
          p {
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: $primary-1-color;
            color: $light-color;
            width: 144px;
            font-family: "Inter", serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            padding: 3px 0 3px 8px;
            span:last-child {
              margin-left: 12px;
            }
          }
        }
        &__text {
          color: $black-secondary-color;
          font-family: "Hiragino Kaku Gothic Pro", serif;
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 22px;
          letter-spacing: 0.075px;
          margin-top: 5px;
        }
        &__hashtag {
          font-family: "Hiragino Kaku Gothic Pro", serif;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 22px;
          color: $primary-2-color;
          letter-spacing: 0.06px;
          span {
            margin-right: 8px;
          }
        }
      }
    }
  }
  &__more-button {
    margin-top: 24px;
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
