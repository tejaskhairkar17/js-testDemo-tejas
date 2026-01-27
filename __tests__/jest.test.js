// sample.test.js

// A simple function to test
function sum(a, b) {
    return a + b;
}

// Jest test block
test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});