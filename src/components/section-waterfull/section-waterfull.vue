<template>
  <div class="section-waterfull section">
    <div class="container">
      <p v-if="!d.length" style="text-align: center; padding:10% 0;">暂无活动</p>
      <div class="masonry">
        <slot name="firstColumn"></slot>
        <slot  name="secondColumn"></slot>
        <slot  name="thirdColumn"></slot>
      </div>
      <div class="button ripple" @click="getMore" style="width: 120px;" v-if="d&&d.length&&d.length > num">更多</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "section-waterfull",
      props:["d","num"],
      data(){
        return{
          isShow:true,
        }
      },
      methods:{
        getMore(){
          let newNum=this.num+9;
          this.$emit("listenNum",newNum);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .section-waterfull{
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .masonry {
      width: 100%;
      display: flex;
      flex-direction: column;
      @media only screen and (min-width: 500px) {
        flex-direction: row;
      }
      .column {
        display: flex;
        /*flex-flow: column wrap;*/
        flex-flow: wrap;
        width: 100%;
        @media only screen and (min-width: 500px) {
          width: calc(100% / 3);
        }
        .item {
          width:100%;
          box-sizing: border-box;
          padding: 10px;
          counter-increment: item-counter;
        }
      }
    }
    .button {
      display: inline-block;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
      border: none;
      border-radius: 6px;
      position: relative;
      padding: 20px 40px;
      font-size: $FS18;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0;
      will-change: box-shadow, transform;
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      color: $ffColor;
      background-color: $themeColor;
      &:active {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      }
    }
  }

</style>
