<script setup lang="ts">
import type Segment from '@/types/Segment';
import SegmentComponent from '@/components/Segment.vue'
const props = defineProps<{
    segments: Segment[]
}>()

</script>

<template>
    <div>
        <div class="dropdown">
            <label tabindex="0" class="btn btn-link m-1">{{ segments.length }} {{ $t('layovers') }}</label>
            <div tabindex="0"
                class="dropdown-content card card-compact w-96 p-2 shadow bg-neutral-content text-neutral-focus">
                <div class="card-body">
                    <SegmentComponent v-for="segment in segments" :key="segment.id" :segment="segment" :nonstop="false">
                    </SegmentComponent>
                </div>
            </div>
        </div>
    </div>
</template>