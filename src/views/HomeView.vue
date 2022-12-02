<script setup lang="ts">
import SearchForm from '@/components/SearchForm.vue';
import AppButton from '@/components/AppButton.vue';
import useOptions from '@/composables/useOptions';
import Option from '@/components/Option.vue'
import Alert from '@/components/Alert.vue'
import type Search from '@/types/Search';
import { ref } from 'vue';

const loading = ref(false)
const alert = ref({ msg: '', type: 'alert-info' })

const { fetchOptions, getSearchOptions, page, hasMoreItems } = useOptions()

const resetError = () => {
  alert.value.msg = ''
}
const handleSearch = async (newSearch: Search) => {
  loading.value = true
  resetError()
  try {
    await fetchOptions(newSearch)
    if (getSearchOptions.value.length === 0) {
      alert.value.msg = 'No flights found'
      alert.value.type = 'alert-info'
    }
  } catch (error) {

    alert.value.msg = error instanceof Error ? error.message : error as string
    alert.value.type = 'alert-error'

  } finally {
    loading.value = false
  }
}

</script>

<template>
  <SearchForm @@search="handleSearch" :loading="loading" />
  <Alert v-show="alert.msg" :msg="alert.msg" :type="alert.type" />
  <Option v-for="option in getSearchOptions" :key="option.id" :option="option"></Option>
  <div class="flex justify-center">
    <AppButton @click="page++" v-if="hasMoreItems"> {{ $t('Load more') }} </AppButton>
  </div>
</template>
