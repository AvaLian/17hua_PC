<template>
  <ul class="coller">
    <li class="coller-item" v-for="(d,i) in data" :key="i">
      <a href="#"><img :src="d.img_url" :alt="d.first_title"></a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "section-coller",
    computed: {
      coll() {
        return this.$store.state.coller;
      }
    },
    props:["data"]
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
        flex: 0 0 33.3%;
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
      .coller-item {
        flex: 0 50%;
      }
    }
    &-small {
      .coller {
        margin-top: 0;
      }
      .coller-item {
        flex: 0 0 100%;
        margin: 20px 0;
      }
    }
  }


</style>
