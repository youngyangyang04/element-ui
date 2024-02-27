<template lang="">
  <div>
    <el-form :model="model">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="model.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>
      <div>
        <el-button type="primary">Submit</el-button>
        <el-button type="info">Reset</el-button>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import ElForm from '@/components/Form/Form.vue'
import ElFormItem from '@/components/Form/FormItem.vue'
import ElInput from '@/components/Input/Input.vue'
import ElButton from '@/components/Button/Button.vue'
import { reactive } from "vue";
const model = reactive({
  email: '222',
  password: '333'
})

</script>