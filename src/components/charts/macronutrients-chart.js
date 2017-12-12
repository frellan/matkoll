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
            backgroundColor: '#FAC863'
          },
          {
            label: 'Fett',
            data: [],
            backgroundColor: '#EC5F67'
          },
          {
            label: 'Protein',
            data: [],
            backgroundColor: '#99C794'
          }
        ]
      },
      options: {
        tooltips: false,
        hover: {
          mode: null
        },
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
    this.updateData()
    this.renderChart(this.data, this.options)
  },
  methods: {
    updateData: function () {
      const carbs = this.nutrients.find(n => n.name === 'CARBOHYDRATES').value.quantity
      const protein = this.nutrients.find(n => n.name === 'PROTEIN').value.quantity
      const fat = this.nutrients.find(n => n.name === 'FAT').value.quantity
      const sum = carbs + protein + fat
      this.data.datasets[0].data[0] = (carbs / sum * 100)
      this.data.datasets[1].data[0] = (fat / sum * 100)
      this.data.datasets[2].data[0] = (protein / sum * 100)
    }
  },
  watch: {
    nutrients: function (nutrients) {
      this.nutrients = nutrients
      this.updateData()
      this.renderChart(this.data, this.options)
    }
  }
}
