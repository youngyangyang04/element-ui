import Dropdown from '@/components/Dropdown/Dropdown.vue'

Dropdown.install = (app: any) => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown

export * from './types'
