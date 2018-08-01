<template>
  <div class="vheader">
    <router-link to="/index">首页</router-link>
    <router-link to="/advan">画酷优势</router-link>
    <router-link to="/curIntro">课程介绍</router-link>
    <router-link to="/wOMouth">学员口碑</router-link>
    <router-link to="/faculty">师资力量</router-link>
    <router-link to="/cooper">合作伙伴</router-link>
    <router-link to="/aboutUs">关于我们</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "vheader"
    }
</script>

<style scoped>
.router-link-active{
 color:red;
}
</style>
