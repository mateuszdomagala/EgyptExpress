<template>
    <article class="card" :class="{unavailable: isAvailable}">
        <div class="card__image">
            <img :src="pyramid.imageUrl" :alt="pyramid.name">
        </div>
        <div class="card__content">
            <h3 class="card__title">{{ pyramid.name }}</h3>
            <div class="card__details">
                <p class="card__paragraph">
                    <span class="card__paragraph--light">Height: </span>{{ (pyramid.dimensions as dimensions).height }} m
                </p>
                <p class="card__paragraph">
                    <span class="card__paragraph--light">Tour Price: </span>${{ pyramid.price }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { dimensions, Pyramid } from '~~/types';

const props = defineProps({
    pyramid: {
        type: Object as PropType<Pyramid>,
        default: true,
    },
});

const isAvailable = computed(() => {
  return !props.pyramid.available;
});
</script>

<style scoped lang="scss">
.card {
    background-color: var(--background-color-primary);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1.2rem;
    overflow: hidden;
    cursor: pointer;

    &:hover img {
        transform: scale(1.2);
    }

    &__image {
        overflow: hidden;
        height: 11.5rem;
        
        & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }
    }

    &__content {
        padding: 1.5rem;
    }

    &__title {
        padding-bottom: 1.5rem;
        color: var(--text-color-secondary);
    }

    &__details {
        display: flex;
        gap: 2.6rem;
    }

    &__paragraph {
        font-size: 0.9rem;
        color: var(--text-color-secondary);
        font-weight: 700;

        &--light {
            font-size: 0.6rem;
            color: var(--text-color-primary-light);
            text-transform: uppercase;
            display: block;
        }
    }
}

.unavailable {
    opacity: 0.5;
}
</style>