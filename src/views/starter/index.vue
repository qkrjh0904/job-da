<template>
  <div class="container">
    <Header />
    <!-- <router-link to="/customizing">
      <div class="customizing">커스터마이징 하기</div>
    </router-link>-->
    <div class="box">
      <div class="sel1">
        <div class="man" @click="man1">
          <div class="man-img">
            <img src="@/assets/img/lion.jpg" alt />
          </div>
          <div class="man-name">
            <span>초보</span>
          </div>
          <div class="check" v-if="check1">✔</div>
        </div>
        <div class="man" @click="man2">
          <div class="man-img">
            <img src="@/assets/img/lion.jpg" alt />
          </div>
          <div class="man-name">
            <span>중수</span>
          </div>
          <div class="check" v-if="check2">✔</div>
        </div>
        <div class="man" @click="man3">
          <div class="man-img">
            <img src="@/assets/img/lion.jpg" alt />
          </div>
          <div class="man-name">
            <span>고수</span>
          </div>
          <div class="check" v-if="check3">✔</div>
        </div>
      </div>
      <div class="next" v-if="check1||check2||check3">
        <div class="arrow">→</div>
        <div class="text">다음</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/header";

export default {
  components: {
    Header
  },
  data() {
    return {
      check1: false,
      check2: false,
      check3: false
    };
  },
  mounted() {},
  methods: {
    man1() {
      this.check1 = !this.check1;
      this.check2 = false;
      this.check3 = false;
    },
    man2() {
      this.check1 = false;
      this.check2 = !this.check2;
      this.check3 = false;
    },
    man3() {
      this.check1 = false;
      this.check2 = false;
      this.check3 = !this.check3;
    }
  }
};
</script>

<style lang="scss">
.container {
  background-color: #f1f1f1;
  height: 100vh;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  .customizing {
    margin: 20px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    background-color: #304156;
  }
  .next {
    position: fixed;
    right: 150px;
    top: 40vh;
    cursor: pointer;
    .arrow {
      font-size: 100px;
    }
    .text {
      font-size: 40px;
    }
  }
  .sel1 {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .man {
      margin: 20px 80px;
      cursor: pointer;
      .man-img {
        img {
          width: 15vw;
        }
      }
      .man-name {
        font-weight: bold;
        font-size: 30px;
        margin-top: 20px;
        text-align: center;
      }
      .check {
        margin-top: 20px;
        font-weight: bold;
        font-size: 60px;
        text-align: center;
        color: red;
      }
    }
  }
}
</style>
