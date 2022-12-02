<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <TheNavbar />
  <main class="container mx-auto w-5/6  p-4">
    <RouterView />
  </main>

</template>

