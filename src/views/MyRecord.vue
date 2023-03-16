<template>
  <div class="record-page">
    <div class="record-page__filter">
      <div class="record-page__filter__item body" @click="scrollToEle('body')">
        <div class="record-page__filter__item__layer">
          <p>BODY RECORD</p>
          <p>自分のカラダの記録</p>
        </div>
      </div>
      <div
        class="record-page__filter__item exercise"
        @click="scrollToEle('exercise')"
      >
        <div class="record-page__filter__item__layer">
          <p>MY EXERCISE</p>
          <p>自分の運動の記録</p>
        </div>
      </div>
      <div
        class="record-page__filter__item diary"
        @click="scrollToEle('diary')"
      >
        <div class="record-page__filter__item__layer">
          <p>MY DIARY</p>
          <p>自分の日記</p>
        </div>
      </div>
    </div>
    <div class="record-page__chart" id="body">
      <div class="record-page__chart__title">
        <p>BODY RECORD</p>
        <p>2021.05.21</p>
      </div>
      <div class="record-page__chart__main">
        <main-chart :type="selectedChartType" />
      </div>
      <div class="record-page__chart__button">
        <button
          :class="{ selected: selectedChartType === 'day' }"
          @click="changeChart('day')"
        >
          日
        </button>
        <button
          :class="{ selected: selectedChartType === 'week' }"
          @click="changeChart('week')"
        >
          週
        </button>
        <button
          :class="{ selected: selectedChartType === 'month' }"
          @click="changeChart('month')"
        >
          月
        </button>
        <button
          :class="{ selected: selectedChartType === 'year' }"
          @click="changeChart('year')"
        >
          年
        </button>
      </div>
    </div>
    <exercise-list id="exercise" />
    <diary-list id="diary" />
    <div class="record-page__more-button">
      <button @click="addDiary">自分の日記をもっと見る</button>
    </div>
  </div>
</template>

<script>
import DiaryList from "@/components/record/DiaryList";
import ExerciseList from "@/components/record/ExerciseList";
import MainChart from "@/components/Chart";
export default {
  name: "MyRecord",
  components: {
    DiaryList,
    ExerciseList,
    MainChart,
  },
  data() {
    return {
      selectedChartType: "year",
    };
  },
  created() {
    this.addDiary();
  },
  methods: {
    changeChart(type) {
      this.selectedChartType = type;
    },
    addDiary() {
      this.$store.commit("record/ADD_DIARY_LIST");
    },
    scrollToEle(id) {
      const element = document.getElementById(id);
      let bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;
      window.scrollTo({
        top: offset - 74,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.record-page {
  width: 960px;
  margin: auto;
  padding: 56px 0 64px 0;
  &__filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__item {
      width: 288px;
      height: 288px;
      border: 24px solid $primary-1-color;
      position: relative;
      background-position: center;
      background-size: cover;
      background-position-x: 0%;
      cursor: pointer;

      &__layer {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000b3;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
      }
      p {
        font-family: "Inter", serif;
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.125px;
        color: $primary-1-color;
      }
      p:last-child {
        background-color: $primary-2-color;
        font-family: "Hiragino Kaku Gothic Pro", serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: $light-color;
        margin-top: 10px;
        width: 160px;
        padding: 2px 0;
        text-align: center;
      }
    }
    &__item.body {
      background-image: url("@/assets/images/record/MyRecommend-1.jpg");
    }
    &__item.exercise {
      background-image: url("@/assets/images/record/MyRecommend-2.jpg");
      background-position-x: 34%;
    }
    &__item.diary {
      background-image: url("@/assets/images/record/MyRecommend-3.jpg");
      background-position-x: 69%;
    }
  }
  &__chart {
    background-color: $black-secondary-color;
    margin-top: 56px;
    padding: 16px 24px;
    &__title {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      p {
        color: $light-color;
        font-family: "Inter", serif;
        font-style: normal;
        font-weight: 400;
      }
      p:first-child {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.15px;
        width: 96px;
      }
      p:last-child {
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.11px;
      }
    }
    &__button {
      button {
        border-radius: 11px;
        background-color: $light-color;
        font-family: "Hiragino Kaku Gothic Pro", serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.075px;
        color: $primary-1-color;
        margin-right: 16px;
        width: 56px;
      }
      button.selected {
        background-color: $primary-1-color;
        color: $light-color;
      }
    }
  }
  &__exercise-list {
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: $gray-color;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: $primary-1-color;
      border-radius: 4px;
    }
    background-color: $black-secondary-color;
    margin-top: 56px;
    padding: 16px 24px;
    &__title {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      p {
        color: $light-color;
        font-family: "Inter", serif;
        font-style: normal;
        font-weight: 400;
      }
      p:first-child {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.15px;
        width: 96px;
      }
      p:last-child {
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.11px;
      }
    }
    &__list {
      margin-top: 4px;
      max-height: 191px;
      overflow-y: scroll;
      &__row {
        display: flex;
        width: 880px;
        justify-content: space-between;
        &__item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 416px;
          padding-bottom: 2px;
          border-bottom: 1px solid $gray-color;
          padding-left: 15px;
          position: relative;
          margin-bottom: 4px;
          &__left {
            p:first-child {
              font-family: "Hiragino Kaku Gothic Pro", serif;
              font-style: normal;
              font-weight: 300;
              font-size: 15px;
              line-height: 22px;
              letter-spacing: 0.075px;
              color: $light-color;
            }
            p:last-child {
              font-family: "Inter", serif;
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 0.075px;
              color: $primary-1-color;
            }
          }
          &__right {
            font-family: "Inter", serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: right;
            letter-spacing: 0.09px;
            color: $primary-1-color;
          }
        }
        &__item::before {
          content: "●";
          position: absolute;
          left: 0;
          top: 5px;
          color: #fff;
          width: 10px;
          font-size: 5px;
        }
      }
    }
  }
  &__diary {
    margin-top: 56px;
    &__title {
      color: $black-secondary-color;
      font-family: "Inter", serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.11px;
    }
    &__list {
      display: flex;
      gap: 12px 8px;
      flex-wrap: wrap;
      &__item {
        width: 231px;
        height: 231px;
        border: 2px solid #707070;
        padding: 16px;
        p {
          font-family: "Inter", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.09px;
          color: $black-secondary-color;
        }
        p:last-child {
          margin-top: 8px;
          font-family: "Hiragino Kaku Gothic Pro", serif;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: 0.06px;
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
