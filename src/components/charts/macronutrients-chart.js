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
            data: [],
            backgroundColor: '#FAC863',
            hoverBackgroundColor: '#FAC863'
          },
          {
            label: 'Fett',
            data: [],
            backgroundColor: '#EC5F67',
            hoverBackgroundColor: '#EC5F67'
          },
          {
            label: 'Protein',
            data: [],
            backgroundColor: '#99C794',
            hoverBackgroundColor: '#99C794'
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
  created() {
    const carbs = this.nutrients.find(n => n.name === 'CARBOHYDRATES').value.quantity
    const protein = this.nutrients.find(n => n.name === 'PROTEIN').value.quantity
    const fat = this.nutrients.find(n => n.name === 'FAT').value.quantity
    const sum = carbs + protein + fat
    this.data.datasets[0].data.push(carbs / sum * 100)
    this.data.datasets[1].data.push(fat / sum * 100)
    this.data.datasets[2].data.push(protein / sum * 100)
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
