<template>
  <div class="container">
    <Header @right-close="toggleRight" />
    <div class="main-box">
      <div class="main-page" :class="{mainExpand:rightClose}">
        <grid-layout
          :layout.sync="layout"
          :col-num="12"
          :row-height="30"
          :is-draggable="!rightClose"
          :is-resizable="!rightClose"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[20, 20]"
          :use-css-transforms="true"
        >
          <grid-item
            v-for="item in layout"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :key="item.i"
          >
            <div class="item-header">
              <div class="item-title">
                <span>{{ item.name }}</span>
              </div>
              <div class="item-delete" @click="deleteComponent(item.i)" v-if="!rightClose">
                <span>X</span>
              </div>
            </div>
            <img :src="require(`@/assets/img/${item.img}`)" />
          </grid-item>
        </grid-layout>
      </div>
      <div class="right" :class="{closeRight:rightClose}">
        <div class="components" v-if="!rightClose">
          <Func1 @add-component="func" />
          <Func2 @add-component="func" />
          <Func3 @add-component="func" />
          <Func4 @add-component="func" />
          <Func5 @add-component="func" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var testLayout = [
  { x: 0, y: 0, w: 8, h: 20, i: "0", name: "채용 캘린더", img: "calendar.png" },
  { x: 8, y: 0, w: 4, h: 10, i: "1", name: "취업 뉴스", img: "news.png" },
  { x: 8, y: 10, w: 4, h: 10, i: "2", name: "커뮤니티", img: "community.png" },
  {
    x: 0,
    y: 20,
    w: 6,
    h: 10,
    i: "3",
    name: "영업직무 기술서",
    img: "job.png"
  }
];

import Header from "@/views/header2";

import Func1 from "./components/func1";
import Func2 from "./components/func2";
import Func3 from "./components/func3";
import Func4 from "./components/func4";
import Func5 from "./components/func5";

import VueGridLayout from "vue-grid-layout";

export default {
  components: {
    Header,
    Func1,
    Func2,
    Func3,
    Func4,
    Func5,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      layout: testLayout,
      funcName: [
        "채용 캘린더",
        "취업 뉴스",
        "취업 커뮤니티",
        "영업 직무 기술서",
        "취업 마켓"
      ],
      imgName: [
        "calendar.png",
        "news.png",
        "community.png",
        "job.png",
        "market.png"
      ],
      id: 3,
      rightClose: false
    };
  },
  mounted() {},
  methods: {
    func(n) {
      if (confirm(`${this.funcName[n]}를 추가하시겠습니까?`)) {
        this.id += 1;
        let ty = 0;
        for (let i = 0; i < this.layout.length; ++i) {
          ty = Math.max(this.layout[i].y + this.layout[i].h);
        }
        this.layout.push({
          x: 0,
          y: ty,
          w: 3,
          h: 10,
          i: this.id,
          name: this.funcName[n],
          img: this.imgName[n]
        });
      }
    },
    deleteComponent(n) {
      if (confirm(`제거하시겠습니까?`)) {
        for (let i = 0; i < this.layout.length; ++i) {
          if (this.layout[i].i === n) {
            this.layout.splice(i, 1);
          }
        }
      }
    },
    toggleRight(n) {
      this.rightClose = n;
    }
  }
};
</script>

<style lang="scss">
.container {
  text-align: center;
  position: relative;

  .main-box {
    display: flex;
    // height: 100vh;
    .main-page {
      background-color: #fff5f6;
      width: 85vw;
      height: 100%;

      .vue-grid-item {
        // border-radius: 20px;
        text-align: center;
        background-color: white;
        padding: 0 5px;

        .item-header {
          padding: 10px 20px;
          margin: 10px 0 20px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-title {
            span {
              font-size: 28px;
              font-weight: bold;
            }
          }
          .item-delete {
            color: red;
            font-weight: bold;
            cursor: pointer;
          }
        }

        img {
          width: 95%;
          height: 80%;
          // border-radius: 20px;
        }
      }
    }
    .right {
      padding: 10px;
      width: 15vw;
      background-color: #ffe0e5;
      overflow: scroll;
      transition: width 0.5s, height 0.5s;
      .components {
        margin-top: 50px;
      }
    }
    .closeRight {
      width: 0px !important;
      padding: 0;
      transition: width 0.5s;
    }
    .mainExpand {
      width: 100vw;
    }
  }
  ::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #486586;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    width: 16px;
    height: 16px;
    background: #304156;
  }
}
</style>
