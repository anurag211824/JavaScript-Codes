const values = [false, 0, -0, "", null, undefined, NaN, true, 5, -3, "hello", "0", {}, [], function(){}, 1n, -10n, Infinity, -Infinity];

values.forEach(value => {
    console.log(`Type: ${typeof value}, Evaluates to: ${Boolean(value)}`);
});
