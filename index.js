// Recursive function to flatten a multi-dimensional array
const flatten = arr =>
    // Use a reducer since its behavior is well
    // suited to recursion
    arr.reduce(
        (acc, curr) =>
            // Determine whether this is an array
            Array.isArray(curr)
            ?   // If it is we append the recursion result
                // to the accumulated value -- which will eventually
                // return a non-Array value
                acc.concat(flatten(curr))
            :   // Otherwise, append the non-Array result
                // to the accumulated value
                acc.concat(curr),
        // Initialize accumulator to an empty array
        []
    );

module.exports = flatten;
