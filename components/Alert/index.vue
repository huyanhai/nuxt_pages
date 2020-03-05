<template>
  <el-alert type="error" :title="title" show-icon class="model--alert" v-if="show"></el-alert>
</template>

<script>
export default {
  props: {
    title: {
      default: "提示文字",
      type: String
    },
    show: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    show: {
      handler(val, oldVal) {
        if (!this.show) return false;
        setTimeout(() => {
          this.$emit("update:show", false);
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss">
.model--alert {
  height: 32px;
  padding: 8px;
  .el-alert__closebtn {
    top: 10px;
    display: none;
  }
}
</style>