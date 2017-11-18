import { HorizontalBar } from 'vue-chartjs'
import Config from '../../config'

export default {
  extends: HorizontalBar,
  name: 'micronutrients-chart',
  props: [
    'color',
    'nutrients'
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
            color: 'rgba(0,0,0,.8)',
            align: 'end',
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
    const vitamins = this.nutrients
      .filter(n => Config.nutrients.includes(n.name))
    vitamins.forEach(vitamin => {
      this.data.labels.push(vitamin.displayName.titleize())
      this.data.datasets[0].data.push(vitamin.value)
    })
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
