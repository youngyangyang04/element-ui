<script setup lang="ts">
// import ElButton from './components/Button/Button.vue'
import ElContainer from './components/Container/Container.vue'
import ElAside from './components/Container/Aside.vue'
import ElHeader from './components/Container/Header.vue'
import ElFooter from './components/Container/Footer.vue'
import ElMain from './components/Container/Main.vue'
</script>

<template>
  <div>
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside></el-aside>
        <el-main></el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
    <!-- <el-button >按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button type="info">按钮</el-button>
    <el-button type="warning">按钮</el-button>
    <el-button type="success">按钮</el-button> -->
  </div>
</template>

<style scoped>
</style>
