<script setup lang="ts">
// import { ref } from 'vue'
import ElButton from './components/Button/Button.vue'
// import ElContainer from './components/Container/Container.vue'
// import ElAside from './components/Container/Aside.vue'
// import ElHeader from './components/Container/Header.vue'
// import ElFooter from './components/Container/Footer.vue'
// import ElMain from './components/Container/Main.vue'
// import Collapse from './components/Collapse/Collapse.vue'
// import Item from './components/Collapse/CollapseItem.vue'
import ElIcon from './components/Icon/Icon.vue'
// const openedValue = ref(['a'])
// setTimeout(() => {
//   openedValue.value = ['a', 'b']
// }, 2000)
</script>

<template>
  <div>
    <!-- <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside></el-aside>
        <el-main></el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>  -->
    <!-- <el-button >按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button type="info">按钮</el-button>
    <el-button type="warning">按钮</el-button>
    <el-button type="success">按钮</el-button> -->
    <el-button loading>按钮1</el-button>
    <el-button icon="arrow-right">按钮1</el-button>
    <!-- <el-button >按钮</el-button> -->
    <!-- <Collapse v-model="openedValue">
      <Item name="a">
        <template #title>
          <h1>nice title A</h1>
        </template>
        <div>aaa </div>
      </Item>
      <Item name="b" title="b">
        <div>bbb</div>
      </Item>
      <Item name="c" title="c" disabled>
        <div>ccc</div>
      </Item>
    </Collapse>
    {{openedValue}} -->
    <el-icon icon="arrow-right" color="blue"></el-icon>
  </div>
</template>

<style scoped></style>
