<script setup lang="ts">
  import { ref } from 'vue'

  const name = ref('saman')
</script>

<template>
  <vue-form-element
    v-model="name"
    type="input"
    input-type="text"
  />
</template>
