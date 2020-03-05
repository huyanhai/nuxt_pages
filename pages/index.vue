<template>
  <div class="index-container page">
    <div class="index-banner">
      <div class="banner container">
        <Banner :banners="banners" />
      </div>
    </div>
    <Recommend :recommendList="recommendList" :menus="menus" />
    <div class="ad">
      <a href="">
        <img src="https://reviveimg.hellorf.com/www/images/caf14458a9a7efd25ea6d1cdf101dd63.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Recommend from "../components/Recommend";
import axios from "axios";
export default {
  data() {
    return {
      banners: [
        {
          src:
            "https://img.zcool.cn/community/01d7e35e4a53b1a80120a895dbc69c.jpg@1380w"
        },
        {
          src:
            "https://img.zcool.cn/community/0175085e472084a801216518a0ae26.png@1380w"
        },
        {
          src:
            "https://img.zcool.cn/community/0110635e472066a8012165182898c2.png"
        }
      ],
      recommendList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      menus: [
        {
          name: "首页推荐",
          active: true
        },
        {
          name: "最新发布",
          active: false
        }
      ]
    };
  },
  components: {
    Banner,
    Recommend
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    dec() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style lang="scss">
.index-container {
  background: $color-fff;
  .index-banner {
    padding: 0 30px;
  }
  .banner {
    max-width: 1220px;
    margin: 20px auto !important;
    border-radius: 5px;
    overflow: hidden;
    height: 290px;
  }
}
</style>
