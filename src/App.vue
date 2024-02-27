<script setup lang="ts">
// import { ref, onMounted } from 'vue'
// // import ElButton from './components/Button/Button.vue'
// // import ElButtonGroup from './components/ButtonGroup/ButtonGroup.vue'
// // import ElContainer from './components/Container/Container.vue'
// // import ElAside from './components/Container/Aside.vue'
// // import ElHeader from './components/Container/Header.vue'
// // import ElFooter from './components/Container/Footer.vue'
// // import ElMain from './components/Container/Main.vue'
// // import Collapse from './components/Collapse/Collapse.vue'
// // import Item from './components/Collapse/CollapseItem.vue'
// // import ElIcon from './components/Icon/Icon.vue'
// // import ElLink from './components/Link/Link.vue'
// // import ElAlert from './components/Alert/Alert.vue'
// import ElTooltip from './components/Tooltip/Tooltip.vue'
// const openedValue = ref(['a'])
// setTimeout(() => {
//   openedValue.value = ['a', 'b']
// }, 2000)

// import { createPopper } from '@popperjs/core'
// import type { Instance } from '@popperjs/core'
// const overlayNode = ref<HTMLElement>()
// const triggerNode = ref<HTMLElement>()
// let popperInstance: Instance | null = null
// console.log(popperInstance)
// onMounted(() => {
//   if (overlayNode.value && triggerNode.value) {
//     popperInstance = createPopper(triggerNode.value, overlayNode.value, { placement: 'bottom' })
//   }
// })
</script>

<template>
  <div>
    <!-- <header>
      <img alt="Vue logo" class="logo" src="./assets//vue.svg" width="125" height="125" ref="triggerNode"/>
      <div ref="overlayNode"><h1>Hello Tooltip</h1></div>
    </header> -->

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
    <!-- <el-icon icon="arrow-right" color="blue"></el-icon> -->
    <!-- <el-link href="https://element-plus.org" target="_blank">default</el-link>
    <el-link type="primary">primary</el-link>
    <el-link type="success">success</el-link>
    <el-link type="warning">warning</el-link>
    <el-link type="danger">danger</el-link>
    <el-link type="info">info</el-link> -->
    <!-- <el-link type="danger" disabled>info</el-link>
    <el-link type="success" underline>info</el-link> -->
    <!-- <el-link type="primary" icon="arrow-right">
    
    </el-link> -->
    <!-- <el-button-group>
      <el-button type="primary" icon="arrow-right">Previous Page</el-button>
      <el-button type="danger">aaa</el-button>
    </el-button-group>
    <el-alert title="success alert" type="success" />
    <el-alert title="info alert" type="info" />
    <el-alert title="warning alert" type="warning" />
    <el-alert title="error alert" type="error" /> -->


   
    
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
