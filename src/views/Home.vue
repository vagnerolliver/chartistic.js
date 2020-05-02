<template>
  <div class="home">
    <div class="header">
      <h1>Graphic chartist.js</h1>

      <a href="https://github.com/gionkunz/chartist-js">
        https://github.com/gionkunz/chartist-js
      </a>

      <b class="color-orange">stars 12.1k</b>
    </div>

    <div class="content">
      <div class="column"></div>
      <div class="column"><Chartist :data="data" :options="options" /></div>
    </div>
  </div>
</template>

<script>
import Chartist from '@/components/Chartist.vue';

export default {
  name: 'Home',

  data() {
    return {
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6],
        ],
      },
      options: {
        fullWidth: true,
        chartPadding: {
          right: 40,
        },
      },
    };
  },

  components: {
    Chartist,
  },

  mounted() {
  },
};
</script>


<style lang="scss">
  .content {
    max-width: 1286px;
    margin: 10% auto;
    display: flex;

    .column {
      width: 50%;
    }
  }

  .color-orange {
    color: orange
  }
</style>
