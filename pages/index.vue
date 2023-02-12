<template>
    <TheNavbar>
        <select name="filter" v-model="selectedOption" class="select">
            <option v-for="option in options" :key="option.id" :value="option.value" class="select__option">{{ option.name }}</option>
        </select>
    </TheNavbar>

    <CardsList v-if="sortedPyramids" :pyramids="sortedPyramids" />
    <div v-if="pending">Loading...</div>
    <div v-if="error">{{ error }}</div>
</template>

<script setup lang="ts">
import { dimensions } from '~~/types';

const { pyramids, pending, error } = usePyramids();

const selectedOption = ref("latest");

const options = [
    {id: 1, value: "latest", name: "Latest"},
    {id: 2, value: "price-descending", name: "Price descending"},
    {id: 3, value: "price-ascending", name: "Price ascending"},
    {id: 4, value: "volume-descending", name: "Volume descending"},
    {id: 5, value: "volume-ascending", name: "Volume ascending"},
    {id: 6, value: "height-descending", name: "Height descending"},
    {id: 7, value: "height-ascending", name: "Height ascending"},
];

const sortedPyramids = computed(() => {
  if (selectedOption.value === "price-descending") {
    return pyramids.value?.slice(0).sort((a, b) => (a.price < b.price ? 1 : -1));
  };
  if (selectedOption.value === "price-ascending") {
    return pyramids.value?.slice(0).sort((a, b) => (a.price > b.price ? 1 : -1));
  };
  if (selectedOption.value === "height-descending") {
    return pyramids.value
        ?.slice(0)
        .sort((a, b) => ((a.dimensions as dimensions).height < (b.dimensions as dimensions).height ? 1 : -1));
  };
  if (selectedOption.value === "height-ascending") {
    return pyramids.value
        ?.slice(0)
        .sort((a, b) => ((a.dimensions as dimensions).height > (b.dimensions as dimensions).height ? 1 : -1));
  };
  if (selectedOption.value === "volume-descending") {
    return pyramids.value?.slice(0).sort((a, b) => volumeOfPyramid(a.dimensions as dimensions) < volumeOfPyramid(b.dimensions as dimensions) ? 1 : -1);
  };
  if (selectedOption.value === "volume-ascending") {
    return pyramids.value?.slice(0).sort((a, b) => volumeOfPyramid(a.dimensions as dimensions) > volumeOfPyramid(b.dimensions as dimensions) ? 1 : -1);
  };

  return pyramids.value;
});
</script>

<style scoped lang="scss">
.select {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.9rem;
    margin-top: 1rem;
    border: 1px solid var(--text-color-primary-light);
    background-color: var(--background-color-primary);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none; 

    background-image:
      linear-gradient(45deg, transparent 50%, var(--text-color-primary-dark) 60%),
      linear-gradient(135deg, var(--text-color-primary-dark) 40%, transparent 50%);
    background-position:
      calc(100% - 1.25rem) 0.9rem,
      calc(100% - 0.875rem) 0.9rem,
      100% 0;
    background-size:
      0.4rem 0.3rem,
      0.4rem 0.3rem;
    background-repeat: no-repeat;

  &::-ms-expand {
    display: none;
  }

  @media (min-width: 620px) {
    width: 13rem;
    margin-top: 0;
  }
}
</style>