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
          display: false
        },
        scales: {
          gridLines: {
            drawOnChartArea: true,
            drawTicks: true
          },
          xAxes: [{
            ticks: {
              callback: function(value) {
                return `${value}%`
              }
            }
          }],
          yAxes: [{
            display: false
          }]
        },
        annotation: {
          annotations: [{
            drawTime: 'beforeDatasetsDraw',
            type: 'line',
            scaleID: 'x-axis-0',
            value: 100,
            borderColor: this.color,
            borderWidth: 2
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
              size: '13',
              weight: 'bold'
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
    this.options.plugins.datalabels.formatter = (value, context) => {
      const i = context.dataIndex
      const label = context.chart.config.data.labels[i]
      const nutrient = this.nutrients
        .filter(nutrient => Config.nutrients.includes(nutrient.name))[i]
      const quantity = nutrient.value.quantity.toFixed(0)
      const unit = nutrient.value.unit.displayName
      return `${label} (${quantity}${unit})`
    }
    this.renderChart(this.data, this.options)
  },
  methods: {
    showLabelInside: (value, values) => {
      return value > (values.max() / 5) + values.min()
    }
  }
}
