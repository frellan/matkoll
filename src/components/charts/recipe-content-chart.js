import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  name: 'recipe-content-chart',
  data () {
    return {
      data: {
        labels: ['Energi'],
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
      }
    }
  },
  props: ['nutrients'],
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
