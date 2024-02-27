import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import ElIcon from '../Icon/Icon.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
describe('Button.vue',() => {
  test('basic button', () => {
    // 挂载
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html())
    // slot get|find
    expect(wrapper.classes()).toContain('el-button--primary')
    expect(wrapper.get('button').text()).toBe('button')
    // events
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disable button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'disabled'
      }
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['ElIcon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(ElIcon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})