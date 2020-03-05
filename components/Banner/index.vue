<template>
  <el-carousel indicator-position="none">
    <el-carousel-item v-for="(item, index) in banners"
                      :key="index">
      <img :src="item.src"
           alt=""
           srcset="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang='scss'>
.el-carousel__item {
  img {
    width: 100%;
  }
}
</style>
