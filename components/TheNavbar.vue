<template>
    <div class="navbar">
        <nav>
            <ul class="navbar__list">
                <li>
                    <NuxtLink to="/">All pyramids</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/stats">Pyramids trivia & data</NuxtLink>
                </li>
            </ul>
        </nav>
        
        <slot />
    </div>
</template>

<style scoped lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 3.75rem;

    @media (min-width: 620px) {
        flex-direction: row;
    }

    &__list {
        list-style-type: none;
        display: flex;
        gap: 3rem;
    }
}

a {
    color: var(--text-color-primary);
    text-decoration: none;
}

.router-link-active {
    color: var(--text-color-primary-dark);
    font-weight: 700;
    
    &::after {
        content: "";
        display: block;
        margin-top: 0.5rem;
        height: 0.2rem;
        width: 1.8rem;
        background-color: var(--text-color-primary-dark);
        transform: scaleX(1);
        transition: transform 0.3s ease-in;
    }

    &:hover::after {
        transform: scaleX(1.5);
    }
}
</style>