<template>
  <div class="works-list-container page">
    <div class="container--post">
      <img class="post--img" />
    </div>
    <div class="container--userinfo">
      <div class="userinfo--avatar"></div>
      <div class="userinfo--info">
        <p class="info__nickname">好色之徒</p>
        <p class="info__base">重庆 | UI设计师</p>
        <p class="info__sign">你的能力决定你能到达多高，你的态度决定你可以走多远</p>
        <a class="info__btn ui--btn">上传作品</a>
      </div>
    </div>
    <Recommend :recommendList="recommendList" :types="types" :menus="menus" />
  </div>
</template>

<script>
import Recommend from "../../components/Recommend";
export default {
  data() {
    return {
      recommendList: [1, 2, 4],
      types: "works",
      menus: [
        {
          name: "首页",
          active: true
        },
        {
          name: "推荐",
          active: false
        },
        {
          name: "资料",
          active: false
        },
        {
          name: "收藏",
          active: false
        },
        {
          name: "生活",
          active: false
        },
        {
          name: "创作历程",
          active: false
        }
      ]
    };
  },
  middleware: "auth",
  components: {
    Recommend
  }
};
</script>

<style lang="scss">
.works-list-container {
  .container--post {
    height: 340px;
    background: black;
    .post--img {
    }
  }
  .container--userinfo {
    position: relative;
    text-align: center;
    padding-top: 80px;
    .userinfo--avatar {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      overflow: hidden;
      background: black;
      position: absolute;
      left: 50%;
      top: -50px;
      transform: translate(-50%, 0);
      border: 4px solid $color-fff;
    }
    .info__nickname {
      font-size: 24px;
      color: $text-ddark;
    }
    .info__base {
      font-size: 12px;
      color: $text-llgary;
      margin-top: 6px;
    }
    .info__sign {
      font-size: 14px;
      color: $text-666;
      margin-top: 20px;
    }
    .info__btn {
      display: block;
      margin: 30px auto;
    }
  }
}
</style>