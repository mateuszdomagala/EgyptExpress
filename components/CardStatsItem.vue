<template>
    <div class="card">
        <div class="card__details">
            <p class="card__text">{{ text }}</p>
            <p class="card__number">{{ number }}<span v-if="unit" class="card__number--unit">{{ unit }}<sup v-if="power">{{ power }}</sup></span></p>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    number: {
        type:  String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
    },
    power: {
        type: String,
    },
});
</script>

<style scoped lang="scss">
.card {
    background-color: var(--background-color-primary);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1.2rem;
    padding: 1.8rem;
    overflow: hidden;
    position: relative;

    &__details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__text {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: var(--text-color-primary-light);
    }

    &__number {
        font-size: 3rem;
        font-weight: 700;
        color: var(--text-color-secondary);

        @media (min-width: 992px) {
          font-size: 4rem;
        }

        &--unit {
            font-size: 2rem;

            @media (min-width: 992px) {
                font-size: 3rem;
            }   
        }
    }
}
</style>