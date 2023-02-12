<template>
    <div class="wrapper">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    max-width: 1395px;
    margin: 0 auto;
    padding: 0 1.25rem;

    @media (min-width: 1435px) {
        padding: 0;
    }
}
</style>