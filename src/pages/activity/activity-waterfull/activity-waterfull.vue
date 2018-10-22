<template>

  <section_waterfull class="activity-waterfull section-bgColor" :d="data" :num="num" @listenNum="updateNum">
    <div class="column" v-if="imgs.arr1" slot="firstColumn">
      <div class="item" v-for="(item,i) in imgs.arr1" :key="i">
        <activity_item :item="item"></activity_item>
      </div>
    </div>
    <div class="column" v-if="imgs.arr2" slot="secondColumn">
      <div class="item" v-for="(item,i) in imgs.arr2" :key="i">
        <activity_item :item="item"></activity_item>
      </div>
    </div>
    <div class="column" v-if="imgs.arr3" slot="thirdColumn">
      <div class="item" v-for="(item,i) in imgs.arr3" :key="i">
        <activity_item :item="item"></activity_item>
      </div>
    </div>
  </section_waterfull>


</template>

<script>
  import section_waterfull from '../../../components/section-waterfull/section-waterfull'
  import activity_item from '../activity-item/activity-item'
  export default {
    name: "activity-waterfull",
    components: {
      section_waterfull,
      activity_item
    },
    props:["data"],
    computed:{
      imgs(){
        let obj={
          arr1:[],
          arr2:[],
          arr3:[],
        };
        this.data.map((d,i)=>{
          if (i>this.num-1) return false;
          switch (i%3){
            case 0:
              obj.arr1.push(d);
              break;
            case 1:
              obj.arr2.push(d);
              break;
            case 2:
              obj.arr3.push(d);
              break;
          }
        });
        return obj;
      },
      tel() {
        return this.$store.state.tel;
      },
    },
    data(){
      return{
        num:9,
      }
    },
    methods:{
      updateNum(param){
        this.num=param;
        if(this.num>this.data.length){
          this.num=this.data.length;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
