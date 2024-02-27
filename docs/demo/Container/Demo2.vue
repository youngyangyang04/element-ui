<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup>
import ElContainer from '@/components/Container/Container.vue'
import ElAside from '@/components/Container/Aside.vue'
import ElMain from '@/components/Container/Main.vue'
</script>