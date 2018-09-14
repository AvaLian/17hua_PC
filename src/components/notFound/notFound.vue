<template>
  <div class="wrap">
    <div class="logo">
      <p>ERROR! - 页面走丢啦</p>
      <img src="./images/404-1.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "not-found",
  }
</script>

<style lang="scss" scoped>

  .wrap{
    margin:0 auto;
    width:1000px;
    .logo{
      text-align:center;
      margin-top:200px;
      img {
        width: 350px;
      }
    }
  }
</style>
