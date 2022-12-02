<script setup lang="ts">
import type SegmentType from '@/types/Segment';
import Segment from '@/components/Segment.vue'
const props = defineProps<{
    segments: SegmentType[]
}>()

</script>

<template>
    <div>
        <div class="dropdown">
            <label tabindex="0" class="btn btn-link m-1">{{ segments.length }} {{ $t('layovers') }}</label>
            <div tabindex="0"
                class="dropdown-content card card-compact w-64 md:w-96 p-2 shadow bg-neutral-content text-neutral-focus">
                <div class="card-body">
                    <Segment v-for="segment in segments" :key="segment.id" :segment="segment" :nonstop="false" />

                </div>
            </div>
        </div>
    </div>
</template>