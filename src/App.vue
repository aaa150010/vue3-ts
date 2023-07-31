<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { login } from '@/api/index.ts'

// /*
onMounted(() => {
  login({ username: 'admin', password: 'admin' }).then((res) => {
    console.log(res)
  })
})
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
