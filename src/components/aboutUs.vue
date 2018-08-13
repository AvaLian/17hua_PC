<template>
    <div>
      <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin" :zoomEnable="zoomEnable">
          <el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
          <el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
          <!--<el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>-->
        </el-amap>
      </div>
    </div>
</template>

<script>
    export default {
        name: "about-us",
        data () {
          return {
            zoom: 16,
            zoomEnable:true,
            center: [121.629408,29.87454],
            marker: {
              position:[121.629408,29.87454],
              events: {
                click: () => {
                  this.mywindow.visible=!this.mywindow.visible;
                },
                dragend: (e) => {
                  this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
                }
              },
              visible: true,
              draggable: false,
              clickable:true,
            },
            mywindow: {
              position: [121.629408,29.87454],
              // content: '<h4>该点数据信息</h4><div class="text item">Information A: ...</div><div class="text item">Information B: ...</div>',
              content: '我在“宁波秀东尚座“附近',
              visible: true,
              events: {
                close () {
                  this.mywindow.visible = false
                }
              }
            },
            plugin: {
              pName: 'Scale',
              events: {
                init (instance) {
                  console.log(instance)
                }
              }
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  .amap-page-container {
    width:100%;
    height: 40rem;
  }
</style>
