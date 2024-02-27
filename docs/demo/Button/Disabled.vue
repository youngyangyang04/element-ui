<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
<div class="disabled block">
  <Button type="primary" disabled> Primary </Button>
  <Button type="success" disabled> Success </Button>
  <Button type="warning" disabled> Warning </Button>
  <Button type="danger" disabled> Danger </Button>
  <Button type="info" disabled> Info </Button>
</div>
</template>