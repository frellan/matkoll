<template>
<div class="ui massive inverted orange menu no-radius">
  <div class="ui container">
    <router-link to="/" exact class="header item">Matkoll</router-link>
    <div class="right menu">
      <a class="item">Om</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.ui.menu {
  margin-bottom: 0 !important;
}

.no-radius {
  border-radius: 0 !important;
}
</style>
