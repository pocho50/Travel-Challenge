<script setup lang="ts">
import type Option from '@/types/Option';
import Flight from '@/components/Flight.vue'
const props = defineProps<{
    option: Option,
}>()


</script>

<template>
    <div class="border border-base-300 card my-5 bg-base-200 ">
        <div class="card-body">
            <div class="flex flex-col md:flex-row">
                <Flight type="Outward flight" :flight="option.outwardFlight" class="flex-auto md:w-2/6" />
                <Flight type="Return flight" :flight="option.returnFlight" class="flex-auto md:w-2/6 " />
                <div class="flex-auto md:w-1/6 ">
                    {{ $t('Price') }}: {{ $n(option.price, 'currency') }} <br>
                </div>
            </div>


        </div>
    </div>
</template>