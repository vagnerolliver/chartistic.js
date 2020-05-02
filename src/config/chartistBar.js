// export default () => ({
//   data: {
//     labels: ['Q1', 'Q2', 'Q3'],
//     series: [
//       [80000, 80000, 80000],
//       [20000, 40000, 50000],
//       [10000, 20000, 40000],
//     ],
//   },
//   options: {
//     stackBars: true,
//     axisY: {
//       showLabel: false,

//       labelInterpolationFnc(value) {
//         return `${value / 1000}k`;
//       },
//     },
//     axisX: {
//       showGrid: falses,
//     },
//   },
// });

import ctPointLabels from 'chartist-plugin-pointlabels';


export default () => ({
  data: {
    labels: ['Total', 'Enviados', 'Recebidos'],
    series: [
      [80000, 80000, 80000],
      [20000, 40000, 50000],
      [10000, 20000, 40000],
    ],
  },
  options: {
    width: '100%',
    height: '350px',
    stackBars: true,
    axisY: {
      showLabel: false,
    },
    axisX: {
      showGrid: false,
    },
    plugins: [
      ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc(value) { return `${value.toFixed(2)}`; },
      }),
    ],
  },
});
