<script setup lang="ts">
import SearchForm from '@/components/SearchForm.vue'
import useOptions from '@/composables/useOptions';
import Option from '@/components/Option.vue'

const { fetchOptions, options } = useOptions()

fetchOptions()

</script>

<template>
  <SearchForm />
  <Option v-for="option in options" :key="option.id" :option="option"></Option>
</template>
