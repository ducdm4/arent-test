<template>
  <div class="record-page__diary">
    <p class="record-page__diary__title">MY DIARY</p>
    <div class="record-page__diary__list">
      <div
        class="record-page__diary__list__item"
        v-for="(diary, index) in diaryList"
        :key="index"
      >
        <p>{{ diary.date }}</p>
        <p>{{ diary.time }}</p>
        <p>
          {{ diary.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DiaryList",
  computed: {
    ...mapState("record", ["diaryList"]),
  },
};
</script>

<style scoped></style>
