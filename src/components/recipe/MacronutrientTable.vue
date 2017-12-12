<template>
<table class="ui compact table">
  <thead>
    <tr>
      <th>Makronutrient</th>
      <th>Mängd per portion</th>
      <th>% av måltiden</th>
    </tr>
  </thead>
  <tbody>
    <tr class="makro yellow">
      <td>Kolhydrater</td>
      <td>{{ carbs.quantity.toFixed(0) / portions + carbs.unit.displayName }}</td>
      <td>{{ percent(carbs.quantity / total) }}</td>
    </tr>
    <tr>
      <td>- Varav sockerarter</td>
      <td>xx</td>
      <td>xx</td>
    </tr>
    <tr>
      <td>- Fibrer</td>
      <td>{{ fibre.quantity.toFixed(0) / portions + fibre.unit.displayName }}</td>
      <td>{{ percent(fibre.quantity / total) }}</td>
    </tr>
    <tr class="makro red">
      <td>Fett</td>
      <td>{{ fat.quantity.toFixed(0) / portions + fat.unit.displayName }}</td>
      <td>{{ percent(fat.quantity / total) }}</td>
    </tr>
    <tr>
      <td>- Mättat</td>
      <td>xx</td>
      <td>xx</td>
    </tr>
    <tr>
      <td>- Enkelomättat</td>
      <td>xx</td>
      <td>xx</td>
    </tr>
    <tr>
      <td>- Fleromättat</td>
      <td>xx</td>
      <td>xx</td>
    </tr>
    <tr>
      <td>- Transfett</td>
      <td>xx</td>
      <td>xx</td>
    </tr>
    <tr class="makro green">
      <td>Protein</td>
      <td>{{ protein.quantity.toFixed(0) / portions + protein.unit.displayName }}</td>
      <td>{{ percent(protein.quantity / total) }}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'macronutrient-table',
  props: [
    'nutrients',
    'portions'
  ],
  computed: {
    carbs: function () {
      return this.nutrients.find(n => n.name === 'CARBOHYDRATES').value
    },
    fibre: function () {
      return this.nutrients.find(n => n.name === 'FIBRE').value
    },
    fat: function () {
      return this.nutrients.find(n => n.name === 'FAT').value
    },
    protein: function () {
      return this.nutrients.find(n => n.name === 'PROTEIN').value
    },
    total: function () {
      return this.carbs.quantity + this.fat.quantity + this.protein.quantity
    }
  },
  methods: {
    percent: (value) => (value * 100).toFixed(1) + '%'
  }
}
</script>

<style scoped>
.makro {
  color: white;
  font-weight: bold;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
}
.yellow {
  background-color: #FAC863;
}
.red {
  background-color: #EC5F67;
}
.green {
  background-color: #99C794;
}
</style>
