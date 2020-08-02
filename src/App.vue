<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@font-face {
  font-family: HanNa;
  src: url(assets/font/BMHANNA_11yrs_ttf.ttf);
}
* {
  margin: 0px;
  font-family: HanNa;
}
</style>
