import Tooltip from '@/components/Tooltip/Tooltip.vue'

Tooltip.install = (app: any) => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip

export * from './types'
