<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :zoomEnable="zoomEnable" :center="center" class="amap-demo" :plugin="plugin">
      <el-amap-info-window isCustom="true" :position="mywindow.position" :content="mywindow.content"
                           :offset="mywindow.offset"></el-amap-info-window>
      <el-amap-marker :content="marker.content" :events="marker.events"></el-amap-marker>

    </el-amap>
  </div>
</template>

<script>
  export default {
    name: "s-map",
    data() {
      return {
        zoom: 16,
        zoomEnable:false,
        center: [121.629408, 29.87454],
        marker: {
          events: {
            click: () => {
              this.mywindow.visible = !this.mywindow.visible;
            },
            // dragend: (e) => {
            //   this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            // }
          },
          content: '<div class="amap-circle" style="background: #008efe;width: 14px;height: 14px;border: 1px solid #0b70f6;border-radius: 50%;"></div>',
        },
        mywindow: {
          position: [121.629408, 29.87454],
          offset: [0, -44],
          content:'<div><div style="background:#fff;padding:10px 20px;color:#333;border-bottom:1px solid #eee;box-shadow: 1px 2px 6px rgba(0,0,0,.5);position: relative;">\n' +
          '<span style="display:block;width:0;height:0;border-width:10px 10px 0;border-style:solid;border-color: #999 transparent transparent;position:absolute;bottom:-10px;left:50%;margin-left:-10px;">' +
          '<em style=" display:block;width:0;height:0;border-width:10px 10px 0;border-style:solid;border-color:#fff transparent transparent;position:absolute;bottom:1px; left:-10px;"></em></span>' +
          '<p>我在 <a style="color:inherit;font-weight: 700;">秀东尚座</a> 附近></p></div></div>',


        },
        plugin: {
          pName: 'Scale',
          events: {
            init(instance) {
              console.log(instance)
            }
          }
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-page-container {
    width: 100%;
    height: 40rem;
  }
</style>
