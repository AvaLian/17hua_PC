<template>
  <ul class="ability">
    <li class="ability-item boxRadius" v-for="(d,i) in data">
      <div class="ability-item-title">
        <i class="ability-item-title-icon" :style="{'background-image':'url('+d.img_url+')'}"></i>
        <span>{{d.first_title}}</span>
      </div>
      <p class="ability-item-des">{{d.second_title}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "advantage-vts",
    props:["data"]
  }
</script>

<style lang="scss" scoped>
  .ability {
    display: flex;
    justify-content: space-between;
    &-item {
      flex: 0 0 22%;
      padding: 2%;
      box-sizing: border-box;
      border: 1px solid $borderColor;
      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 10%;
        font-size: $FS20;
        span {
          font-weight: bold;
          color: $fMColor;
        }
        &-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-position: center;
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
      &-des {
        line-height: 1.6;
        color: $f5AColor;
      }
      &:nth-child(2) {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
      &:hover {
        box-shadow: 0 0 50px rgba(0, 0, 0, .1);
      }
    }
  }

  .boxArea {
    &-small {
      .ability {
        flex-direction: column;
        &-item {
          flex: 0 0 100%;
          margin: 5% 0;
          padding:8% 6%;
          &:first-child{
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
