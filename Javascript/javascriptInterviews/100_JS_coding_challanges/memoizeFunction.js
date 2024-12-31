function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const slowFunction = (num) => num * 2;
const memoized = memoize(slowFunction);


console.log(memoized(5)); // 10 (calculated)
console.log(memoized(5)); // 10 (cached)