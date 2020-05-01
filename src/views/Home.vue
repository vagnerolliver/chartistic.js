<template>
  <div class="home">
      <div class="echarts">sss</div>
    <Chartist :data="data" :options="options" />
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
 $var: red;

 .echarts {
    width: 100%;
    height: 100%;
    background: $var
  }
</style>
