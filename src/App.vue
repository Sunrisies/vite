<template>
  <div id="app" ref="appRef">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
  // import { ref, onMounted, onBeforeUnmount } from 'vue'
  const appRef = ref(null)
  console.log(appRef)
  // const resizeFn = () => {
  //   const documentWidth = document.body.offsetWidth
  //   const ratio = documentWidth / 1920
  //   if (documentWidth > 1920) {
  //     appRef.value.style.transform = `scale(${ratio}, ${ratio})`
  //   }
  // }
  // onMounted(() => {
  //   resizeFn()
  //   window.addEventListener('resize', resizeFn)
  // })

  // onBeforeUnmount(() => {
  //   window.removeEventListener('resize', resizeFn)
  // })
</script>

<style lang="less">
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 20px;
  }
  body {
    transform-origin: left top;
    background-size: 100% 100%;
  }
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
