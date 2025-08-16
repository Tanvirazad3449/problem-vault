/**
 * Runs a series of test cases against a given function and logs the results.
 *
 * @param {Array<{input: Array<any>, expected: any}>} testCases - An array of test objects, e.g: [{ input: [1, 9], expected: 11 }]
 * Each object must have an `input` array and an `expected` value.
 * @param {Function} func - The function to be tested. It will be called with the `input` array from each test case.
 * @returns {void}
 */

export default function test(testCases, func) {
    testCases.forEach((test, index) => {
        console.time(index + 1)
        const result = func(...test.input);
        
        const passed = JSON.stringify(result) === JSON.stringify(test.expected);
        console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
        if (!passed) {
            console.log(`  Expected: ${JSON.stringify(test.expected)}`);
            console.log(`  Got: ${JSON.stringify(result)}`);
        }
        console.timeEnd(index + 1)
        console.log('\n')
    });
}
