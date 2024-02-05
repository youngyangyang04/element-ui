import Form from '@/components/Form/Form.vue'
import FormItem from '@/components/Form/FormItem.vue'
Form.install = (app: any) => {
  app.component(Form.name, Form)
}
FormItem.install = (app: any) => {
  app.component(FormItem.name, FormItem)
}
export default Form
export {
  FormItem
}
export * from './types'
