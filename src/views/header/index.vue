<template>
  <div class="header">
    <div class="title">
      <span>잡다</span>
    </div>
    <router-link to="/login">
      <div class="login-box">로그인</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background-color: #304156;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    span {
      color: white;
      font-size: 50px;
      font-weight: bold;
    }
  }
  .login-box {
    padding: 10px;
    position: relative;
    background-color: white;
    color: #304156;
    font-size: 30px;
    font-weight: bold;
    border-radius: 10px;
    right: -40vw;
    a {
      text-decoration: none;
    }
  }
}
</style>
