<template>
<div
  class="ui inverted vertical masthead center aligned segment"
  style="background-image: url(public/vegetables_basket.jpg)"
>
  <div class="ui container">
    <div class="ui large secondary orange pointing menu">
      <a class="active item">Matkoll</a>
      <a class="item">Om</a>
    </div>
  </div>

  <div class="ui text container">
    <h1 class="ui inverted header">
      Få koll på maten du äter
    </h1>
    <h2>Mata in din måltid nedan</h2>
  </div>
</div>
</template>

<script>

export default {
  name: 'home-banner'
}
</script>

<style>
.masthead {
  background-size: cover !important;
  min-height: 640px;
}

.masthead .menu {
  border-bottom: 0 !important;
}

.masthead .menu .item {
  border-color: #f99157;
  color: #f99157;
}

.masthead h1.ui.header {
  margin-top: 1em;
  font-size: 4em;
  font-weight: normal;
}
</style>
