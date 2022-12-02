<script setup lang="ts">
import type Flight from '@/types/Flight';
import Segment from '@/components/Segment.vue'
import Layovers from '@/components/Layovers.vue'

import { CalendarDaysIcon } from '@heroicons/vue/24/outline/index';
const props = defineProps<{
    flight: Flight,
    type: string
}>()


</script>

<template>
    <div>
        <span class="font-semibold">{{ $t(type) }}</span> |
        <CalendarDaysIcon class="h-6 w-6 inline" /> {{ $d(new Date(flight.departureDateTime), 'long') }} <br>
        {{ flight.origin }} - {{ flight.destination }}
        <Segment :nonstop="true" :segment="flight.segments[0]" v-if="flight.layovers === 0"></Segment>
        <Layovers v-else :segments="flight.segments"></Layovers>
    </div>
</template>