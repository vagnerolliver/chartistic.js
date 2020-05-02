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
      <div class="column"><ChartistBar :config="config" /></div>
    </div>
  </div>
</template>

<script>
import ChartistBar from '@/components/ChartistBar.vue';
import chartistBarConfig from '../config/chartistBar';

export default {
  name: 'Home',

  data() {
    return {
      config: chartistBarConfig(),
    };
  },

  components: {
    ChartistBar,
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
