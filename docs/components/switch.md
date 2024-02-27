---
title: Switch
description: Swith组件文档
---


# Button 按钮

表示两种相互对立的状态间的切换，多用于触发「开/关」

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `activeColor` 属性与 `inactiveColor` 属性来设置开关的背景色。


<preview path="../demo/Switch/Basic.vue" title="基础用法" description="Switch 组件的基础用法"></preview>


## 文字描述
使用active-text属性与inactive-text属性来设置开关的文字描述。 使用 inline-prompt 属性来控制文本是否显示在点内。
使用active-text属性与inactive-text属性来设置开关的文字描述。
<preview path="../demo/Switch/Text.vue" title="文字描述" ></preview>

## 扩展的value类型
你可以设置 active-value 和 inactive-value 属性， 它们接受 Boolean、String 或 Number 类型的值。

<preview path="../demo/Switch/NumberValue.vue" title="扩展的value类型" ></preview>

## 禁用
设置disabled属性，接受一个Boolean，设置true即可禁用。
<preview path="../demo/Switch/Disabled.vue" title="禁用" ></preview>

## 尺寸
设置disabled属性，接受一个Boolean，设置true即可禁用。
<preview path="../demo/Switch/Size.vue" title="尺寸大小" ></preview>