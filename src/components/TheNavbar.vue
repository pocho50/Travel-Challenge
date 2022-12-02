<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline/index'
import AppButton from '@/components/AppButton.vue'

const isDark = useDark({
    attribute: 'data-theme',
    valueDark: 'business',
    valueLight: 'autumn'
});
const toggleDark = useToggle(isDark)
</script>
<template>

    <div class="navbar bg-base-100 shadow-md">
        <div class="container mx-auto">
            <div class="flex-1">
                <h1 class="text-xl">Travel challenge</h1>

            </div>
            <!-- Right Side -->
            <div class="flex-none">
                <AppButton :icon="true" @click="toggleDark()">
                    <component :is="isDark ? MoonIcon : SunIcon" class="h-6 w-6" />
                </AppButton>

            </div>
            <select class="select w-20 max-w-xs" v-model="$i18n.locale">
                <option value="es-AR">ES</option>
                <option value="en-US">EN</option>

            </select>

        </div>
    </div>
</template>
