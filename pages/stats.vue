<template>
        <TheNavbar />

        <section class="statistics">
            <CardStatsItem v-if="averageCost" :number="`$${averageCost}`" text="average tour cost">
                <img class="statistics__image" src="~/assets/icons/chart.svg" alt="chart" />
            </CardStatsItem>
            <CardStatsItem v-if="averageVolume" :number="`${averageVolume}`" unit="m" power="3" text="average pyramid volume">
                <img class="statistics__image" src="~/assets/icons/chart2.svg" alt="chart" />
            </CardStatsItem>
        </section>
        
        <section class="biggest-pyramids">
            <div v-if="biggestArea">
                <h2 class="biggest-pyramids__title">Biggest Base Area:</h2>
                <CardsListItem :pyramid="biggestArea" />
            </div>
            <div v-if="biggestVolume">
                <h2 class="biggest-pyramids__title">Biggest Volume:</h2>
                <CardsListItem :pyramid="biggestVolume" />
            </div>
        </section>
</template>

<script setup lang="ts">
import { dimensions } from "~~/types";

useHead({
    title: "EgyptExpress | Pyramids trivia & data",
});

const { pyramids } = usePyramids();

const averageCost = computed(() => {
    if (pyramids.value) {
        return Math.round(pyramids.value
            .filter(pyramid => pyramid.available !== false)
            .reduce((acc, pyramid) => acc + pyramid.price, 0) / pyramids.value.length
        );
    };
});

const averageVolume = computed(() => {
    if (pyramids.value) {
        return Math.round(pyramids.value
            .filter(pyramid => (pyramid.dimensions as dimensions).height !== 0)
            .reduce((acc, pyramid) => acc + volumeOfPyramid(pyramid.dimensions as dimensions), 0) / pyramids.value.length
        );
    };
});

const biggestArea = computed(() => {
    if (pyramids.value) {
        return findBiggest(pyramids.value, baseAreaOfPyramid)
    };
});

const biggestVolume = computed(() => {
    if (pyramids.value) {
        return findBiggest(pyramids.value, volumeOfPyramid)
    };
});
</script>

<style scoped lang="scss">
.biggest-pyramids,
.statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(321px, 1fr));
  column-gap: 2.3rem;
  row-gap: 1.8rem;
}

.biggest-pyramids {
    &__title {
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 1rem;
  }
}

.statistics {
    margin-bottom: 6.25rem;

    &__image {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.2;
    }
}
</style>