---
title: MessageBox
description: MessageBox组件文档
---


# MessageBox

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用 `ElMessageBox.alert` 方法以打开 alert 框。 它模拟了系统的 alert。

通过`title`属性设置`MessageBox`的标题，`content`设置正文内容，`confirmBtnText`设置确定按钮的文本内容。
它默认会返回一个Promise对象便于进行后续操作的处理。

<preview path="../demo/MessageBox/Basic.vue"></preview>

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框

调用 `ElMessageBox.confirm` 方法以打开 confirm 框。它模拟了系统的 confirm。

`showCancelBtn`设置是否显示取消按钮和`cancelBtnText`设置取消按钮的文本内容。
<preview path="../demo/MessageBox/Confirm.vue"></preview>