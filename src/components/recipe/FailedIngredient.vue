<template>
<div class="ui red inverted segment">
  {{ failedIngredient }}
</div>
</template>

<script>
export default {
  name: 'failed-ingredient',
  props: ['failedIngredient']
}
</script>

<style scoped>
.ui.segment {
  padding-top: 0.7em;
  padding-bottom: 0.7em;
}
.comment {
  font-size: 0.8em;
  color: rgba(0,0,0,.4);
}
</style>
