<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
<div class="basic block">
  <Button type="primary"> Primary </Button>
  <Button type="success"> Success </Button>
  <Button type="warning"> Warning </Button>
  <Button type="danger"> Danger </Button>
  <Button type="info"> Info </Button>
</div>

<div class="plain block">
  <Button type="primary" plain> Primary </Button>
  <Button type="success" plain> Success </Button>
  <Button type="warning" plain> Warning </Button>
  <Button type="danger" plain> Danger </Button>
  <Button type="info" plain> Info </Button>
</div>

<div class="round block">
  <Button type="primary" round> Primary </Button>
  <Button type="success" round> Success </Button>
  <Button type="warning" round> Warning </Button>
  <Button type="danger" round> Danger </Button>
  <Button type="info" round> Info </Button>
</div>

<div class="circle block">
  <Button type="primary" circle>   <Icon icon="star" /> </Button>
  <Button type="success" circle> <Icon icon="star" /> </Button>
  <Button type="warning" circle> <Icon icon="star" /> </Button>
  <Button type="danger" circle> <Icon icon="star" /> </Button>
  <Button type="info" circle> <Icon icon="star" /> </Button>
</div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>