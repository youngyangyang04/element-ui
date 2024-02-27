---
title: Message
description: Message组件文档
---


# Message组件

与Alert组件类似，Message组件也用于向用户提供关键的信息，但通常它是以非阻塞的方式显示，显示临时性的通知，比如操作成功，操作失败，通常会在屏幕的某个角落或顶部浮动，不会打断用户的操作。

## 基础用法

用来显示「成功、警告、消息、错误」类的操作反馈。设置 type 字段可以定义不同的状态，默认为info。

<preview path="../demo/Message/Basic.vue"></preview>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true, 并且Message拥有`duration`配置，默认的关闭时间为3000毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。
<preview path="../demo/Message/Close.vue"></preview>

## 手动关闭所有实例

调用`closeAll()`关闭所有创建的message消息。

<preview path="../demo/Message/CloseAll.vue"></preview>
