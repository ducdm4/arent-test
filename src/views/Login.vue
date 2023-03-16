<template>
  <div class="login-page">
    <div class="login-page__container">
      <img src="@/assets/images/logo/logo.png" />
      <div class="login-page__container__input">
        <label>ユーザー名</label>
        <input v-model="username" />
      </div>
      <div class="login-page__container__input">
        <label>パスワード</label>
        <input v-model="password" type="password" />
      </div>
      <p v-if="isInputError" class="login-page__container__error">
        Wrong username or password!
      </p>
      <p class="login-page__container__hint">
        Username: user | Password: 123456
      </p>
      <button @click="doLogin">ユーザー名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      isInputError: false,
      username: "",
      password: "",
    };
  },
  methods: {
    async doLogin() {
      const res = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      if (!res) {
        this.isInputError = true;
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss">
.login-page {
  width: 600px;
  margin: auto;
  text-align: center;
  background-color: $black-secondary-color;
  color: $light-color;
  margin-top: 200px;
  &__container {
    padding: 40px;
    img {
      width: 200px;
      margin-bottom: 30px;
    }
    &__input {
      margin-bottom: 10px;
      input {
        height: 40px;
        width: 200px;
        border-radius: 8px;
        padding: 5px 10px;
        margin-left: 10px;
      }
    }
    &__hint {
      margin-top: 10px;
      margin-bottom: 30px;
    }
    &__error {
      color: #ff6969;
      font-size: 13px;
    }
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
