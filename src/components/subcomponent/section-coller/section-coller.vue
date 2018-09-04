<template>
  <ul class="coller">
    <li class="coller-item" v-for="(e,i) in coll" :key="i">
      <a href="#"><img :src="e.imgUrl" alt=""></a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "section-coller",
        computed:{
          coll(){
            return this.$store.state.coller;
          }
        },
        created(){
          this.$store.dispatch("apiColler")
        }
    }
</script>

<style lang="scss" scoped>
  /*合作伙伴*/
  .coll {
    &er {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 100px;
      &-item {
        flex:0 0 33.3%;
        text-align: center;
        /*margin-top: 5%;*/
        img {
          width: 260px;
        }
      }
    }
  }


  .boxArea {
    &-middle {
      .coller-item{
        flex: 0 50%;
      }
    }
    &-small {
      .coller{
        margin-top: 0;
      }
      .coller-item{
        flex: 0 0 100%;
        margin: 20px 0;
      }
    }
  }


</style>
