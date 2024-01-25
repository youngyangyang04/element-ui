<script setup lang="ts">
// import { ref } from 'vue'
import ElButton from './components/Button/Button.vue'
import ElButtonGroup from './components/ButtonGroup/ButtonGroup.vue'
// import ElContainer from './components/Container/Container.vue'
// import ElAside from './components/Container/Aside.vue'
// import ElHeader from './components/Container/Header.vue'
// import ElFooter from './components/Container/Footer.vue'
// import ElMain from './components/Container/Main.vue'
// import Collapse from './components/Collapse/Collapse.vue'
// import Item from './components/Collapse/CollapseItem.vue'
import ElIcon from './components/Icon/Icon.vue'
import ElLink from './components/Link/Link.vue'
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
    <!-- <el-button loading>按钮1</el-button>
    <el-button icon="arrow-right">按钮1</el-button> -->
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
    <!-- <el-link href="https://element-plus.org" target="_blank">default</el-link>
    <el-link type="primary">primary</el-link>
    <el-link type="success">success</el-link>
    <el-link type="warning">warning</el-link>
    <el-link type="danger">danger</el-link>
    <el-link type="info">info</el-link> -->
    <el-link type="danger" disabled>info</el-link>
    <el-link type="success" underline>info</el-link>
    <!-- <el-link type="primary" icon="arrow-right">
    
    </el-link> -->
    <el-button-group>
      <el-button type="primary" icon="arrow-right">Previous Page</el-button>
      <el-button type="danger">aaa</el-button>
    </el-button-group>
  </div>
</template>

<style scoped></style>
