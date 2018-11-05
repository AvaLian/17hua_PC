<template>
  <div class="activity">
    <banner :topbanner="topbanner" class="topbanner"></banner>

    <div class="search-bar" v-if="SCWTag<1">
      <div class="container">
        <div class="search-bar-city">
          <h4>{{cityName}}</h4>
          <div class="city-select"  ref="iconmenu">
            <p @click="selectCity"><span>切换城市</span><i class="iconfont icon-jiantou1"></i></p>
            <transition name="fade">
            <ul class="city-select-item" v-if="isShow">
              <li @click="changeCity({'city_code':'','name':'全部'})">
                <p class="ripple">全部</p>
              </li>
              <li v-for="(item,i) in city" :key="i" @click="changeCity(item)">
                <p class="ripple">{{item.name}}</p>
              </li>
            </ul>
            </transition>
          </div>
        </div>
        <div class="search-bar-value">
          <input type="text" v-model="jstet" placeholder="请输入搜索关键词" ref="input" @keydown="submit($event)">
          <div class="search-bar-value-btn button ripple" @click="changeValue"  >搜索</div>
        </div>
      </div>
    </div>

    <activity_waterfull :data="lists"></activity_waterfull>

  </div>
</template>

<script>
  import banner from '../../components/section-nybanner/section-nybanner'
  import activity_waterfull from './activity-waterfull/activity-waterfull'
  export default {
    name: "activity",
    components: {
      banner,
      activity_waterfull
    },
    computed: {
      SCWTag(){
        return this.$store.state.SCWTag;
      },
      topbanner() {
        return this.$store.state.activity.topbanner
      },
      lists() {
        return this.$store.state.activity.lists
      },
      city() {
        return this.$store.state.city
      },
    },
    created() {
      this.$store.dispatch("dataActivity",this.p)
    },
    // mounted() {
    //   document.addEventListener('click', (e) => {
    //     if (!!this.$refs.iconmenu.contains(e.target)) return false;
    //     this.isShow = false;
    //   })
    // },
    data(){
      return{
        jstet:"",
        isShow:false,
        cityName:"全部",
        p: {
          city_code: "",
          start:this.$store.state.date.pastDate,
          nowDate:this.$store.state.date.nowDate,
          end:this.$store.state.date.futureDate,
          stext:"",
          fresh:true,
        },
      }
    },
    methods:{
      selectCity(){
        this.isShow=!this.isShow;
      },
      changeCity(city){
        this.p.city_code=city.code;
        this.cityName=city.name;
        this.isShow=false;
        this.$store.dispatch("dataActivity",this.p);
      },
      changeValue(){
        this.p.stext=this.jstet;
        this.$store.dispatch("dataActivity",this.p)
      },
      submit(e){
        if(e.keyCode != 13) return false;
        this.p.stext=this.jstet;
        this.$refs.input.blur();
        this.$store.dispatch("dataActivity",this.p)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/icon.css";
  .search-bar{
    .container{
      height: 80px;
      border-bottom:1px solid $borderColor;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-city{
      display: flex;

      color:$fMColor;
      h4{
        font-size: 24px;
        margin-right: 20px;
      }
      p{
        display: flex;
        justify-content: center;
        align-items: center;

      span{
        font-size: $FS16;
        color:$f9EColor
      }
      i{
        font-size: 24px;
      }
      }
    }
    &-value{
      $search-bar-value-height:42px;
      display: flex;
      flex: 0 0 60%;
      border-radius: 20px;
      overflow: hidden;
      height: $search-bar-value-height;
      border: 1px solid $borderColor;
      box-sizing: border-box;
      input{
        width: 80%;
        padding-left: 20px;
        outline: none;
      }
      &-btn{
        width: 20%;
        text-align: center;
        font-size: $FS20;
        color:$ffColor;
        line-height: $search-bar-value-height;
        background: $themeColor;
        cursor: pointer;
      }
    }
  }

  .city-select{
    position: relative;
    &-item{
      width: 100%;
      position: absolute;
      top:30px;
      background: $ffColor;
      z-index: 99;
      padding: 0 10px;
      box-sizing: border-box;
      height: 300px;
      overflow-y: auto;
      li{
        height: 44px;
        line-height: 44px;
        border-bottom: 1px dashed $borderColor;
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
</style>
