import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  name: 'macronutrients-chart',
  props: ['nutrients'],
  data () {
    return {
      data: {
        labels: [''],
        datasets: [
          {
            label: 'Kolhydrater',
            data: [67.8],
            backgroundColor: '#99C794',
            hoverBackgroundColor: '#99C794'
          },
          {
            label: 'Fett',
            data: [20.7],
            backgroundColor: '#FAC863',
            hoverBackgroundColor: '#FAC863'
          },
          {
            label: 'Protein',
            data: [11.4],
            backgroundColor: '#6699CC',
            hoverBackgroundColor: '#6699CC'
          }
        ]
      },
      options: {
        tooltips: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
            stacked: true
          }],
          yAxes: [{
            display: false,
            stacked: true
          }]
        },
        plugins: {
          datalabels: {
            color: 'white',
            font: {
              size: '16',
              weight: 'bold'
            },
            formatter: (value) => value.toFixed(1) + '%'
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
