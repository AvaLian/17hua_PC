<template>
  <div class="wrap">
    <div class="logo">
      <p>ERROR! - 页面走丢啦!</p>
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
    .logo{
      text-align:center;
      margin: 80px 0;
      img {
        width: 350px;
      }
      p{
        font-size:$FS18;
        font-family: PingFangSC-Semibold;
        margin-bottom: 50px;
      }
    }
  }

  .boxArea-small{
    .wrap{
      .logo{
        p{
          font-size:28px;
        }
      }
    }
  }
</style>
