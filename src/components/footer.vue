<template>
  <div class="footer">
    <div class="footer__container">
      <p>会員登録</p>
      <p>運営会社</p>
      <p>利用規約</p>
      <p>個人情報の取扱について</p>
      <p>特定商取引法に基づく表記</p>
      <p>お問い合わせ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComponent",
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $black-secondary-color;
  height: 128px;
  &__container {
    width: 960px;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    p {
      color: $light-color;
      margin-right: 45px;
      font-family: "Hiragino Kaku Gothic Pro", serif;
      font-style: normal;
      font-weight: 300;
      font-size: 11px;
      line-height: 16px;
    }
  }
}
</style>
