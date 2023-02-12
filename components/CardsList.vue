<template>
    <section class="cards">
        <CardsListItem v-for="(pyramid, index) in pyramids" :key="index" :pyramid="pyramid" />
    </section>
</template>

<script setup lang="ts">
import { Pyramid } from '~~/types';

defineProps({
    pyramids: {
        type: Array as PropType<Pyramid[]>,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
  column-gap: 2.3rem;
  row-gap: 1.8rem;
}
</style>