<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="ChangeCurr">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" @mouseenter="ChangeIndex(index)" :class="{curr:currentIndex===index}" >
              <h3 >
                <a href="">{{c1.categoryName}}</a>
              </h3>
              <!--二三级分类-->
              <!--   通过js完成二三级分类显示隐藏  -->
              <div class="item-list clearfix" :style="{display:currentIndex===index?'block':'none'}">
                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="">{{c2.categoryName}}</a>
                    </dt>
                    <dd >
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                        <a href="">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
<!--        <a href="###" v-for="(item,index) in NavItem" @mouseenter="ChangeNavIndex(index)" :style="{background:NavIndex===index?'lightskyblue':''}" >{{item}}</a>-->
        <a href="###" v-for="(item,index) in NavItem">{{item}}</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "typeNav",
  data(){
    return{
      //存储用户鼠标悬停的一级分类
      currentIndex:-1,
      NavItem:['服装城','美妆馆','尚品汇超市','全球购','闪购','团购','有趣','秒杀',],
      NavIndex:-1,
    }

  },
  //当组件挂载完毕，向服务器发请求，请求数据
  mounted() {
    //通知vuex发请求，获取数据到store下的home仓库中
    this.$store.dispatch('categoryList')
  },
  methods:{
    //鼠标悬停时 currentIndex ==
    ChangeIndex(index){
      this.currentIndex = index
      //解决卡顿现象（防抖和节流），现象：鼠标快速划过一级分类列表，浏览器没有识别到部分一级分类列表

    },
    //鼠标移出 currentIndex=-1 :class值为false， less中.curr{}不生效
    ChangeCurr(){
      this.currentIndex = -1
    },
    ChangeNavIndex(index){
      this.NavIndex = index
    }


  },
  //接收store中的数据
  computed:{
    ...mapState({
      categoryList:(state)=>{
        return state.home.categoryList
      }
    })
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid lightskyblue;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: lightskyblue;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }


    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item{
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .curr{
          background:lightskyblue;
        }

      }
    }
  }
}
</style>