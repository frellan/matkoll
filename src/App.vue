<template>
<div id="app">
  <!-- <navbar></navbar> -->
  <router-view class="content"></router-view>
  <bottom></bottom>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  components: {
    Navbar,
    Bottom
  }
}
</script>

<style>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
  padding-bottom: 2em;
}
.centered {
  text-align: center;
}
</style>
