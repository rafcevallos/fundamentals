// Factorial (5!) = 5 * 4 * 3 * 2 * 1

// Non-Recursive Function (n = 5)
function factorial(n) {
    if (n == 0 || n == 1) {  /* 5 is neither equal to 0 or 1 */
        return 1
    }

    let result = n /* On first iteration, result = 5 */

    while (n > 1) { /* While Loop -- 5 is greater than 1 so it goes into the loop */
        result = result * (n - 1) /* 5 = 5 * (4) */
        n = n - 1 /* Will continue until n is no longer greater than 1 */
    }
    return result
}

/* What is occuring on each iteration
n = 5
reseult = 5

n = 4
result = 20

n = 3
result = 60

n = 2
result = 120

n = 1
result = 120
*/

// Recursive Function -- The function calls itself
/* Must be a definite break otherwise there will be an infinite loop*/
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1); /* Here is the recursion.  Calling factorial within itself */
    }
}

// Recurisve Function with Arrow Syntax
let factorial = n => {
    if (n == 0 || n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))
console.log(factorial(10))