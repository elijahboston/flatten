const test = require('ava');
const flatten = require('./index');

test('already flat array should be maintained', t => {
    const actual = flatten([1, 2, 3])

    t.deepEqual(actual, [1, 2, 3]);
});

test('flattens multiple sub-arrays', t => {
    const actual = flatten([[0, 1], [2, 3], [4, 5, 6]])

    t.deepEqual(actual, [0, 1, 2, 3, 4, 5, 6]);
});

test('flattens multi-level array', t => {
    const actual = flatten([[0, 1], [2, [3, [4, 5]]], 6]);

    t.deepEqual(actual, [0, 1, 2, 3, 4, 5, 6]);
});