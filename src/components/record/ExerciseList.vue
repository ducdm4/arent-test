<template>
  <div class="record-page__exercise-list">
    <div class="record-page__exercise-list__title">
      <p>MY EXERCISE</p>
      <p>2021.05.21</p>
    </div>
    <div class="record-page__exercise-list__list">
      <div
        class="record-page__exercise-list__list__row"
        v-for="index in numberOfRow"
        :key="index"
      >
        <template v-for="n in 2">
          <div
            class="record-page__exercise-list__list__row__item"
            v-if="calculateIndex(index, n) < exerciseList.length"
            :key="n"
          >
            <div class="record-page__exercise-list__list__row__item__left">
              <p>{{ exerciseList[calculateIndex(index, n)].title }}</p>
              <p>{{ exerciseList[calculateIndex(index, n)].kcal }}</p>
            </div>
            <div class="record-page__exercise-list__list__row__item__right">
              <p>{{ exerciseList[calculateIndex(index, n)].time }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ExerciseList",
  created() {
    this.$store.dispatch("record/generateExerciseList");
  },
  computed: {
    ...mapState("record", ["exerciseList"]),
    numberOfRow() {
      if (this.exerciseList.length)
        return Math.ceil(this.exerciseList.length / 2);
      return 0;
    },
  },
  methods: {
    calculateIndex(index, pos) {
      return (index - 1) * 2 + pos;
    },
  },
};
</script>

<style scoped></style>
