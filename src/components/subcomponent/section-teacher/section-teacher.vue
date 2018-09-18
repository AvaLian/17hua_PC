<template>
  <div class="vteacher">
    <ul class="vteacher-master" v-if="master">
      <li class="vteacher-master-item boxRadius" v-for="(d,i) in master" :key="i"
          :style="{'background':bgColor.m[i]}">
        <div class="vteacher-master-item-img">
          <img :src="d.img_url" alt="">
        </div>
        <div class="vteacher-master-item-con">
          <p class="vteacher-item-con-name">{{d.first_title}}</p>
          <p class="vteacher-master-item-con-pro">艺术大师</p>
          <div class="vteacher-master-item-con-des">{{d.second_title}}</div>
          <div class="vteacher-master-item-con-btn button ripple" @click="gotoFacultyDetail(d.id)">查看详情</div>
        </div>
      </li>
    </ul>

    <ul class="vteacher-tutor" v-if="tutor">
      <li class="vteacher-tutor-item boxRadius" v-for="(d,i) in tutor" :key="i">
        <div class="vteacher-tutor-item-img" :style="{'background':bgColor.t[i]}">
          <img :src="d.img_url" alt="">
        </div>
        <div class="vteacher-tutor-item-con">
          <p class="vteacher-item-con-name" v-html="d.first_title"></p>
          <span class="vteacher-tutor-item-con-btn button ripple" @click="gotoFacultyDetail(d.id)">查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "section-teacher",
    props: ["data"],
    data() {
      return {
        bgColor: {
          m: ["linear-gradient(#f4f2f3, #d6d6d6)"],
          t: ["linear-gradient(#95e8cc,#42b2b3)", "linear-gradient(#91dae0,#4070bc)"]
        }
      }
    },
    computed: {
      master() {
        let arr = [];
        this.data.forEach((d, i) => {
          if (d.location == "A") arr.push(d)
        });
        return arr
      },
      tutor() {
        let arr = [];
        this.data.forEach((d, i) => {
          if (d.location == "B") arr.push(d)
        });
        return arr
      }
    },
    methods: {
      gotoFacultyDetail(id) {
        this.$router.push({name: 'FacultyDetail',params: {id: id}});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vteacher {
    color: $fMColor;
    &-item-con-name {
      font-family: PingFangSC-Medium;
    }
    &-master {
      &-item {
        box-shadow: 0 0 100px rgba(0, 0, 0, .2);
        overflow: hidden;
        display: flex;
        &-img {
          flex: 0 0 60%;
          margin-right: 20px;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        &-con {
          flex: 0 0 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          .vteacher-item-con-name {
            font-size: 60px;
          }
          &-pro {
            color: $themeColor;
            margin: 6% 0 8% 0;
            font-size: 30px;
            font-family: PingFangSC-Semibold;
          }
          &-des {
            line-height: 1.6;
            text-align: justify;
            font-size: $FS24;
          }
          &-btn {
            color: $ffColor;
            background: $themeColor;
            box-shadow: (0 0 20px $themeColor);
            cursor: pointer;
            margin-top: 10%;
          }
        }
      }
    }
    &-tutor {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 10%;
      &-item {
        flex: 0 0 46%;
        background: $ffColor;
        &-img {
          width: 100%;
          height: 340px;
          position: relative;
          border-top-right-radius: $boxRadius;
          border-top-left-radius: $boxRadius;
          img {
            height: 110%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
          }
        }
        &-con {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 0;
          .vteacher-item-con-name {
            font-size: 28px;
            margin-bottom: 5%;
            text-align: center;
            line-height: 1.2;
          }
          &-btn {
            color: $themeColor;
            border: 1px solid $themeColor;
          }
        }
      }
    }
  }

  .button {
    width: 178px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: PingFangSC-Medium;
    font-size:24px;
    cursor: pointer;
    border-radius: 6px;
  }

  .boxArea {
    &-small {
      .button {
        font-size: $FS18;
      }
      .vteacher-tutor{
        margin-top: 20%;
        &-item {
          flex: 0 0 100%;
          &:not(:first-child) {
            margin-top: 20%;
          }
          &-con {
            padding: 15px 0;
            &-name {
              font-size: $FS24;
            }
            .vteacher-item-con-name {
              font-size: $FS24;
            }
          }
        }
      }

      .vteacher-master-item {
        flex-direction: column;
        box-shadow: 0 0 50px rgba(0, 0, 0, .2);
        &-img {
          margin-right: 0;
          img {
            width: 100%;
          }
        }
        &-con {
          padding: 10%;
          .vteacher-item-con-name {
            font-size: 30px;
          }
          &-pro {
            color: $themeColor;
            font-size: $FS18;
          }
          &-des {
            font-size: $FS16;
          }
          &-btn {
            margin-top: 40px;
          }
        }
      }
    }
  }
</style>
