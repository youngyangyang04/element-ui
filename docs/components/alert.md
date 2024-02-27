---
title: Alert
description: Alert组件文档
---


# Alert

用于向用户提供重要的信息，例如错误消息、成功消息、警告或提示。

## 基础用法

`Alert`组件包括4种类型，`Success\Info\Warning\Error`, 分别表示成功消息，提示、警告和错误消息。

<preview path="../demo/Alert/Basic.vue"></preview>

## 主题
Alert 组件提供了两个不同的主题：light 和 dark。

通过设置 effect 属性来改变主题，默认为 light。
<preview path="../demo/Alert/Effect.vue"></preview>

## 自定义关闭按钮
你可以自定义关闭按钮为文字或其他符号。`closable`属性决定 Alert 组件是否可关闭，你可以设置 `close-text` 属性来代替右侧的关闭图标，
<preview path="../demo/Alert/Close.vue"></preview>

## 使用图标

你可以通过为 Alert 组件添加图标来提高可读性, 通过设置`show-icon`属性来显示Alert的icon
<preview path="../demo/Alert/Icon.vue"></preview>

## 文字居中
使用 center 
<preview path="../demo/Alert/Center.vue"></preview>
