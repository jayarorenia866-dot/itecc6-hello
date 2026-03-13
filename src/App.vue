<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <p>Hello! I am [Your Name] — ITECC6</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello from Vue.js!')
</script>

<style scoped>
.app { font-family: Arial; text-align: center; padding: 2rem; }
</style>