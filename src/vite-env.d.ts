/// <reference types="vite/client" />
declare module '@jiaminghi/data-view'
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
