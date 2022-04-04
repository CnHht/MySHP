<template>
  <div>
    <h1>{{$route.query.keyword}}</h1>
    <h1>{{$route.params.keyword}}</h1>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>