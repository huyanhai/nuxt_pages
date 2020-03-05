<template>
  <div class="pages-container">
    <Header v-if="show" />
    <nuxt />
    <Footer v-if="show" />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      show: true,
      path: ""
    };
  },
  created() {
    this.path = this.$route.path;
    this.checkPath();
  },
  methods: {
    checkPath() {
      this.show = this.path === "/login" ? false : true;
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to, from) {
      this.path = this.$route.path;
      this.checkPath();
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.pages-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    flex: 0 0 auto;
  }
  .page {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
}
</style>
