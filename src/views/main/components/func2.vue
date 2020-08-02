<template>
  <div class="func-container" @click="func(1)">
    <div class="view-box">
      <div class="view">
        <img src="@/assets/img/news.png" alt />
      </div>
    </div>
    <div class="func-text">
      <span>취업 뉴스</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    func(n) {
      this.$emit("add-component", n);
    }
  }
};
</script>

<style lang="scss">
.func-container {
  margin-bottom: 30px;
  .view-box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    .view {
      cursor: pointer;
      background-color: white;
      width: 80%;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .func-text {
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
