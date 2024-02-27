---
title: Form
description: Form组件文档
---


# Form 表单

基础用法

## 基础用法

最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。


<preview path="../demo/Form/Basic.vue" title="基础用法" description="Form 组件的基础用法"></preview>


## 表单验证

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 async-validator。


<preview path="../demo/Form/Validate.vue" title="基础用法" description="Form 组件的基础用法"></preview>

## 清空输入

基础按钮，使用 type属性来定义不同类型的按钮。


<preview path="../demo/Form/Reset.vue" title="基础用法" description="Form 组件的基础用法"></preview>