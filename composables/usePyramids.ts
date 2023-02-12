import { Pyramid } from "~~/types";

export function usePyramids() {
    const pyramids = ref<Pyramid[] | null>(null);
    const error = ref<string | null>(null);
    const pending = ref<boolean>(false);


    // Gdybym uzywal klasycznie fetcha w Vue:
    // const fetchData = async () => {
    //     error.value = null;
    //     pending.value = true;

    //     try {
    //         const response = await fetch("https://pyramids.mouflon.xyz/");
    //         pyramids.value = await response.json();

    //         pending.value = false;
    //         return pyramids;
    //     } catch (err) {
    //         error.value = (err as Error).message;
    //         pending.value = false;
    //     } 
    // }


    // Korzystajac z Nuxta 
    const fetchData = async () => {
        const { data, pending: NuxtPending, error: NuxtError } = await useFetch("https://pyramids.mouflon.xyz/");
        
        pyramids.value = data.value as Pyramid[];
        pending.value = NuxtPending.value;
        error.value = NuxtError.value?.message || null;
    };

    const transformData = () => {
        pyramids.value?.forEach((pyramid) => {
            if (typeof pyramid.dimensions === 'string') {
                const [width, length, height] = pyramid.dimensions.split("x");

                pyramid.dimensions = {
                    width: Number(width),
                    length: Number(length),
                    height: Number(height),
                };

                pyramid.price = Math.round(Number(pyramid.price) * 0.01);
            };
        });
    };

    const getData = async () => {
        await fetchData();
        transformData();
    }

    getData();

    return {
        pyramids,
        pending,
        error,
    };
};