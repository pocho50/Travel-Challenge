<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import type Search from '@/types/Search';
import { ref } from 'vue';

const props = defineProps<{
    loading?: boolean
}>()

const nonstop = ref(false)
const budget = ref(null)

// events
const emit = defineEmits<{
    (e: "@search", serach: Search): void;
}>();

const handleSubmit = () => {
    emit("@search", {
        nonstop: nonstop.value,
        budget: budget.value
    });
}

</script>

<template>
    <div class="card bg-base-300 shadow-lg">
        <div class="card-body">
            <h2 class="card-title">{{ $t('Journeys') }}</h2>
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col md:flex-row flex-wrap justify-center mt-3 gap-x-10 ">
                    <div class="flex-1 ">
                        <label class="label">
                            <span class="label-text">{{ $t('Budget') }} ({{ $t('optional')
                            }})</span>
                        </label>
                        <input type="number" v-model="budget" min="0" :placeholder="$t('Budget')"
                            class="text-base-content input input-bordered w-full" />
                    </div>

                    <div class="flex-1 ">
                        <label class="label cursor-pointer">
                            <span class="label-text">{{ $t('Non stop') }}</span>
                        </label>
                        <input type="checkbox" v-model="nonstop" class="toggle toggle-accent" />

                    </div>
                    <div class="flex-none flex items-end">
                        <AppButton :loading="loading" type="submit" class="btn-accent">
                            {{ $t('Search') }}
                        </AppButton>
                    </div>
                </div>


            </form>
        </div>
    </div>
</template>