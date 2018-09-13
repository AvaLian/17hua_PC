<template>
  <div class="section" v-if="imgs">
    <div class="container">
      <div class="masonry">
        <div class="column" v-if="imgs.arr1">
          <div class="item" v-for="(d,i) in imgs.arr1" :key="i">
            <div class="item__content">
              <img class="width100" :src="d.img_url" :alt="d.title">
            </div>
          </div>
        </div>
        <div class="column" v-if="imgs.arr2">
          <div class="item" v-for="(d,i) in imgs.arr2" :key="i">
            <div class="item__content">
              <img class="width100" :src="d.img_url" :alt="d.title">
            </div>
          </div>
        </div>
        <div class="column" v-if="imgs.arr3">
          <div class="item" v-for="(d,i) in imgs.arr3" :key="i">
            <div class="item__content">
              <img class="width100" :src="d.img_url" :alt="d.title">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "faculty-waterfull",
    props:["data"],
    computed:{
      imgs(){
        let obj={
          arr1:[],
          arr2:[],
          arr3:[],
        };
        this.data.map((d,i)=>{
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
    }
  }
</script>

<style lang="scss" scoped>
  .masonry {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 500px) {
      flex-direction: row;
    }
  }

  .column {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    @media only screen and (min-width: 500px) {
      width: calc(100% / 3);
    }
  }

  .item {
    box-sizing: border-box;
    padding: 10px;
    counter-increment: item-counter;
  }
</style>
