---
title: Select
description: Select组件文档
---


# Select选择框

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 el-option 的 value 属性值

<preview path="../demo/Select/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>


## 有禁用选项
在 el-option 中，设定 disabled 值为 true，即可禁用该选项

<preview path="../demo/Select/Disabled.vue" title="基础用法" description="Select 组件的基础用法"></preview>


## 禁用状态
禁用整个选择器组件

为 el-select 设置 disabled属性，则整个选择器不可用。

<preview path="../demo/Select/Disabled.vue" title="基础用法" description="Select 组件的基础用法"></preview>


## 可筛选
可以利用筛选功能快速查找选项。

为el-select添加filterable属性即可启用搜索功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 filter-method 来实现。 filter-method 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。

<preview path="../demo/Select/Filterable.vue" title="基础用法" description="Select 组件的基础用法"></preview>

## 可清空单选
您可以使用清除图标来清除选择。

为 el-select 设置 clearable 属性，则可将选择器清空。 需要注意的是，clearable 属性仅适用于单选。

<preview path="../demo/Select/Clearable.vue" title="基础用法" description="Select 组件的基础用法"></preview>
