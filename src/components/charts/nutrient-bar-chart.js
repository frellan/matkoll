import { Pie } from 'vue-chartjs'

export default Pie.extend({
  name: 'nutrient-bar-chart',
  props: ['nutrients'],
  mounted () {
    this.renderChart({
      labels: this.nutrients.map(n => n.name),
      datasets: [
        {
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.nutrients.map(n => n.value),
        }
      ]
    }, {
      title: { display: false },
      legend: { display: false }
    })
  }
})
