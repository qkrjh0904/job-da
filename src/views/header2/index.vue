<template>
  <div class="header">
    <div></div>
    <div class="title">
      <span>Job Da</span>
    </div>
    <div class="header-right">
      <router-link to="/login">
        <div class="login-box">
          <i class="fas fa-lock-open"></i>
        </div>
      </router-link>
      <div class="my-page">
        <i class="far fa-user"></i>
      </div>
      <div class="hambuger-box" @click="toggleRight">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightClose: false
    };
  },
  methods: {
    toggleRight() {
      this.rightClose = !this.rightClose;
      this.$emit("right-close", this.rightClose);
    }
  }
};
</script>

<style lang="scss">
.header {
  background-color: #fff5f6;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  .title {
    span {
      color: black;
      font-size: 50px;
      font-weight: bold;
    }
  }
  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
    }
    .login-box {
      color: black;
      cursor: pointer;
      font-size: 35px;
    }
    .my-page {
      margin: 0 0 0 30px;
      font-size: 35px;
    }
    .hambuger-box {
      margin: 0 0 0 30px;
      cursor: pointer;
      font-size: 35px;
    }
  }
}
</style>
