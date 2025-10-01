/**
 * Runs a series of test cases against a given function and logs the results.
 *
 * @param {Array<{input: Array<any>, expected: any}>} testCases - An array of test objects, e.g: [{ input: [1, 10], expected: 11 }] (1 + 10 = 11)
 * Each object must have an `input` array and an `expected` value.
 * @param {Function} func - The function to be tested. It will be called with the `input` array from each test case.
 * @returns {void}
 */

// export default function test(testCases, func) {
//     testCases.forEach((test, index) => {
//         console.time(index + 1)
//         const result = func(...test.input);

//         const passed = JSON.stringify(result) === JSON.stringify(test.expected);
//         console.log(`Test ${index + 1}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
//         if (!passed) {
//             console.log(`  Expected: ${JSON.stringify(test.expected)}`);
//             console.log(`  Got: ${JSON.stringify(result)}`);
//         }
//         console.timeEnd(index + 1)
//         console.log('\n')
//     });
// }


export default function test(testCases, func) {
    let passCount = 0;
    let failCount = 0;
    let failRecord = []

    testCases.forEach((test) => {
        const result = func(...test.input);

        const passed = JSON.stringify(result) === JSON.stringify(test.expected);

        if (passed) {
            passCount++;
        } else {
            failCount++;
            failRecord.push({
                input: test.input,
                expected: test.expected,
                got: result
            })
        }

    });

    console.table({
        'Total Tests': testCases.length,
        ...(passCount > 0 && { '✅ Passed': passCount }),
        ...(failCount > 0 && { '❌ Failed': failCount })
    });

    if (failRecord.length > 0) {
        console.log('\nFailed for the following cases:')
        console.table(failRecord.map(record => ({
            input: JSON.stringify(record.input),
            expected: JSON.stringify(record.expected),
            got: JSON.stringify(record.got)
        })));
    }

}