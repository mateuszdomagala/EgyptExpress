import { dimensions, Pyramid } from "~~/types";

export function volumeOfPyramid({ width, length, height }: dimensions) {
    return width * length * height / 3;
}

export function baseAreaOfPyramid({ width, length }: dimensions) {
    return width * length
}

export const findBiggest = (pyramids: Pyramid[], func: ({}: dimensions) => number) => {
    return pyramids
            .map(pyramid => {
                const area = func(pyramid.dimensions as dimensions)
                return {...pyramid, baseArea: area}
            })
            .reduce((acc, pyramid) => acc.baseArea > pyramid.baseArea ? acc : pyramid
        );
}