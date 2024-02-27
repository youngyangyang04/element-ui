---
title: Tooltip
description: MessageBox组件文档
---


# Tooltip

Tooltip组件可以在用户悬停或点击界面元素时，以浮动的方式显示一段文本或图标，提供有关该元素的附加信息，例如解释按钮的功能、标签的含义等。

## 基础用法



使用`content`属性决定提示消息。
<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 展示位置
通过`placement`属性决定提示展示的位置效果。

`placement`属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
<preview path="../demo/Tooltip/Placement.vue" title="Hover触发" description="Hover触发Tooltip的显示"></preview>

## Hover触发
通过`trigger`属性改变Tooltip的触发方式，可选值有 `hover | click`
<preview path="../demo/Tooltip/Trigger.vue" title="Hover触发" description="Hover触发Tooltip的显示"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。

<preview path="../demo/Tooltip/Content.vue" title="Hover触发" description="Hover触发Tooltip的显示"></preview>
