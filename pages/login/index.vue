<template>
  <div class="register-container page">
    <div class="container">
      <div class="register--title">
        <a class="logo">
          <img src="~assets/images/logo-w.svg" />
        </a>
        <p class="tips">登录站酷网，与1000万+ 名设计创意人一起交流设计、分享快乐吧！</p>
      </div>
      <div class="register--box">
        <div class="box--head" :class="type">
          <span class="title" :class="{active:type === 'login'}" @click="changeMode">
            立即登录
          </span>
          <span class="title" :class="{active:type === 'register'}" @click="changeMode">
            快速注册
          </span>
          <span class="line"></span>
        </div>
        <div class="box--body">
          <Alert class="body--alert" :show.sync="alertShow" :title="alertTitle" />
          <el-form :model="register" class="ui-form" :rules="rules" ref="registerRuleForm" v-if="type==='register'">
            <el-form-item prop="phone">
              <el-input v-model="register.phone" placeholder="手机号" class="ui-input" type="tel"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="register.password" placeholder="密码" class="ui-input" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="newPassword">
              <el-input v-model="register.newPassword" placeholder="重复密码" class="ui-input" type="password"></el-input>
            </el-form-item>
            <a class="ui-link" @click="registerSubmit('registerRuleForm')">注册</a>
            <span class="ui-tips">
              <a class="link">忘记密码</a>
            </span>
          </el-form>
          <el-form :model="login" class="ui-form" :rules="rules" ref="loginRuleForm" v-else>
            <el-form-item prop="phone">
              <el-input v-model="login.phone" placeholder="手机号" class="ui-input" type="tel"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="login.password" placeholder="密码" class="ui-input" type="password"></el-input>
            </el-form-item>
            <a class="ui-link" @click="loginSubmit('loginRuleForm')">登录</a>
          </el-form>
        </div>
        <div class="box--foot">
        </div>
      </div>
      <div class="register--copyright">
        京ICP备11017824号-4 / 京ICP证130164号 北京市公安局朝阳分局备案编号:110105000501<br>Copyright © 2006-2018 ZCOOL 中文 English
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../../components/Alert";
import { apis } from "../../api";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error("请输入正确的手机号"));
      }
    };
    var checkPassword = (rule, value, callback) => {
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error("密码大于6位且由数字和字母组成"));
      }
    };
    var checknewPassword = (rule, value, callback) => {
      if (value === this.register.password) {
        callback();
      } else {
        return callback(new Error("两次密码不一致"));
      }
    };
    return {
      type: "login",
      alertShow: false,
      alertTitle: "",
      login: {
        phone: "",
        password: ""
      },
      register: {
        phone: "",
        password: "",
        newPassword: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: checkPassword, trigger: "blur" }
        ],
        newPassword: [
          { validator: checknewPassword, trigger: "blur" },
          { required: true, message: "请输入重复密码", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  components: {
    Alert
  },
  methods: {
    changeMode() {
      this.type = this.type === "register" ? "login" : "register";
    },
    registerSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.resgiterApi(this.register);
        } else {
          return false;
        }
      });
    },
    loginSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loginApi(this.login);
        } else {
          return false;
        }
      });
    },
    // 注册接口
    resgiterApi(data) {
      let _this = this;
      apis
        .registerApi(data)
        .then(res => {
          if (res.success) {
            this.type = "login";
            this.$refs["registerRuleForm"].resetFields();
          } else {
            _this.alertTitle = res.message;
            _this.alertShow = true;
          }
        })
        .catch(err => {});
    },
    // 登录接口
    loginApi(data) {
      let _this = this;
      apis
        .loginApi(data)
        .then(res => {
          if (res.success) {
            let token = res.data.token;
            this.$store.commit("set_token", token);
            this.$router.push("/");
          } else {
            _this.alertTitle = res.message;
            _this.alertShow = true;
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss">
.register-container {
  background: url("~assets/images/loginbg.jpg") no-repeat center;
  background-size: cover;
  .register--title {
    text-align: center;
    font-size: 18px;
    color: $color-fff;
    margin-top: 50px;
  }
  .register--box {
    width: 340px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: $color-fff;
    margin: 50px auto;
    padding: 40px 30px;
    .box--head {
      height: 50px;
      border-bottom: 1px solid $line-gary;
      display: flex;
      flex-direction: row;
      position: relative;
      &.login {
        .line {
          left: 0px;
        }
      }
      &.register {
        .line {
          left: 84px;
        }
      }
      .line {
        position: absolute;
        width: 64px;
        height: 2px;
        background: $text-ddark;
        display: block;
        left: 0;
        bottom: 0;
        transition: all 0.5s;
      }
      .title {
        display: block;
        margin-right: 20px;
        color: $text-ddark;
        font-size: 16px;
        color: $text-gary;
        cursor: pointer;
        &.active {
          // border-bottom: 2px solid $text-ddark;
          color: $text-ddark;
        }
        &:hover {
          // border-bottom: 2px solid $text-ddark;
          color: $text-ddark;
        }
      }
    }
    .box--body {
      padding-top: 40px;
      position: relative;
      .body--alert {
        position: absolute;
        top: 4px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    .ui-form {
      .el-form-item {
        margin-bottom: 0;
        .el-form-item__error {
          top: initial;
          bottom: 10px;
        }
      }
      .ui-input {
        .el-input__inner {
          width: 100%;
          padding: 0 20px;
          height: 50px;
          line-height: 50px;
          border: 1px solid $line-ddd;
          display: block;
          box-sizing: border-box;
          border-radius: 4px;
          outline: none;
          background: $text-lgary;
          font-size: 14px;
          color: $text-ddark;
          margin-bottom: 30px;
        }
      }
      .ui-link {
        width: 100%;
        height: 50px;
        line-height: 50px;
        display: block;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        background: $brand-orange;
        font-size: 14px;
        text-align: center;
        font-size: 16px;
        color: $text-ddark;
        margin-bottom: 20px;
        &:hover {
          background: darken($color: $brand-orange, $amount: 2);
        }
      }
      .ui-tips {
        text-align: right;
        width: 100%;
        display: block;
        .link {
          font-size: 14px;
          color: $text-ddark;
        }
      }
    }
  }
  .register--copyright {
    text-align: center;
    color: $color-fff;
    font-size: 12px;
    line-height: 20px;
  }
}
</style>