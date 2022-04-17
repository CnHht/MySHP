<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <span>欢迎您！用户</span>
            <a>{{userName}}</a>
            <a class="register">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <router-link to="/shopcart">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home" >
          <img src="./images/mylogo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">

          <el-input type="text" id="autocomplete" class="searchInput" v-model="keyword" clearable  @keyup.enter.native="goSearch"/>
          <el-button type="primary" icon="el-icon-search" @click="goSearch" >搜索</el-button>
<!--          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>-->
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    //点击搜索按钮时回调函数
    goSearch(){
      let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
      };
      location.query = this.$route.query;
      this.$router.push(location);
    },
    clearKeyword(){
      this.keyword = ""
    }


  },
  data(){
    return{
      keyword:'',
    }
  },
  mounted() {
    //
    this.$bus.$on('clear',this.clearKeyword)
    console.log('清除keyword')
  },
  computed:{
    userName(){
      return this.$store.state.user.userData.name;
    }
  }

}
</script>

<style  lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      //float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        .searchInput {
          margin-left: 345px;
          width: 490px;
          height: 38px;
          padding: 0px 4px;
        }
        //input {
        //  box-sizing: border-box;
        //  width: 490px;
        //  height: 38px;
        //  padding: 0px 4px;
        //  border: 2px solid skyblue;
        //  float: left;
        //
        //  &:focus {
        //    outline: none;
        //  }
        //}
        //
        //button {
        //  height: 38px;
        //  width: 85px;
        //  background-color: skyblue;
        //  border: none;
        //  color: #fff;
        //  float: left;
        //  cursor: pointer;
        //  &:focus {
        //    outline: none;
        //  }
        //}
      }
    }
  }
}
</style>