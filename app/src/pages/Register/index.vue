<template>
  <div>
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link class="login" to="/login">登录</router-link>
					</span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <span></span>
        <!--    utils中的vee-validate配置项attributes中的属性对应name，   v-validate中的require:true 意思是必须验证  regex：校验规则      -->
        <input
            placeholder="请输入你的手机号"
            v-model="phone"
            name="phone"
            v-validate="{ required: true, regex: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/}"
            :class="{ invalid: errors.has('phone') }"
        />
        <span class="error-msg">{{ errors.first("phone") }}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input
            placeholder="请输入验证码"
            v-model="code"
            name="code"
            v-validate="{ required: true, regex: /^\d{6}$/}"
            :class="{ invalid: errors.has('code') }"
        />
        <el-button type="info" icon="el-icon-s-comment" @click="getCode">验证码</el-button>
        <span class="error-msg">{{ errors.first("code") }}</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
            placeholder="请输入密码"
            v-model="password"
            name="password"
            v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"
            :class="{ invalid: errors.has('password') }"
            type="password"
        />
        <span class="error-msg">{{ errors.first("password") }}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input
            placeholder="请输入确认密码"
            v-model="password1"
            name="password1"
            v-validate="{ required: true, is:password}"
            :class="{ invalid: errors.has('password1') }"
            type="password"
        />
        <span class="error-msg">{{ errors.first("password1") }}</span>
      </div>
      <div class="controls">
        <input
            placeholder="请输入确认密码"
            v-model="isCheck"
            name="isCheck"
            v-validate="{ required: true,Agree: true}"
            :class="{ invalid: errors.has('isCheck') }"
            type="checkbox"
        />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">{{ errors.first("isCheck") }}</span>
      </div>
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Register",
  data(){
    return{
      phone:"",
      code:"",
      password:"",
      password1:"",
      isCheck:true
    }
  },
  methods:{
    async getCode(){
        try {
          const {phone} = this
          phone && await  this.$store.dispatch('GetUserGegCode',phone)
          console.log(this.$store)
          this.code = this.$store.state.user.code
        }catch (e) {

        }
    },
    async userRegister() {
        try {
          //所有表单验证成功才去注册
          const success = await this.$validator.validateAll();
          const { phone, code, password, password1 } = this;
          let res = await this.$store.dispatch("UserRegister", {
            phone,
            code,
            password,
          });
          console.log(res)
          //注册成功进行路由的跳转

        } catch (error) {
          alert(error.message);
        }
    },
  }

}
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;

  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    padding-left: 390px;
    margin-bottom: 18px;
    position: relative;

    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .controls {
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;

    button {
      outline: none;
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
    }
  }
}

.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>