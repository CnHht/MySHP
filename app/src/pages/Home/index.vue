<template>
  <div>
    <!--使用三级联动组件，已注册为全局组件，不需要额外引入    -->
    <type-nav></type-nav>
    <!--  轮播图与快报组件-->
    <list-container></list-container>
    <!--  今天推荐组件-->
    <today-recommend></today-recommend>
    <!--  热卖排行组件-->
    <Rank></Rank>
    <!--  猜你喜欢组件-->
    <Like></Like>
    <!--  楼层喜欢组件-->
    <Floor v-for="(floorItem,index) in floorList" :key="floorItem.id" :list="floorItem"></Floor>
    <!--  商标喜欢组件-->
    <Brand></Brand>
  </div>
</template>

<script>
import listContainer from './listContainer'
import todayRecommend from './todayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
  name: "index",
  components:{
    listContainer,
    todayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  }
}
</script>

<style scoped>

</style>