/*
TODO:

TASK

Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums , of  numbers. The function must find and return the second largest number in nums.

INPUT FORMAT

Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer, n, denoting the size of the nums array.
The second line contains n space-separated numbers describing the elements in nums .

CONSTRAINTS

* 1 <= n <= 10
* 0 <= nums[i] <= 100, where nums[i] is the number at index i.
* The numbers in  are not distinct.

OUTPUT FORMAT

Return the value of the second largest number in the nums array.

*/


nums = [2, 4, 5, 3, 5, 4, 3, 1, 4]

function getSecondLargest(nums) {
    // Declare variables
    let largestNum = nums[0] /* Largest number will be at position 0.  In this case, it is currently 2*/
    let secondLargestNum = 0

    for (let i = 1; i < nums.length; i++) { /* Loop through the nums array starting at index 1 */
        if (nums[i] > largestNum) { /* Since we are starting our loop at position 1, the first number in the loop will be 4 which is greater than 2*/

            secondLargestNum = largestNum /* SecondLargestNum's value is now 2*/
            console.log("Currently, the second largest number is: ", secondLargestNum)

            largestNum = nums[i] /* largestNum is now 4 */
            console.log("Currently, the largest number is: ", largestNum)

            // On the next iteration, the secondLargestNum will be 4, and the largestNum will be 5
        }

        // Now, we compare the values of largestNum and secondLargestNum to determine the second largest number in the array
        console.log("Going Into Condition, secondLargestNum is: ", secondLargestNum)
        console.log("Going Into Condition, largestNum is: ", largestNum)
        console.log("i is currently ", nums[i])
        if (nums[i] > secondLargestNum && nums[i] < largestNum) {
            secondLargestNum = nums[i]
        }
        console.log("Value of secondLargestNum after conditional: ", secondLargestNum)
    }
    return secondLargestNum
}

// In this example, our expected output is 4

console.log("The Second Largest Number is: ", getSecondLargest(nums))