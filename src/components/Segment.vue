<script setup lang="ts">
import type Segment from '@/types/Segment';
import moment from 'moment';
const props = defineProps<{
    segment: Segment,
    nonstop: boolean
}>()

const diffDate = () => {
    const a = moment(new Date(props.segment.arrivalDateTime));
    const b = moment(new Date(props.segment.departureDateTime));
    const hours = a.diff(b, 'hours')
    const minutes = a.diff(b, 'minutes') % 60
    return `${hours}h ${minutes} min`
}

</script>

<template>

    <div>
        <div v-if="!nonstop">
            <strong>{{ $t('Origin') }}</strong>: {{ segment.origin }} <br>
            <strong>{{ $t('Destination') }}</strong>: {{ segment.destination }}<br>
        </div>

        {{ segment.airline }} - {{ diffDate() }} <span v-if="nonstop"> - {{ $t('Non stop') }}</span>
        <hr v-if="!nonstop">
    </div>
</template>