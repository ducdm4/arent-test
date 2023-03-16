<template>
  <div class="header">
    <div class="header__main">
      <img
        @click="goToPath('/')"
        class="header__main__logo"
        src="../assets/images/logo/logo.png"
      />
      <div class="header__main__item-container">
        <div
          class="header__main__item-container__item"
          @click="goToPath('/record')"
        >
          <div>
            <img src="../assets/images/logo/icon_memo.png" />
          </div>
          <p>自分の記録</p>
        </div>
        <div class="header__main__item-container__item">
          <div>
            <img src="../assets/images/logo/icon_challenge.png" />
          </div>
          <p>チャレンジ</p>
        </div>
        <div class="header__main__item-container__item">
          <div>
            <img src="../assets/images/logo/icon_info.png" />
            <span>1</span>
          </div>
          <p>お知らせ</p>
        </div>
        <div
          class="header__main__item-container__menu-item"
          @click="isShowMenu = !isShowMenu"
        >
          <img v-if="!isShowMenu" src="../assets/images/logo/icon_menu.png" />
          <img v-if="isShowMenu" src="../assets/images/logo/icon_close.png" />
          <div
            v-if="isShowMenu"
            class="header__main__item-container__menu-item__list"
          >
            <div @click="goToPath('/record')">自分の記録</div>
            <div>体重グラフ</div>
            <div>目標</div>
            <div>選択中のコース</div>
            <div @click="goToPath('/column')">コラム一覧</div>
            <div>設定</div>
            <div v-if="currentUserLogin" @click="logout">ログアウト</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "headerComponent",
  data() {
    return {
      isShowMenu: false,
    };
  },
  computed: {
    ...mapState(["currentUserLogin"]),
  },
  methods: {
    goToPath(path) {
      this.$router.push(path);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $black-secondary-color;
  height: 64px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  &__main {
    margin: auto;
    width: 960px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      cursor: pointer;
    }

    &__item-container {
      display: flex;
      align-items: center;
      &__item {
        cursor: pointer;
        color: $light-color;
        display: flex;
        align-items: center;
        div {
          position: relative;
          span {
            position: absolute;
            background-color: $primary-3-color;
            width: 16px;
            height: 16px;
            border-radius: 16px;
            text-align: center;
            top: 0;
            right: -8px;
            font-family: "Inter", serif;
            font-size: 10px;
            line-height: 16px;
          }
        }
        p {
          font-family: "Hiragino Kaku Gothic Pro", serif;
          margin-left: 8px;
          font-size: 16px;
          line-height: 23px;
          width: 96px;
          margin-right: 24px;
        }
      }
      &__menu-item {
        margin-left: 10px;
        cursor: pointer;
        position: relative;
        &__list {
          position: absolute;
          right: 0;
          top: 40px;
          width: 280px;
          background-color: $gray-color;
          div {
            font-family: "Hiragino Kaku Gothic Pro", serif;
            color: $light-color;
            padding: 23px 32px 23px;
            font-size: 18px;
            line-height: 26px;
            border-bottom: 1px solid;
            border-color: #ffffff26;
          }
        }
      }
    }
  }
}
</style>
