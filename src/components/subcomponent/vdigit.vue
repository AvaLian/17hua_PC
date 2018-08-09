<template>
    <div class="digit" :style="{'color':color}" :class="{'digit-arrowup':!up}">
      <div class="digit-con">
        <span class="digit-con-num">{{num}}</span>
        <div class="digit-con-percent">
          <div class="arrowicons" v-if="up">
            <i class="iconfont icon-jiantou iconfont-1"></i>
            <i class="iconfont icon-jiantou iconfont-2"></i>
            <i class="iconfont icon-jiantou iconfont-3"></i>
          </div>
          <span class="digit-con-percent-fuhao">%</span>
        </div>
      </div>
      <p class="digit-des">{{desWord[des]}}</p>
    </div>
</template>

<script>
    export default {
        name: "vdigit",
        data(){
            return{
              desWord:["服务效率","满意度","用户反馈"]
            }
        },
        props: {
          color:{
            type: String,
            default: "#fff"
          },
          up:{
            type:Boolean,
            default:true
          },
          num:{
            type:Number,
            default:0
          },
          des:{
            type:Number
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";


  .boxArea{
    &-small{
      .digit{
        &-con{
          &-num{
            font-size: 4rem;
          }
          .iconfont{
            &-1{
              font-size: $RS18 !important;
            }
            &-2{
              font-size: $RS12 !important;
            }
            &-3{
              font-size: 8px !important;
            }
          }
        }
        &-des{
          font-size: $RS14;
        }
      }


    }
  }


  .digit{
    &-con{
      display: flex;
      position: relative;
      &-num{
        font-size:6.8rem;
        margin-right: 6px;
      }
      &-percent{
        position: absolute;
        right:-20px;
        top:0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-fuhao{
          position: relative;
          top:-4px;
        }
        .arrowicons{
          position: relative;
          .iconfont{
            &-1{
              font-size: $RS20;
            }
            &-2{
              opacity:.7 ;
              position: absolute;
              left: -8px;
              top:-4px;
              font-size: $RS14;
            }
            &-3{
              opacity:.4;
              position: absolute;
              right: 0px;
              top:-10px;
              font-size: $RS10;
            }
          }
        }
      }
    }
    &-des{
      text-align: center;
      line-height: 2;
    }
    &-arrowup{
      .digit-con{
        &-num{
          margin-right:0;
        }
        &-percent{
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
