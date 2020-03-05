<template>
  <header class="header">
    <div class="header--container">
      <div class="header--container__left">
        <a href="#" class="m-logo">
          <img class="logo" src="../../static/images/logo.svg" alt="" srcset="" />
        </a>
      </div>
      <nav class="header--container__middle">
        <ul class="nav">
          <li class="nav--item">
            <a href="#" class="nav--item__link">首页</a>
          </li>
          <li class="nav--item">
            <a href="#" class="nav--item__link">发现</a>
          </li>
          <li class="nav--item">
            <a href="#" class="nav--item__link">设计师</a>
          </li>
          <li class="nav--item">
            <a href="#" class="nav--item__link">职位</a>
          </li>
          <li class="nav--item">
            <a href="#" class="nav--item__link">正版素材</a>
          </li>
          <li class="nav--item">
            <a href="#" class="nav--item__link">课程</a>
          </li>
          <li class="nav--item nav--item__more">
            <a href="#" class="nav--item__link">
              <i class="icon icon-more"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="header--container__right">
        <a class="link login" @click="goLogin">登录</a>
        <i class="icon-line"></i>
        <a class="link register" @click="goRegister">注册</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    goRegister() {}
  }
};
</script>

<style lang="scss">
.header {
  height: 60px;
  background: $brand-orange;
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  .header--container {
    width: 100%;
    display: flex;
    .header--container__left {
      flex: 0 0 auto;
    }
    .header--container__middle {
      flex: 1 0 auto;
      .nav {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        .nav--item {
          height: 60px;
          .nav--item__link {
            padding: 0 24px;
            line-height: 60px;
            height: 60px;
            display: block;
          }
          .icon {
            height: 60px;
          }
          &.nav--item__more {
            &:hover {
              background: none;
              .nav--item__link {
                color: $text-dark;
                display: block;
              }
            }
          }
          &:hover {
            background: $text-dark;
            .nav--item__link {
              color: $brand-orange;
            }
          }
        }
      }
    }
    .header--container__right {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      .link {
        margin-left: 20px;
      }
      .icon-line {
        width: 1px;
        height: 10px;
        background: $text-dark;
        display: block;
        margin-left: 20px;
      }
    }
  }
  .m-logo {
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    width: 113px;
    .logo {
      height: 20px;
    }
  }
}
</style>
