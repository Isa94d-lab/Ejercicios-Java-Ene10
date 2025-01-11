function sonIguales(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    if (set1.size !== set2.size) {
        return false;
    }

    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }

    return true;
}

console.log(sonIguales([1, 2, 3], [3, 2, 1]));

console.log(sonIguales([1, 2, 3], [3, 2, 4]));