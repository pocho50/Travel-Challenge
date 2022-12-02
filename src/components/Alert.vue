<script setup lang="ts">
const props = defineProps<{
    msg: string,
    type: string
}>()

</script>

<template>
    <div class="m-4 alert shadow-lg w-2/3 mx-auto" :class="type">
        <div v-if="msg" class="justify-center w-full">
            {{ $t(msg) }}
        </div>
    </div>
</template>