<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { randomInteger } from "@/lib/common";
export default {
  name: "MainChart",
  data() {
    return {
      chartOptions: {
        legend: { enabled: false },
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        chart: {
          type: "line",
          backgroundColor: "#414141",
        },
        title: {
          text: "",
        },
        xAxis: {
          tickColor: "#777777",
          tickWidth: "1px",
          gridLineColor: "#777777",
          gridLineWidth: 1,
          allowDecimals: false,
          labels: {
            style: {
              color: "#FFFFFF",
            },
            enabled: true,
            formatter: function () {
              return `${this.value + 5}月`;
            },
            useHTML: true,
          },
          lineWidth: 0,
        },
        yAxis: {
          gridLineWidth: 0,
          title: {
            enabled: false,
          },
          labels: {
            enabled: false,
          },
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
          },
        },
        series: [
          {
            color: "#FFCC21",
            label: {
              enabled: false,
            },
            data: [],
          },
          {
            color: "#8FE9D0",
            label: {
              enabled: false,
            },
            data: [],
          },
        ],
      },
    };
  },
  props: {
    height: {
      default: 400,
    },
    backgroundColor: {
      default: "#414141",
    },
    type: {
      default: "home",
    },
  },
  created() {
    this.chartOptions.chart.height = this.height;
    this.chartOptions.chart.backgroundColor = this.backgroundColor;
    this.initDataForYear();
  },
  methods: {
    initDataForWeek() {
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
      for (let i = 0; i < 7; i++) {
        this.chartOptions.series[0].data.push([i, randomInteger(0, 100)]);
        this.chartOptions.series[1].data.push([i, randomInteger(0, 100)]);
      }
      this.chartOptions.xAxis.labels.formatter = (value) => {
        return `<span class="x-label-custom">${
          value.value + 1
        }</span><span class="x-label-custom-2">日</span>`;
      };
    },
    initDataForDay() {
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
      for (let i = 0; i < 24; i++) {
        this.chartOptions.series[0].data.push([i, randomInteger(0, 100)]);
        this.chartOptions.series[1].data.push([i, randomInteger(0, 100)]);
      }
      this.chartOptions.xAxis.labels.formatter = (value) => {
        return `<span class="x-label-custom">${value.value}</span><span class="x-label-custom-2">時</span>`;
      };
    },
    initDataForMonth() {
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
      for (let i = 0; i < 4; i++) {
        this.chartOptions.series[0].data.push([i, randomInteger(0, 100)]);
        this.chartOptions.series[1].data.push([i, randomInteger(0, 100)]);
      }
      this.chartOptions.xAxis.labels.formatter = (value) => {
        return `<span class="x-label-custom">${
          value.value + 1
        }</span><span class="x-label-custom-2">週</span>`;
      };
    },
    initDataForYear() {
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
      for (let i = 0; i < 12; i++) {
        this.chartOptions.series[0].data.push([i, randomInteger(0, 100)]);
        this.chartOptions.series[1].data.push([i, randomInteger(0, 100)]);
      }
      this.chartOptions.xAxis.labels.formatter = (value) => {
        if (value.value < 7) {
          return `<span class="x-label-custom">${
            value.value + 6
          }</span><span class="x-label-custom-2">月</span>`;
        } else {
          return `<span class="x-label-custom">${
            value.value - 6
          }</span><span class="x-label-custom-2">月</span>`;
        }
      };
    },
  },
  watch: {
    type: {
      handler: function () {
        switch (this.type) {
          case "day":
            this.initDataForDay();
            break;
          case "week":
            this.initDataForWeek();
            break;
          case "month":
            this.initDataForMonth();
            break;
          case "year":
            this.initDataForYear();
            break;
        }
      },
    },
  },
};
</script>

<style lang="scss">
.x-label-custom {
  font-family: "Inter", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: $light-color;
}
.x-label-custom-2 {
  font-family: "Hiragino Kaku Gothic Pro", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 12px;
  text-align: center;
  color: $light-color;
}
</style>
