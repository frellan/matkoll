import { HorizontalBar } from 'vue-chartjs'
import Config from '../../config'

export default {
  extends: HorizontalBar,
  name: 'micronutrients-chart',
  props: [
    'color',
    'nutrients',
    'portions'
  ],
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: '% av RDI',
            data: [],
            backgroundColor: this.color,
          }
        ]
      },
      options: {
        tooltips: false,
        legend: {
          display: false,
          position: 'bottom'
        },
        scales: {
          gridLines: {
            drawOnChartArea: true,
            drawTicks: true
          },
          yAxes: [{
            display: false,
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45
            }
          }]
        },
        plugins: {
          datalabels: {
            color: (context) => {
              const i = context.dataIndex
              var value = context.dataset.data[i]
              if (this.showLabelInside(value, context.dataset.data)) {
                return '#FFFFFF'
              } else {
                return 'rgba(0,0,0,.8)'
              }
            },
            align: (context) => {
              const i = context.dataIndex
              var value = context.dataset.data[i]
              if (this.showLabelInside(value, context.dataset.data)) {
                return 'start'
              } else {
                return 'end'
              }
            },
            anchor: 'end',
            font: {
              size: '16',
              weight: 'bold'
            },
            formatter: (value, context) => {
              const i = context.dataIndex
              const label = context.chart.config.data.labels[i]
              return `${label} (${value.toFixed(1)}%)`
            }
          }
        }
      }
    }
  },
  created() {
    this.nutrients
      .filter(nutrient => Config.nutrients.includes(nutrient.name))
      .forEach(nutrient => {
        this.data.labels.push(nutrient.displayName.titleize())
        this.data.datasets[0].data.push(nutrient.percentOfDri / this.portions)
      })
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
  methods: {
    showLabelInside: (value, values) => {
      return value / values.max() > 0.8
    }
  }
}
