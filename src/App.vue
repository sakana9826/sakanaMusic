<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <navbar/>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
//main {
//  position: fixed;
//  top: 0;
//  bottom: 0;
//  right: 0;
//  left: 0;
//  overflow: auto;
//  padding: 64px 10vw 96px 10vw;
//  box-sizing: border-box;
//  scrollbar-width: none; // firefox
//}
//
//@media (max-width: 1336px) {
//  main {
//    padding: 64px 5vw 96px 5vw;
//  }
//}
//
//main::-webkit-scrollbar {
//  width: 0px;
//}
</style>
