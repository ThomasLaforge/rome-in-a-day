export const arrToMap = (size: number) => new Array(size).fill('').map((_,i) => i)

export const shuffle = (arr: any) => {
    const copy = arr.slice()

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy
}

export const difference = (arr1: any[], arr2: any[]) => arr1.filter(x => !arr2.includes(x));