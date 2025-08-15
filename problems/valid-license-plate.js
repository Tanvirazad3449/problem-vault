import test from "../test.mjs"

// The license plate must start with exactly 3 uppercase alphabets (A-Z).
// It must be followed by exactly 4 digits (0-9).
// No extra spaces or characters are allowed.

// __________________________ APPROACH 1 __________________________

function f(s) {
    if (s.trim().length !== 7) return false
    return !!(s.match(/^[A-Z]{3}[0-9]{4}$/))
}

test([
    { input: ['ABC1234'], expected: true },
    { input: ['AB1234'], expected: false },
    { input: ['ABCD1234'], expected: false },
    { input: ['abc1234'], expected: false },
    { input: ['ABC12345'], expected: false },
    { input: ['hello'], expected: false },
    { input: ['ABC 1234'], expected: false },
], f)