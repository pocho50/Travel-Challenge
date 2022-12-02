<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { ref } from 'vue';

const props = defineProps<{
    loading?: boolean
}>()

</script>

<template>
    <div class="card bg-base-300 shadow-lg">
        <div class="card-body">
            <h2 class="card-title">Flights</h2>
            <form>
                <div class="flex  flex-wrap  flex-row mt-3 gap-x-2.5 ">
                    <div class="flex-auto ">
                        <label class="label">
                            <span class="label-text">Origin</span>
                        </label>
                        <input type="text" placeholder="Origin" class="text-base-content input input-bordered w-full" />
                    </div>

                    <div class="flex-auto ">
                        <label class="label">
                            <span class="label-text">Destination</span>
                        </label>
                        <input type="text" placeholder="Destination"
                            class="text-base-content input input-bordered w-full" />
                    </div>
                </div>

                <div class="card-actions justify-end mt-3">
                    <AppButton :loading="loading" type="submit" class="btn-accent">
                        Buscar
                    </AppButton>
                </div>
            </form>
        </div>
    </div>
</template>