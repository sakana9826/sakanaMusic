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