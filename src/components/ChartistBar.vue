<template>
  <div class="home">
    <div class="ct-chart" ref="chartNode"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chartist from 'chartist';

export default {
  name: 'Chartist',

  props: ['config'],

  mounted() {
    if (this.config) {
      // Reference to DOM Node where you will render chart using Chartist
      const { data = '', options = '' } = this.config;

      const node = this.$refs.chartNode;

      // Example of drawing Line chart
      this.chartInstance = new Chartist.Bar(node, data, options).on('draw', (value) => {
        if (value.type === 'bar') {
          value.element.attr({
            style: 'stroke-width: 70px',
          });
        }
      });
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

 </style>
