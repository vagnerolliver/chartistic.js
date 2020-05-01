<template>
  <div class="home">
    <h2 class="font-big">wwr</h2>
    <h3 class="font-green">verde</h3>
    <h4 class="bg-black">class $bg-black</h4>
    <div class="ct-chart" ref="chartNode"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chartist from 'chartist';

export default {
  name: 'Chartist',

  props: ['data', 'options'],

  mounted() {
    if (this.data && this.options) {
      // Reference to DOM Node where you will render chart using Chartist
      const divNode = this.$refs.chartNode;

      // Example of drawing Line chart
      this.chartInstance = new Chartist.Line(divNode, this.data, this.options);
    }
  },

  // IMPORTANT: Vue.js is Reactive framework.
  // Hence watch for prop changes here
  watch: {
    data(newData) {
      this.chartInstance.update(newData, this.options);
    },

    options(newOpts) {
      this.chartInstance.update(this.data, newOpts);
    },
  },

};
</script>


<style lang="scss">
  //  @import '@/variables.scss';

  // .bg-black {
  //   background: $bg-black;
  //   color: #fff;
  // }
 </style>
