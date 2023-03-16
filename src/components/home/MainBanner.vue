<template>
  <div class="home-page__banner">
    <div class="home-page__banner__left">
      <DoughnutChart />
    </div>
    <div class="home-page__banner__right">
      <main-chart :height="316" :backgroundColor="'#2E2E2E'"></main-chart>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "@/components/home/DoughnutChart";
import MainChart from "@/components/Chart";

export default {
  name: "MainBanner",
  components: {
    DoughnutChart,
    MainChart,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
