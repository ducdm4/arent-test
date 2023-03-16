<template>
  <div>
    <svg width="226.3" viewBox="0 0 20 20" class="stat-circle">
      <circle cx="10" cy="10" r="8" class="bg"></circle>
      <circle
        transform="rotate(270, 10,10)"
        cx="10"
        cy="10"
        r="8"
        class="circle progress"
        stroke="#ffffff"
        :stroke-dashoffset="calculateStroke"
      ></circle>
      <text class="first" x="38%" y="55%">05/21</text>
      <text class="second" x="64%" y="55%">75%</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "PerformanceDoughnutChart",
  components: {},
  props: {
    percentage: {
      type: Object,
      default: () => {
        return {
          value: 75,
          type: "data",
        };
      },
    },
    color: {
      type: String,
      default: "#000c8c",
    },
  },
  data() {
    return {};
  },
  computed: {
    calculateStroke() {
      return -51 - (this.percentage.value / 100) * 50.5;
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.stat-circle {
  circle.bg {
    fill: none;
    stroke-width: 1;
  }
  circle.progress {
    fill: none;
    stroke-width: 0.2;
    stroke-dasharray: 51 51;
    background: linear-gradient(225deg, #ffcc21 0%, #ff963c 100%);
  }
  text {
    text-anchor: middle;
    fill: $light-color;
    font-family: "Inter", serif;
    font-style: normal;
    font-weight: 400;
  }
  text.first {
    font-size: 1.5px;
    line-height: 22px;
  }
  text.second {
    font-size: 2.5px;
    line-height: 30px;
  }
}
</style>
