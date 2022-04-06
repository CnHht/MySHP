<!--suppress JSUnresolvedVariable -->
<template>
  <div class="type-nav">
    <div class="container">
      <!--   ChangeCurr方法是鼠标离开时current=-1,show=false   -->
      <div @mouseleave="ChangeCurr" @mouseenter="isShow">
        <h2 class="all">全部商品分类</h2>
        <transition
            appear
            name="animate__animated"
            leave-active-class="animate__backOutDown"
            enter-active-class="animate__backInDown"
        >
          <div class="sort" v-show="show">
            <!--    三级联动模块      -->
            <div class="all-sort-list2" @click="GoSearch">
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" @mouseenter="ChangeIndex(index)"
                   :class="{curr:currentIndex===index}">
                <h3>
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryName">{{ c1.categoryName }}</a>
                </h3>
                <!--二三级分类-->
                <!--   通过js完成二三级分类显示隐藏  -->
                <div class="item-list clearfix" :style="{display:currentIndex===index?'block':'none'}">
                  <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <!--    路由实现页面跳转使用编程式导航而不使用声明式导航是因为声明式导航是使用到了虚拟dom，由于三级联动标签很多，非常消耗内存   -->
                        <a :data-categoryName="c2.categoryName"
                           :data-category2Id="c2.categoryName">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                          <a :data-categoryName="c3.categoryName"
                             :data-category3Id="c3.categoryName">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <!--        <a href="###" v-for="(item,index) in NavItem" @mouseenter="ChangeNavIndex(index)" :style="{background:NavIndex===index?'lightskyblue':''}" >{{item}}</a>-->
        <a href="###" v-for="(item,index) in NavItem">{{ item }}</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import throttle from 'lodash/throttle';
import 'animate.css'

export default {
  name: "typeNav",
  data() {
    return {
      //存储用户鼠标悬停的一级分类
      currentIndex: -1,
      NavItem: ['服装城', '美妆馆', '尚品汇超市', '全球购', '闪购', '团购', '有趣', '秒杀',],
      NavIndex: -1,
      show: true
    }

  },
  //当组件挂载完毕，向服务器发请求，请求数据
  mounted() {
    //通知vuex发请求，获取数据到store下的home仓库中
    this.$store.dispatch('categoryList')
    //如果页面不是home，三级联动标签不显示，show置为false
    if (this.$route.path !== '/home') {
      this.show = false
    }

  },
  methods: {
    //解决卡顿现象（防抖和节流），现象：鼠标快速划过一级分类列表，浏览器没有识别到部分一级分类列表
    //鼠标悬停时 currentIndex == index
    ChangeIndex: throttle(function (index) {
      this.currentIndex = index

    }, 50),
    //鼠标移出 currentIndex=-1 :class值为false， less中.curr{}不生效
    ChangeCurr() {
      this.currentIndex = -1
      //
      if (this.$route.path !== '/home')
        this.show = false
    },
    GoSearch(event) {
      let {categoryname, category1id, category2id, category3id} = event.target.dataset
      let query = {categoryName: categoryname}
      if (categoryname) {
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        this.$router.push({
          name: 'search',
          query: query
        })
      }

    },
    isShow() {
      this.show = true
    },
    unShow() {
      this.show = false
    }
  },
  //接收store中的数据
  computed: {
    ...mapState({
      categoryList: (state) => {
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
        .item {
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

        .curr {
          background: lightskyblue;
        }

      }
    }
  }
}
</style>