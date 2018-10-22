<template>
  <section_waterfull class="faculty-waterfull" :d="data" :num="num" @listenNum="updateNum">
    <div class="column" v-if="imgs.arr1" slot="firstColumn">
      <div class="item" v-for="(d,i) in imgs.arr1" :key="i">
        <div class="item__content">
          <img class="width100" :src="d.img_url" :alt="d.title">
        </div>
      </div>
    </div>
    <div class="column" v-if="imgs.arr2" slot="secondColumn">
      <div class="item" v-for="(d,i) in imgs.arr2" :key="i">
        <div class="item__content">
          <img class="width100" :src="d.img_url" :alt="d.title">
        </div>
      </div>
    </div>
    <div class="column" v-if="imgs.arr3" slot="thirdColumn">
      <div class="item" v-for="(d,i) in imgs.arr3" :key="i">
        <div class="item__content">
          <img class="width100" :src="d.img_url" :alt="d.title">
        </div>
      </div>
    </div>
  </section_waterfull>
</template>

<script>
  import section_waterfull from '../../../components/section-waterfull/section-waterfull'
  export default {
    name: "faculty-waterfull",
    props:["data"],
    components: {
      section_waterfull
    },
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
      }
    },
    data(){
      return{
        num:20,
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
