<template>
  <div class="login-container">
    <div>
      <div class="login-title">
        <span style="font-size:50px; color:wheat">잡다</span> 와 함께라면
        <br />좋은일만 있을거에요~♥
      </div>
      <div class="login-box">
        <div class="id-box">
          <span>ID</span>
          <div style="margin-top:10px">
            <input type="text" />
          </div>
        </div>
        <div class="pw-box" style="margin-bottom:40px">
          <span>PW</span>
          <div style="margin-top:10px">
            <input type="password" />
          </div>
        </div>
        <router-link to="/main">
          <div class="login-btn">로그인</div>
        </router-link>

        <div class="add-option">
          <div class="text">
            <p>혹시</p>
            <div class="bar"></div>
          </div>
          <div class="wrap">
            <p>비밀번호를 잊으셨나요?</p>
            <div>
              <strong>비밀번호 찾기</strong>
            </div>
          </div>
          <div class="wrap">
            <p>아직 회원이 아니신가요?</p>
            <div>
              <strong>가입하기</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login-container {
  color: white;
  height: 100vh;
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-title {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
  }
  .login-box {
    width: 600px;

    input {
      width: 95%;
    }

    .id-box,
    .pw-box {
      margin: 30px 0;

      span {
        font-size: 20px;
      }
      input {
        height: 50px;
        border-radius: 10px;
        text-align: right;
        font-size: 19px;
        font-weight: bold;
        padding: 7px 10px;
      }
    }
    a {
      text-decoration: none;
    }
    .login-btn {
      cursor: pointer;
      margin: 70px 0;
      width: 100%;
      height: 60px;
      background-color: grey;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      border-radius: 10px;
      color: whitesmoke;
      padding-top: 20px;
    }
    .login-btn:hover {
      background-color: #242524;
    }
  }
  .add-option {
    .text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bar {
        margin-left: 22px;
        width: 90%;
        background-color: white;
        height: 2px;
      }
    }
    .wrap {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
