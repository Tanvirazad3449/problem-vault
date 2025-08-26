/**
 * Runs a series of test cases against a given function and logs the results.
 *
 * @param {Array<{input: Array<any>, expected: any}>} testCases - An array of test objects, e.g: [{ input: [1, 9], expected: 11 }]
 * Each object must have an `input` array and an `expected` value.
 * @param {Function} func - The function to be tested. It will be called with the `input` array from each test case.
 * @returns {void}
 */
export default function test(testCases, func) {
    let report = "", passCount = 0

    testCases.forEach((test, index) => {
        const result = func(...test.input);

        let passed = false, expectedStr = ''

        if (Array.isArray(test.expected) && test.expected.length > 0) {
            // Case 1: expected is a list of possible correct values
            if (!Array.isArray(test.expected[0])) {
                passed = test.expected.some(exp => JSON.stringify(result) === JSON.stringify(exp));
                expectedStr = test.expected.join(' or ')
            }
            // Case 2: expected is a single correct array
            else {
                passed = JSON.stringify(result) === JSON.stringify(test.expected[0]);
                expectedStr = JSON.stringify(test.expected[0])
            }
        } else {
            // Single value case
            passed = JSON.stringify(result) === JSON.stringify(test.expected);
            expectedStr = JSON.stringify(test.expected)


        }

        report += `${passed ? '✅ Passed with' : '❌ Failed with'}`
        report += ` input: ${JSON.stringify(...test.input)}`
        report += ` ${!passed ? `(expected: ${expectedStr},` : ''}`
        report += ` ${!passed ? `got: ${JSON.stringify(result)})` : ''} \n \n`

        if (passed) {
            passCount++
        }
    });

    report += `👉 Passed ${passCount} out of ${testCases.length}`
    console.log(report);
}
