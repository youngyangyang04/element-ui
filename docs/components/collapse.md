---
title: Collapse
description: Collapse组件文档
---


# Collapse

Collapse组件用于创建可折叠的内容区域。它允许用户点击标题或触发器来展开或收起相关内容，从而有效地管理页面上的信息和节省空间。

## 基础用法

在页面上展示大量内容时，Collapse组件可以帮助节省空间，用户可以通过点击标题或触发器来展开或收起内容区域。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" ></preview>

## 手风琴模式
同一时间只有一个折叠项处于展开状态的模式。当用户点击其中一个折叠项展开时，其他的折叠项会自动关闭，保持页面上只有一个折叠项是展开的状态。通过 `accordion` 属性来设置是否以手风琴模式显示。
<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式"></preview>

